function number_format(number) {
    number = number.toString();
    let o = number.length % 3;
    let result = number.substring(0, o);
    for (; o < number.length; o += 3) {
        result += ' ' + number.substring(o, o + 3);
    }
    return result.trim();
}

function changeCalcValue() {
    var x = document.getElementById("userCount").value;
    var y = document.getElementById("speciality").value;
    var result = Math.floor(x * y);
    console.log(result.toString());
    document.getElementById("megabyte").innerHTML = number_format(result);
}

