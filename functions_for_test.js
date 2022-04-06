function stringLength(str){
    return str.length;
}

function reverseString(str) {
    return [...str].reverse().join('');
}

class Calculator {
    
    add(a, b){
        return a + b;
    }

    subtract(a, b){
        return a - b;
    }

    divide(a,b){
        return a/b;
    }

    multiply(a, b){
        return a * b;
    }
}

function capitalizeFirstLetter(str){
    return str[0].toUpperCase() + str.substring(1);
}

module.exports = {stringLength, reverseString, Calculator, capitalizeFirstLetter}