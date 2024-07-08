//1 Write a function called that takes an array of numbers and a callback function that processes each element of the array. Use the callback to square each number in the array
//callback end before higher order function end
let arr = [1,2,3,4,5,6,7,8,9]
function showResult(arr,toSqaure){
    const Sqaured = []
    for(let i=0;i<arr.length;i++){
        Sqaured.push(toSqaure(arr[i]))
    }
    console.log(Sqaured)
}
let toSqaure = element=>element*element
showResult(arr,toSqaure)
