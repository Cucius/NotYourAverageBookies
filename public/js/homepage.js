// const {BookList}  = require("../../models/");

// Get element by class
homebtn1 = $('#homebtn1');
homebtn2 = $('#homebtn2');
homebtn3 = $('#homebtn3');
// Get element by id
homeid1 = $('#homeid1');
homeid2 = $('#homeid2');
homeid3 = $('#homeid3');

// Function add books to user database that stores their books they have chose
async function addBooktoUser(id){
    // let query the db 
    const name = window.sessionStorage.getItem('username')
    console.log(name);
    const response = await fetch('/book/', {
        method: "POST",
        body: JSON.stringify({name, id}),
        headers: { "Content-Type": "application/json" }
    });
    // console.log(response);
    if(response.ok){
        console.log(response)
    }
    const popBooks = await fetch('/bookcase/',{
        method: "POST",
        body: JSON.stringify({name}),
        headers: { "Content-Type": "application/json" }
    });
    if(response.ok){
        console.log(popBooks);
    }

};

// Event handler
homebtn1.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    addBooktoUser(homeid1.text());
})
homebtn2.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    addBooktoUser(homeid2.text());
})
homebtn3.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(homeid3.text());
    addBooktoUser(homeid3.text());
})