// when you write 'math' -> this is called a package
-> when your code run then node firstly search 'math' in node.exe (our native module) if not present in there then it start searching in nodo_modules folder


<!-- ***** Second method to make any file npm package ********** -->
1: make node_modules>math>math.js (the last math.js file name it could be  anything )
-> still this not work in the ES6 module system



<!-- ****** It work with CJS module system (also ES6) ******** -->
1: make node_modules>math>math.js
                          package.json
and tell the main file and your work is done..

-> You created your own package (BUT in your local vs code not registered in npm )


npm = node package manager
<!-- ***** What is npm module ******* -->
Those modules which present in the node_modules folder is called the npm modules..
