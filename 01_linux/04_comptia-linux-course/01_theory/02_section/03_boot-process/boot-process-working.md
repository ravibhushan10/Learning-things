BIOS/UEFI  (firmware)
This is not interacted by the mouse , only interact with the keyboard.

================================================================
       LINUX BOOT PROCESS — COMPLETE NOTES
================================================================

----------------------------------------------------------------
 CLARIFICATIONS (Common Misconceptions)
----------------------------------------------------------------

Firmware vs Bootloader:
  Firmware  → made by motherboard manufacturer (ASUS, Gigabyte)
              lives on Flash chip soldered to motherboard
              prebuilt at factory, replaceable via BIOS update
  Bootloader→ made by OS community (GNU project / GRUB)
              lives on your SSD/HDD
              installed when you install Ubuntu, fully replaceable

Bootloader does NOT load entire OS into RAM.
  Only kernel + initrd go into RAM at boot.
  Rest of OS stays on disk, loaded ON DEMAND as apps open.

Controllers = special chips for peripherals:
  USB Controller   → manages all USB ports (keyboard, mouse, drives)
  SATA Controller  → manages hard drives
  NVMe Controller  → manages M.2 SSDs
  PCIe Controller  → manages GPU, expansion cards
  PS/2 Controller  → old keyboard/mouse ports
  I2C Controller   → Internal Integrated Circuit (sensors, touchpad)
  SMBus            → System Management Bus (fan speed, temp sensors)
  IOAPIC           → Input Output Advanced Programmable Interrupt
                     Controller (tells CPU "keyboard pressed a key!")

----------------------------------------------------------------
 HARDWARE INVOLVED
----------------------------------------------------------------

Motherboard
├── CPU
├── RAM
├── Flash ROM chip          ← Firmware/UEFI lives here permanently
├── CMOS chip + battery     ← stores BIOS settings (time, boot order)
│                              CMOS = Complementary Metal Oxide Semiconductor
│                              NVRAM = Non Volatile RAM (modern equivalent)
│
└── Controllers (special chips):
    ├── USB Controller
    ├── SATA Controller     ← Serial ATA = Serial Advanced Technology Attachment
    ├── NVMe Controller     ← Non Volatile Memory express
    ├── PCIe Controller     ← Peripheral Component Interconnect express
    ├── I2C Controller      ← Internal Integrated Circuit
    ├── SMBus               ← System Management Bus
    └── IOAPIC              ← Input Output Advanced Programmable Interrupt Controller

----------------------------------------------------------------
 FULL BOOT CHAIN OVERVIEW
----------------------------------------------------------------

[POWER ON]
    ↓
[FIRMWARE / UEFI]       ← Flash chip on motherboard
    ↓  POST → init hardware → find ESP on SSD
[GRUB Bootloader]       ← /EFI/ubuntu/grubx64.efi on SSD
    ↓  load vmlinuz + initramfs into RAM
[KERNEL]                ← now running in RAM
    ↓  init drivers → mount real root → start systemd
[systemd PID 1]         ← /sbin/init in RAM
    ↓  start all services
[Display Manager]       ← login screen (GDM / LightDM)
    ↓
[GNOME / KDE Desktop]   ← you are in!

----------------------------------------------------------------
 PHASE 0 — POWER ON (Hardware)
----------------------------------------------------------------

You press Power button
    ↓
PSU (Power Supply Unit) sends "Power Good" signal
    ↓
Motherboard gets stable voltage
    ↓
CPU gets RESET signal → Program Counter jumps to hardcoded address
    ↓
That address points to → Flash ROM chip (UEFI)

Program Counter = register inside CPU holding address of next instruction
The CPU has NO idea what OS you have — it just follows that fixed address

----------------------------------------------------------------
 PHASE 1 — FIRMWARE (BIOS / UEFI)
----------------------------------------------------------------

