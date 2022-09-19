// Get element by class
genrebtn1 = $('#genrebtn1');
genrebtn2 = $('#genrebtn2');
genrebtn3 = $('#genrebtn3');
genrebtn4 = $('#genrebtn4');
genrebtn5 = $('#genrebtn5');

// Get element by id
genreid1 = $('#genreid1');
genreid2 = $('#genreid2');
genreid3 = $('#genreid3');
genreid4 = $('#genreid4');
genreid5 = $('#genreid5');


// Function - add books to user database that stores their books they have choose


// Event handler
genrebtn1.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(genreid1.text());
})
genrebtn2.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(genreid2.text());
})
genrebtn3.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(genreid3.text());
})
genrebtn4.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(genreid4.text());
})
genrebtn5.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(genreid5.text());
})