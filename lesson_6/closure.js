let a = "a";

function createList(){
    const list = [];
    
    function filterList(arr) {
        const ticket = true
        console.log(a);
        console.log(list);
        console.log(ticket);
    }

    console.log(list);
    console.log(a);
    filterList();
};

console.log(a)
createList();

