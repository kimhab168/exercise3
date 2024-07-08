
//2 Create a function that takes an array of numbers and a callback. The callback should return true if a number is even. Use the callback to filter the array synchronously
let numbers = [1,2,3,4,5,6,7,8,9]

function isEven(element){
    if(element%2==0)
        return true
}

function showEven(numbers,isEven) {
    const evenFiltered = []
    for(let i=0;i<numbers.length;i++){
        if(isEven(numbers[i])){
            evenFiltered.push(numbers[i])    
        }
    }
    console.log(evenFiltered,"is Even Number")
}
showEven(numbers,isEven)
