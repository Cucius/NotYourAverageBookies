function randomizer(data){
    // console.log(data)
    const randomBooks = [];
        let lastIndex = Math.floor(Math.random()*data.length);
        for (let i = 0; i< 3 ; i++){
            let arrayIndex = Math.floor(Math.random()*data.length); 
            while (arrayIndex === lastIndex){
                arrayIndex = Math.floor(Math.random()*data.length); 
            }
            randomBooks.push(data[arrayIndex]);
            lastIndex = arrayIndex;

        };
    // console.log(randomBooks)    
    return randomBooks;    
};


module.exports = randomizer;


