usememo  hook :useMemo is a React Hook that lets you cache the result of a calculation between re-renders. Like fibonacci is alredy calculated so don't need to recalculate


<!-- ************************************************* -->
Callback function: jab number ki value change hoga tab hi ye fibbonnaci wala function call hoga 
const result = useMemo(()=>Fibbonnaci(number),[number]);


Normal function: ye to call hoga hi chahe value change ho ya na ho ..That's why we use callback function
const result = useMemo(Fibbonnaci(number),[number]);

<!-- ********************************************************* -->Closure → remembers variables from outer scope.

useCallback → remembers the same function calculation result across renders.when they called when value is not changed then it not recalculate but value is change then it recalculate