<!-- **************************************************************** -->
dependencies:        jo aapko production me dalna hai
dev dependencies:    For developer use during writing the code
<!-- **************************File info ************* -->
1:  vite.config.js->  
                 (i): It's a JavaScript file where you define custom settings  for your Vite project.
                 (ii): It tells Vite how to build, serve, and optimize your app.


2:  eslint.config.js -> 
                     ->it enforces coding rules and styles, and warns you about errors or bad practices.
                    ->To define coding rules (e.g., must use semicolons, no unused variables).
                    ->It's a JavaScript file that tells ESLint how to check your code.


3: src: It is the folder where all your source code lives.  That is written by   you, your original code.

      (i): Assets: ->
                   -> assets is a folder where you put static files your app needs.
                   ->These files are usually images, icons, fonts, videos, or audio that your app will use.
                   ->vite.parcel  can optimize images, compress them, or rename them for caching.

      => so use the assests to store the local image for your project it optimized by vite like image compression 
      => Avoid to add image in public folder               


       (ii): index.css: ->
                   -> It contains global styles that apply to your entire app.
                   -> Like your body , * styling in normal css.

       (iii): App.css:->    
                   ->Usually contains styles specific to the App component.

        (iv): main.jsx ->
                   ->This is the entry point of your React app.
                   ->It renders your main component (App) into the DOM.

        (v):  App.jsx ->      
                   -> It’s a React component where you build your app structure, import other components, and use state or logic.
                   ->This is the main component of your app.


   => .jsx is a JavaScript file that support  JS+XML 



<!-- ************************ Process of vite ******************************* -->
1: npm create vite@latest : for creating project 
2: npm install 
3: npm run dev : during writing code 

<!-- *************************************************************** -->
To find the all information about project realated : go to package.json/script

-> here you can add shortcut by own use to any command

"scripts": {
    "dev": "vite",       // you can change it to dev-> start (npm run start)
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
    "cool" : "erup38jkk-cvjkl;sf ewjrw"  // like this rename by own use shortcut
  }

1: npm run dev -> to start project 
2: npm run build -> to build the project


                                                
