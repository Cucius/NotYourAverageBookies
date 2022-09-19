// Get element by class
btn1 = $('#genrebtn1');
btn2 = $('#genrebtn2');
btn3 = $('#genrebtn3');
btn4 = $('#genrebtn4');
btn5 = $('#genrebtn5');

// Get element by id
id1 = $('#genreid1');
id2 = $('#genreid2');
id3 = $('#genreid3');
id4 = $('#genreid4');
id5 = $('#genreid5');


// Function


// Event handler
btn1.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(id1.text());
})
btn2.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(id2.text());
})
btn3.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(id3.text());
})
btn4.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(id4.text());
})
btn5.on('click', function(e){
    e.preventDefault();
    // console.log(e.target)
    console.log(id5.text());
})