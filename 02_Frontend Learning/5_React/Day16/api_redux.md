<!-- API fetch in redux  -->
we don't fetch the API in locally because fetch is a expensive oepration 
->if multiple component need the same data then everyone is try to fetch .and i have to write the multiple time code and then disptach to store
->We fetch the data Globally 
<!-- ********************************* -->
Dispatch(increment)
           ^
           |
        Action
        type: slice_name/increment
        payload: argument   
<!-- ***************************** -->
don't leave the useEffect empty you have to pass the dependency without dependencies it fetch the api again and again when the your app is render.
<!-- ************************************************************* -->

Fetchdata(20) : it is not an action it is a function , when store recieve it then it check with its slice name but it is not a function so its slice name is not exist ...  Here middleware identify this is not a action so , middleware isko store ke pass nahi jane dega and usko bolega iss function ko call kariye 