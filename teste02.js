function countLetterA(str) {
    let count = 0;
    let lowerStr = str.toLowerCase();
    
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === 'a') {
            count++;
        }
    }

    return `A letra 'a' aparece ${count} vez(es) na string.`;
}

let string = "JavaScript é uma linguagem incrível!";
console.log(countLetterA(string));