BIOS = Basic Input Output System           (old, pre-2010)
UEFI = Unified Extensible Firmware Interface (modern)
he kernel starts exactly one process with PID 1. That process is responsible for starting everything else 
--- STEP 1A: POST (Power On Self Test) ---

Firmware checks:
  ├── Is CPU working?
  ├── Is RAM present and readable?
  ├── Is GPU present?
  ├── Are storage controllers responding?
  └── Are basic I/O devices connected?

If POST fails → BEEP codes (old BIOS) or error screen
If POST passes → continue boot

--- STEP 1B: Hardware Initialization ---

Firmware initializes controllers:
  ├── Enables USB Controller    → keyboard/mouse now work
  ├── Enables SATA/NVMe        → disks are now readable
  ├── Initializes RAM timings  → RAM properly configured
  └── Sets up interrupt table  → IRQ/APIC system ready

IRQ  = Interrupt ReQuest
APIC = Advanced Programmable Interrupt Controller

--- STEP 1C: Find Bootable Device ---

Firmware checks boot order stored in CMOS/NVRAM:
  1. SSD
  2. USB
  3. Network (PXE = Preboot eXecution Environment)

For UEFI:
  └── Looks for ESP (EFI System Partition) on disk
      └── ESP is a FAT32 partition with .efi files
          FAT = File Allocation Table
          └── Finds /EFI/ubuntu/grubx64.efi → loads it into RAM

----------------------------------------------------------------
 PHASE 2 — BOOTLOADER (GRUB)
----------------------------------------------------------------

GRUB = GRand Unified Bootloader

UEFI loads GRUB into RAM and hands CPU to it
    ↓
GRUB reads config: /boot/grub/grub.cfg
    ↓
Shows boot menu (OS selection screen, timeout ~5s)
    ↓
You select Ubuntu (or timer runs out)
    ↓
GRUB loads two files into RAM:
  ├── vmlinuz   → compressed kernel
  │   vmlinuz = Virtual Memory LINUx + Z (Z = zipped/compressed)
  │
  └── initrd.img / initramfs
      initrd     = INITial Ram Disk
      initramfs  = INITial RAM File System (modern name)
    ↓
GRUB jumps to kernel entry point → GRUB exits RAM

--- WHY initramfs? (Chicken-and-Egg Problem) ---

Real Ubuntu root lives on ext4/btrfs partition on NVMe SSD.
To READ that partition, kernel needs the NVMe driver.
But the NVMe driver IS on that partition.
→ Deadlock!

Solution: initramfs is a tiny temporary Linux system (~50MB)
built into RAM with just enough drivers (NVMe, LUKS, LVM)
to mount the real root partition.
Then real root takes over and initramfs is discarded.

LUKS = Linux Unified Key Setup (disk encryption)
LVM  = Logical Volume Manager
ext4 = 4th Extended Filesystem
btrfs= B-Tree File System

Key paths:
  /boot/grub/grub.cfg         ← GRUB config file
  /boot/vmlinuz-6.x.x         ← compressed kernel
  /boot/initrd.img-6.x.x      ← initramfs image
  /EFI/ubuntu/grubx64.efi     ← UEFI bootloader binary

----------------------------------------------------------------
 PHASE 3 — KERNEL BOOTS
----------------------------------------------------------------

Kernel decompresses itself in RAM
    ↓
Sets up memory management (MMU = Memory Management Unit)
    ↓
Detects all hardware (CPU cores, RAM size, PCI devices)
    ↓
Loads drivers from initramfs
    ↓
Mounts real root filesystem (your / partition on SSD)
    ↓
Discards initramfs from RAM
    ↓
Starts PID 1 → /sbin/init → which is systemd on Ubuntu

PID = Process ID
/sbin/init = System BINaries / INITialization

What kernel manages FOREVER after this:
  ├── CPU scheduling   → which process runs on which core
  ├── RAM management   → virtual memory, page tables, swap
  ├── Device drivers   → GPU, USB, NVMe, network card
  ├── Filesystem       → reads/writes to ext4, NTFS, FAT
  ├── Network stack    → TCP/IP implementation
  ├── System calls     → apps ask kernel to do hardware things
  └── Security         → permissions, namespaces, seccomp

