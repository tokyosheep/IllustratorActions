function  ascii2Hex (hex) {
    return hex.replace(/./g, function (a) {return a.charCodeAt(0).toString(16)})
}

function zeroTail(num){
	num = num.toString();
	if(num.indexOf(".") == -1){
		num += ".0";
	}
	return num;
}