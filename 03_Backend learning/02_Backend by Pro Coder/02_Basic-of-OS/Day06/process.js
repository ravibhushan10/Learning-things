console.log(process.argv);
// it gives you array [node.js path , absolute path of file]


node app.js ravi lokesh 
[
    'C:\\Program Files\\nodejs\\node.exe',
    'D:\\ravib\\PRO\\OS\\Day06\\app.js',
    'ravi',
    'lokesh'
]


console.log(process.env);

console.log(process.version);

console.log(process.versions);

console.log(process.platform);

console.log(process.arch);

// methods
process.cwd();
process.chdir("/temp")


console.log(process.memoryUsage());

console.log(process.uptime());

// 0 means we are telling there is no error , parent process recive the message
// 1 means there is some error , we are telling to its parent process
console.log(process.exit(0));
