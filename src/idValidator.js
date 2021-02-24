function luhnsAlgorithm(number){
    let str = number.split("");
    let result = 0;
    for(var i = 0; i < str.length; i++){
        str[i] = parseInt(str[i]);
        if(i % 2 == 1){
            str[i] += str[i];
        }
        if(str[i] > 9){
            str[i] -= 9;
        }
        result += str[i];
    }
    return result % 10 == 0;
}

function    isValidDate(d, m, y){
    m = parseInt(m, 10) - 1;
	let result = 0;
	if(m == 1){
		if(y % 4 == 0 && y % 100 || y % 400 == 0){
			result = 29;
		}
		else{
			result = 28;
		}
	}
	else if(m == 8 || m == 3 || m == 5 || m == 10){
		result = 30;
	}
	else{
		result = 31;
	}
	return (m >= 0 && m < 12 && d > 0 && d <= result);
}

function ValidateID(idNumber){
    let counter = 0;
    let date = idNumber.slice(0, 6);
    let d = parseInt(date.slice(0, 2));
    let m = parseInt(date.slice(2, 4));
    let y = parseInt(date.slice(4, 6));
    if(luhnsAlgorithm(idNumber) == true){
        counter++;
    }
    if(idNumber.length == 13){
        counter++;
    }
    if(isValidDate(d, m, y) == true){
        counter++;
    }
    if(idNumber[idNumber.length - 3] == 1 || idNumber[idNumber.length - 3] == 0){
        counter++;
    }
    return counter == 4;
}

console.log(ValidateID("2909035800085"));

module.exports = {ValidateID, isValidDate}

