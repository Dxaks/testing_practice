// this function takes string and return the string with the first later capitalised
function capitalised(str) {
    let arr = str;

    let cap1 = arr.split('').splice(1, arr.length - 1).join('')
    let cap = arr.split('').splice(0,1).join('').toUpperCase();

    return cap.concat(cap1);
}


function reverseStr(str) {
    return str.split('').reverse().join('');
}


const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    }
}


function analyzeArray(array) {

    let average = array.reduce((acc, curr) => {
        return acc + curr;
    }) / array.length;

    let min = array.reduce((acc, curr) => {
        if (acc < curr) {
            return acc
        } else {
            return curr
        }
    })

    let max = array.reduce((acc, curr) => {
        if (acc > curr) {
            return acc 
        } else {
            return curr
        }
    })

    let length = array.length

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}



function caeserCipher(message, code) {

    const alphabet = [
        'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X',
        'Y', 'Z',
    ];

    const str = message.split('');
    const str2 = message.toUpperCase().split('');

    let decode = '';
    
    for (let i = 0; i < str.length; i++) {

        const nonAlphaChar = !alphabet.includes(str2[i])
        
        if (nonAlphaChar) {
            decode += str2[i];
        }

        for (let j = 0; j < alphabet.length; j++) {

           let position = j + code;

            if (position > alphabet.length - 1) {
                position = position - alphabet.length;
            }
            

            if (str2[i] === alphabet[j] && str[i] !== alphabet[j]) {
                decode += alphabet[position].toLowerCase();
            } else if (str2[i] === alphabet[j]) {
                decode += alphabet[position];
            }
        }
    }
    return decode  
}





export { capitalised, reverseStr, calculator, analyzeArray, caeserCipher };
