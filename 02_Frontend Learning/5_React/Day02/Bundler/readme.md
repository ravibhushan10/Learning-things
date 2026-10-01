<!-- *****************JSX***************** -->
//JSX(JavaScript XML): It is not a part of React library.
//  In react added extra functionllity is called JSX.

// JSX : say you can write normal html like code in js file i will convert later into react element
// "Babel" is tool that is used to convert JSX into the JavaScript (React) element
<div>
    <div>
        <h1>
            <p>Hello coder army</p>
        </h1>
    </div>
</div>

<!-- ***************Need of Bundler(Webpack,vite,parcel,roolup , esbuild)************ -->

-> To production ready (Optimized code :remove space comment ).
-> network call lagega and data laoo when it don't understand the React.createelement in first.js.
-> It will go to that  react and react DOM website and check all things and then convert your code into js.
-> which will take more time and your website is slow.
-> all 4500 lines are not usable.





-> Bundler: It is a tool.. it review your all html,css ,js,react files.... all code and make a bundle and you push this bundle into production.

-> It optimized your code remove comment , space and all dependency like react and react dom (use the portion which is actually need in code) not include all code.
 
-> minimize your image size , file size -->

-> Advantage of Bundler:
  1: loads only what’s needed per page.
  2: fewer files , faster loading , fast execution, smooth working.


<!-- *****************Install parcel************************* -->

-> bundler is a tool that takes all your project files (JS, CSS, images, React JSX, etc.), processes them, and packages them into optimized bundles for the browser.

1:We use parcel

Steps: 
     1:(i) -> npm init : it starts a step-by-step interactive process to create a package.json file.
                eg:
                  package name: (my-project)
                  version: (1.0.0)
                  description: 
                  entry point: (index.js)
                  test command: 
                  git repository: 
                  keywords: 
                  author: 
                  license: (ISC)
     1:(ii) -> npm init -y (or --yes) :The -y flag automatically answers “yes” to all the       questions using default values.
              eg:
                {
                 "name": "my-project",
                 "version": "1.0.0",
                 "description": "",
                 "main": "index.js",
                 "scripts": {
                   "test": "echo \"Error: no test specified\" && exit 1"
                 },
                 "author": "",
                 "license": "ISC"
               }



     2: npm install parcel

     **now we don't need to add both two script in html file react and react DOm ** we just simply install from npm

     3: npm install react
     4: npm install react-dom

<!-- ***************npm(node packet manager)*******************  -->
-> It is a code collection of all tools used in development ( JS of libraries/packeges(json files)).
-> It is a play store for JavaScript


-> Package.json: Metadata(data of data) about your project.
-> your project dependent on which- which tool and compiler.


-> package-lock.json: it is the auto generated file of npm during installation of parcel.
-> it shows ki aapke code in exactly kon se version ko use kiya hai during building .Ye sare dependencies ki exact version note karke rakhta hai . Taki in feature koi aapke website ko use kare to oo in sare exact version ko download kare then uska code sahi se chalega

It has the pre-wrriten code(json files) of all tools like :

1:typescript transpiler
2: parcel
3: vite 
4: webpack
5: React
6: React DOM
7: JSX


<!-- ************************************************************* -->
-> when you install parcel then it sends all different-different files includes parcel which present in a Node module folder....

-> parcel install all dependencies (parcel jiska code use kar raha hai oo bhi install hoga). Again next jo code use kar raha  hai uske dependencies and further go upward . That's why they install all entire things.

-> parcel is not written from scratch it uses other code moudule and other also use others code module.    
     
<!-- ****************** About Version ******************  -->

version: 18.2.3

Formate of any version:

version: 18    .2      .3
        Major  Minor  Patch

First digit= Major update 
second digit= Minor update(new feature(functionallity) add)
third digit= Patch (means only bug fixed)        

<!-- ************************************************************* -->
->You should push package-lock.json and package.json file into github


-> Don't push your node_module folder into github(it is automatically generated when anyone download your full project with package-lock.json, package.json.)
-> They  simply run "npm install"  in their terminal and firstly npm looks the package-lock.json file and download all the dependencies of their exact version


<!-- ****************************(json file)****************************** -->

-> When  package-lock.json  not available in your project:

1: Your package.json looks like(with ^):
                               "dependencies": {
                                "parcel": "^2.16.0",
                                "react": "^19.1.1",
                                "react-dom": "^19.1.1"
                              }
  ^ : Means when anyone type npm install then only  all minor and patches updates are downloaded.(your code work perfectly)  


2: Your package.json looks like(without  ^):
                               "dependencies": {
                                "parcel": "2.16.0",
                                "react": "19.1.1",
                                "react-dom": "19.1.1"
                              }
  Means when anyone type npm install then  major  minor and patches updates are downloaded. (means your code might be buggy because you downloaded major update but your code built with previous version)     

<!-- *************************(import module)*********************************** -->
To run html file(js file ) with import module 

1: Add in html file:  <script type="module" src="first.js"></script>

2: Add in js file:   
                 import React from "react";
                 import ReactDOM from "react-dom/client";

3: In terminal type: npx parcel index.html 
<!-- *********************(dist)**********************************  -->
->Production ready code goes to : dist folder
 
 Run: npx parcel build index.html

->parcel-cache : helps to build project fastly

<!-- **********************(.map file)************************** -->
file_name.map :   .map file is a separate file that maps minified/transpiled code back to your original source code.

-> you don't push the .map code to anywhere because anyone can see you bussiness logic code .Because with the help of .map file you can generate original normal file