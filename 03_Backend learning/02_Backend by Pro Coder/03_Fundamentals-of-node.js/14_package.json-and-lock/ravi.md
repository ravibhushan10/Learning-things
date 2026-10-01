Libraries/Packages (code you publish to npm for others to use)
Don't push the package-lock.json file.

For the project/application always push the package-lock.json file

<!-- ******************* -->
when you run : npm i (npm reads your package.json to see what dependencies you need, and then i read the package-lock.json file  to download the exact dependencies)

-> when you lock file is present then it download the exact version from the lock file


-> If lock file is not present then ,
    <!-- *****  ^1.0.0  ***** -->
    <!-- *****  ~1.0.0  ***** -->
    <!-- *****  1.0.0  ***** -->
    <!-- *****  express : "*"  ***** -->  means download the lattest version
    <!-- *****  >1.0.0  ***** -->
    <!-- *****  >=1.0.0  ***** -->
    <!-- *****  <1.0.0  ***** -->
    <!-- *****  <=1.0.0  ***** -->
    caret: ^ (minor and patch)
    tilde: ~(patch)
    no symbol : (1.0.0) -> it download the exact same version that mentioned


   -> npm install the update version of that dependencies (no matter what written in package.json file) , but only the minor,patch update download
