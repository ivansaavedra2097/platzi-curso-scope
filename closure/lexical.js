const myGLobal = 0;

function fn() {
    const myNumber = 1;

    console.log(myGLobal);

    function parent() { //funcion interna
        const inner = 2;
        console.log(myNumber,myGLobal);
        
        function child() {
            console.log(inner,myNumber,myGLobal);
        }
        return child();
    }
    return parent();
}

fn();