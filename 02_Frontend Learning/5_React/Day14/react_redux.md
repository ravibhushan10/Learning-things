State management: sending the data from parent to child through props drilling .. 
state: changing the value of UI like increament ,decreament.

But we solve with context API but this is more difficult to manage.firstly we state lifting at most common ancestor then we able to send data.
<!-- ******************** Redux ******************* -->
Redux: ye state management ko asan bana deta hai. In redux no need to state lifting.
  
Definition:
Redux is a predictable state management library for JavaScript applications. It provides a centralized store that holds the entire application’s state, ensuring data flow is consistent and traceable.
<!-- ******************************************* -->
Concept: agar aapko kabhi bhi koi state variable create karna hai to kisi component ke ander mat create karo,  ek store(name ki centralized file ) me create karo  jo ki sare ko accessible hoga 

->Like a global file(object).

<!-- ************** Reducer *************************** -->
Reducer: it is a pure function that stored in store file . Like increament,decreament,reset. 

To avoid the accendital change of data we store all reducer(function) in store file . so no one can change the value of state randomly.

means store stored the all Reducer
<!-- *********************** Dispatch ****************** -->
Dispatch : Dispatch is the method used to send actions to the store.  
-> it sends the functions call to store like increament(),decreament(),reset() all these things sended by dispatch.
<!-- ************** Slice ***************** -->
Need of Slice: when multiple component want't to give the same name of state, reducer then we create the slice so name conflict not arrise.

Slice : when you divide the store into small-small part then each part known as slice. Each slice have own state and reducer .

->Different slice has same state and reducer .

->During dispatch you have to attach (slice no,reducer function)  then store find with slice number and component able to get  responce.

<!-- *************** Slice ********************* -->
A slice is a logical division of the Redux store that contains:

Its own state.
Its own reducers (functions to modify that state).
Automatically generated action creators.

Each slice represents a specific feature or domain of your application — not a “slice number.”

->every slice have unique name.
<!-- ************ Redux toolkit,redux,react-redux ********************* -->
Redux: it is a independent library , it is old where you have to manually setup all those things, Nowdays we use redux-toolkit.


Redux-toolkit:It is a tool which  is used to create the store and slice. 
->it is a tool , for better way use of redux.
->inside redux/toolkit it use the dependencies of redux(core redux)+ own extra functionlity.

react-redux: it is a bridge that established the communication between redux(reduxtoolkit) and react.

->Downloaad react-redux:        npm install react-redux
->Download Redux toolkit:       npm install @reduxjs/toolkit

<!-- ******************************* -->
