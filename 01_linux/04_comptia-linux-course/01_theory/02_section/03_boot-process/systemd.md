systemd = system daemon is a background process.

init system : when linux boots then system starts the one process PID1, after that it starts all services parallel.
the old init system is SysVinit which start services one by one and slow.


BIOS/UEFI
    ↓
Bootloader (GRUB)
    ↓
Linux Kernel
    ↓
PID 1 → systemd   ← this is where systemd takes over
   ↓
starts all services (network, display, SSH, etc.)
    ↓
Login screen / shell