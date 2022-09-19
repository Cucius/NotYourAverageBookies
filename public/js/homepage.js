// Get element by class
homebtn1 = $('#homebtn1');
homebtn2 = $('#homebtn2');
homebtn3 = $('#homebtn3');
// Get element by id
homeid1 = $('#homeid1');
homeid2 = $('#homeid2');
homeid3 = $('#homeid3');

// Function add books to user database that stores their books they have chose
async function addBooktoUser(){

};

// Event handler
homebtn1.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(homeid1.text());
})
homebtn2.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(homeid2.text());
})
homebtn3.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(homeid3.text());
})