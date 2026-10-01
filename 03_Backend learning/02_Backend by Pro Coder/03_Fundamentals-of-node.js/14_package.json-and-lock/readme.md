<!-- this is for if you want to publish on npm -->

1: npm init  (ask for the every point)
    OR
1: npm init -y  (it automatic by default fill the value according to own)
<!-- ******** -->
keywords -> means when anyone search for this package then what keyword trigger for the SEO
main : "index.js" -> entry point file of your project



<!-- **********  Script *********** -->
->it is a object and work like the command inside written it
script{
    "hi":"ls"
}

// these are the special command that don't need the run like "npm run start" , you can also execute these command without run like npm start, npm stop, npm restart..
   "start":"whoami",
   "test": "ls",
   "restart": "node",
   "stop": "git -v"


-> when you run in terminal "npm run hi" then it execute the "ls" command
-> you can give many scripts with any command

<!-- ************** -->
"dev" : "node --watch index.js"
-> it help restart the server automatically like the nodemon , so use this one


<!-- ***************** Dependencies ******************************* -->
"semantic version" -> Go to this website

version=major.minor.patch


<!-- ********************* Dev dependencies ******************* -->
when you : npm i axios -D (then it comes under dev dependencies)
-> it is used at the time of development , not pushed into the production
