
/**************** HOMEWORK *********************/
/***********************************************/


function square(num) {
    var squareNum = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squareNum);
    return squareNum;
}

square(10);

function half(num) {
    var halfNum = num / 2;
    console.log('Half of ' + num + ' is ' +  halfNum);
    return halfNum;
}

half(8);

function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}

percentOf(25, 200);

function areaCirc(radius) {
    var area = Math.PI * square(radius);
    console.log('The area of circle with radius ' + radius + ' is ' + area);
    return area;
}

areaCirc(5);

function allMath(num) {
    var halfOf = half(num);
    var squareOf = square(halfOf);
    var area    = areaCirc(squareOf);
    var result  = percentOf(squareOf, area);
}

allMath(10);