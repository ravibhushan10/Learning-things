kernel: it is a piece of code that handle all the hardware process like start and maintain the hardware and restarting the os 

<!-- ******************* -->
when you anything open by normal , search by windows then its parent is "file explorer"
when you open by terminal then its parent is powershel->terminal->file explorer  (start chrome): because we open the terminal by searching in windows

<!-- ********* process ********** -->
Active state of program is called process

At a time one process execute by one core , OS context switches each process multiple time(1 sec 10000 times)

<!-- ********* Thread ********** -->
process when starts then i use resources create new memory
in porcess firstly download then watch anything

thread-> one process ke multiple work ko thread create karke kara sakte hai (chrome different tab)

thread not create the new memory it use the allocated process memory
thread ko process start karta hai and uahi use karta hai , at a same time both thread execute so we can dowload and watch video at a same time 

<!-- *********  ********** -->
node.js-> multithread
javascript-> single thread