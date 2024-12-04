function outer() {
    let a = 20;

    setTimeout(function () {
        console.log(a);
    }, 0);
}

outer();

// Clouser 
