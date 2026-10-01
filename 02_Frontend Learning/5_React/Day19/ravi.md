With the help of tailwind you don't need to make seprate file , classname , idname , you just write the css in html without leaving the html page.

<!-- ****************************************** -->
1: Go to tailwind css website and find your own build tool like vite, parcel , emmer, etc.

2:  mkdir my-project
   cd my-project
   npm init -y
   npm install parcel
   mkdir src
   touch src/index.html

3:   npm install tailwindcss @tailwindcss/postcss  

4:   create a new file in  day19 folder   with file_name  ".postcssrc"
     and paste this code in the file
     {
      "plugins": {
       "@tailwindcss/postcss": {}
      }
     }

5:  Go to src folder make a file index.css
and paste the code in the file

@import "tailwindcss";   

6: npx parcel src/index.html

<!-- ******************************************* -->
To give dynamically margin and padding 
<!-- p-[1px]  m-[3px]-->

<!-- ****************** Advantage and Disadvantage *************************** -->
Advantage:
-> don't need to jump again and again into css just stick with html and write your code.
->suppose that Amazon:  you write once  bg-green-300 and use in multiple button and heading without rewriting again and again. it increase the css file size.and more time takes for development
-> if you have less code then your website works better that provide the optimization.                         


Disadvantage:
-> it kills the readibility of code because at a time what you read html or css it becom lengthy also

