//Question 1
function printPositives (num){
    if (num > 0){
        console.log(num)
    }
}


var arr = [1,3,4,7,-1,3,-42];

//console.log(arr.forEach(printPositives))


//Question 2
function getPositives(num){
    if (num > 0){
        return num;
    }
}

var arr1 = [5,-2,4,-4]

//console.log(arr1.filter(getPositives));


//Quesiton 3
function filterArray (arr,funct){
    return arr.filter(funct)
}

function filt (elem){
    if(elem){
        return elem;
    }
}

var arrTruthy = [false, true, 1, 0, "hello"]

//console.log(filterArray( arrTruthy, filter))

// console.log(arrTruthy.filter(filt))
 
 //Question 4
// var string = "Hi this is a string! Hdlskdjfnsjdbfjsdhjkhfjk";
 
 function longestword(str){
    var splitter = str.split(" ");
    return splitter.reduce(reductor);
 }
 
 function reductor(prev, curr){
     if ( prev.length < curr.length ) {
         return prev = curr;
     } else {
         return prev;
     }
 }
 
 //console.log(longestword(string));
 
 
 //Question 5
 
 var str = "Hi this is fun!"
 

 
 function counter (str){
     var letters = str.split("");
     var vowel = ['a', 'e', 'i', 'o', 'u'];
     return letters.reduce(function(counter, next){
         if (vowel.indexOf(next) !== -1){
         counter++;
     }
     return counter;
     }, 0)
 }

//console.log(counter(str));


//Question 6
var myNums = [3, 5, 6, 7, 2]

function highLow(arrNum) {
    return arrNum.reduce(function(accum, next) {
        if (accum.lowest > next) {
            accum.lowest = next;
        } else if (accum.highest < next){
            accum.highest = next;
        }
        
        return accum;
    },{
        highest: -Infinity,
        lowest: Infinity
    })
    
}

//console.log(highLow(myNums))

//Question 7
var myNums = [6, 3, 54, -15, 2, 8, -9 ]

function highLow(arrNum) {
    return arrNum.reduce(function(accum, currentValue) {
        if (currentValue > accum.highest) {
            accum.secondHighest = accum.highest;
            accum.highest = currentValue;
        } else if (currentValue > accum.secondHighest) {
            accum.secondHighest = currentValue;
            
        } else if (currentValue < accum.lowest) {
            accum.secondLowest = accum.lowest;
            accum.lowest = currentValue;
        } else if (currentValue < accum.secondLowest){
            accum.secondLowest = currentValue;
        }
        
        
        return accum;
    } 
    
    ,{
        highest: -Infinity,
        secondHighest: -Infinity,
        lowest: Infinity,
        secondLowest: Infinity
    })
    
}

console.log(highLow(myNums))

