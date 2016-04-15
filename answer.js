//Question 1
function printPositives (num){
    if (num > 0){
        console.log(num)
    }
}


var arr = [1,3,4,7,-1,3,-42];

console.log(arr.forEach(printPositives))


//Question 2
function getPositives(num){
    if (num > 0){
        return num;
    }
}

var arr1 = [5,-2,4,-4]

console.log(arr1.filter(getPositives))