// Get element by class
btn1 = $('#btn1');
btn2 = $('#btn2');
btn3 = $('#btn3');
// Get element by id
id1 = $('#id1');
id2 = $('#id2');
id3 = $('#id3');

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