//Code your solutions in this file


function writeCards(names, value) {
    const messageNames = [];
    for (let i = 0; i < names.length; i++) {
        messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
    
    } return messageNames;
}

writeCards(["Guadalupe","Ollie","Aki"], "surprise");


function countDown(i) {
    while (i >= 0) {
        console.log(i);
        i--;
    }
}