Check kernel version:
  uname -r
  uname = Unix NAME, -r = release version

----------------------------------------------------------------
 PHASE 4 — systemd (Init System)
----------------------------------------------------------------

systemd = system daemon (runs as PID 1, parent of all processes)

Kernel starts systemd as PID 1
    ↓
systemd reads unit files from: /etc/systemd/system/
    ↓
Starts services IN PARALLEL:
  ├── NetworkManager  → networking
  ├── bluetoothd      → bluetooth daemon
  ├── cups            → Common Unix Printing System
  ├── sshd            → SSH = Secure SHell daemon
  ├── gdm / lightdm   → display manager (login screen)
  │   GDM = GNOME Display Manager
  │   LDM = LightDM Display Manager
  └── ... all background services
    ↓
Display Manager starts → shows login screen
    ↓
You log in → GNOME / KDE launches → Desktop appears

----------------------------------------------------------------
 MEMORY MAP: What lives in RAM vs Disk
----------------------------------------------------------------

RAM (during normal use):
  ├── Kernel                    ← always in RAM, never swapped
  ├── systemd + running services
  ├── GNOME / desktop environment
  ├── Open apps (Firefox, Terminal, VSCode)
  └── File cache (recently accessed files)

Disk (loaded on demand):
  ├── App binaries (/usr/bin/)
  ├── Shared libraries (.so files)  ← .so = Shared Object
  ├── Your files (/home/)
  └── Installed-but-not-running apps

The OS is NEVER fully in RAM.
Only what is currently needed is loaded.
This is called: Virtual Memory + Demand Paging.

----------------------------------------------------------------
 FULL FORMS QUICK REFERENCE
----------------------------------------------------------------

BIOS     = Basic Input Output System
UEFI     = Unified Extensible Firmware Interface
ESP      = EFI System Partition
EFI      = Extensible Firmware Interface
FAT      = File Allocation Table (FAT32 = 32-bit version)
POST     = Power On Self Test
PSU      = Power Supply Unit
CMOS     = Complementary Metal Oxide Semiconductor
NVRAM    = Non Volatile RAM
PXE      = Preboot eXecution Environment
GRUB     = GRand Unified Bootloader
vmlinuz  = Virtual Memory LINUx + Z (zipped)
initrd   = INITial Ram Disk
initramfs= INITial RAM File System
LUKS     = Linux Unified Key Setup
LVM      = Logical Volume Manager
ext4     = 4th Extended Filesystem
btrfs    = B-Tree File System
MMU      = Memory Management Unit
PID      = Process ID
IRQ      = Interrupt ReQuest
APIC     = Advanced Programmable Interrupt Controller
IOAPIC   = Input Output APIC
USB      = Universal Serial Bus
SATA     = Serial Advanced Technology Attachment
NVMe     = Non Volatile Memory express
PCIe     = Peripheral Component Interconnect express
I2C      = Internal Integrated Circuit
SMBus    = System Management Bus
TCP/IP   = Transmission Control Protocol / Internet Protocol
SSH      = Secure SHell
GDM      = GNOME Display Manager
GNOME    = GNU Network Object Model Environment
GNU      = GNU's Not Unix (recursive acronym)
PCI      = Peripheral Component Interconnect
ROM      = Read Only Memory
RAM      = Random Access Memory
CPU      = Central Processing Unit
GPU      = Graphics Processing Unit
SSD      = Solid State Drive
HDD      = Hard Disk Drive
NVMe     = Non Volatile Memory express (M.2 slot SSDs)

================================================================
<!-- ****** BIOS (old)******* -->
BIOS = basic input output system

Initialize the hardware(by POST checks all hardware is good and correct) and pass the control to the bootloader.


<!-- ********************* -->