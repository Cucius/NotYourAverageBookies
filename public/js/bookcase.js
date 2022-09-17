//  Get element by class
var genreBtns = $(".getBtn");

// Functions
async function runGenre(data){
document.location.replace(`/post/${data}`);
}

// Event handler
genreBtns.on("click", function(e) {
    e.preventDefault();
    console.log(e.target.textContent);
    runGenre(e.target.textContent);
})