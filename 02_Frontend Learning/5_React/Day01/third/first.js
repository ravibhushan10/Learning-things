const element=React.createElement('h1',{},'Hello Ravi');

//  ReactDOM.render(element,document.getElementById('root'));
//  ReactDOM.render not supported in react-18 it only supported for below react-17(warning generated in console)


// To use ReactDOM  in react-18  use :like this

const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(element);


// *****************************************************************************************
// Lets take an example if you click in multiple option in navbar(netflix) one by one :


//    1: React-17: (Single rendering) it firstly load all content of that button then you will be able to click other button because you know that  JS is a single threaded language(executes each task one by one).
// ->Here control of rendring in the 'root' hand . root says pahale pure content ko load karo then dusare task ko execute karunga


//    2: React:18:(concurrent rendering) its gives you faster and smooth user experince
//  -> Here control in Reactroot hand . it says content load karo and jaise hi dusra button click huaa to pahale wale ko roko(jaha tak bhi finish huaa ho ) click wale ko start karo  so concurrent rendring
// ******************************************************************************************       
