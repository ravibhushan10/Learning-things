

<!-- *******************Problem fixed ************************** -->
When you getting previous output ::
1  Remove-Item -Recurse -Force .parcel-cache, dist
2  npx parcel index.html

When you face npm audit fix problem 
1 npm outdated
2 npm install parcel@latest
3 npm audit

<!-- *************************************** -->
const [color,setColor] = useState("black");

Working: when this line runs first time js allocate the memory then execution start
but next time when setcolor("orange") call then it render then again the component original function then 
That time again color and setcolor gets new memory and color assingend by orange that's how we are able to change the value in const.

<!-- ********************************************** -->
For primitive data types it render twice when you pass both time same value  ... Then it says secon time im rendering ( "Bellout" called ) means is bar chala de raha hu agli bar nahi chalunga that's it not render third time 

Logically change nahi hona chaiye tha in second time but react wale ne bola hai function ke overhead ko kam karne ke liye aisa kiya gaya hai

But non primitve it only render once second time check if same refrence it not render 

Object.is(oldValue, newValue).   it compare for usestae

<!-- *****************Need of UseEffect****** -->

It saves your one extra rendring(change the color )  means dom manipultation not done when color have same value

UseEffect():
It runs in last whether it written in first line in the function when all  instructions execute inside the function then it execute in last and function end

