function sortedFrequency(arr, target) {
    let arrLen = arr.length - 1
    let left = 0 
    let right = arrLen
    let foundLeftIdx = 0
    let foundRightIdx = 0

    //find first instance and log it to foundLeftIdx
    while (left <= right) {
        let center = left + Math.floor((right - left)/2)
        if ((center === 0 || arr[center - 1] < target ) && arr[center] === target) {
            foundLeftIdx = center
            break;
        } else if (arr[center] < target) { //If center is less than target, drop left side as first instance is to the right
            left = center + 1
        } else { 
            right = center - 1
        }
    }

    left = 0 
    right = arrLen
    //first last instance and log it to foundRightIdx
    while (left <= right) {
        let center = left + Math.floor((right - left)/2)
        if ((center === arrLen || arr[center + 1] > target ) && arr[center] === target) {
            foundRightIdx = center
            break;
        } else if (arr[center] > target) { //If center is more than target, drop right side as last instance is to the left
            right = center - 1
        } else { 
            left = center + 1
        }
    }
    return (foundRightIdx !== 0 ) ? foundRightIdx - foundLeftIdx + 1 : -1 // the difference in indexes is the freqency
}

console.log(sortedFrequency([1,1,2,2,2,2,3], 2))

module.exports = sortedFrequency