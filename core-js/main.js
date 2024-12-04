//============ Closure Examples // Main Funtion
function outer() {
    var a = 10;
    function inner() {
        a = a + 1;
        console.log(a);
    }
}
var fn = outer();
fn();
fn();
fn();
Output: 11, 12, 13;
//============End ----------- //

