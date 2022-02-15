function countZeroes(arr) {
    //Edge cases
    if (arr[-1] === 1) {
        return 0
    }
    if (arr[0] === 0) {
        return arr.length
    }

    //Main counter
    let arrLen = arr.length
    let left = 0 
    let right = arrLen

    //uses binary search to half the seach area each iteration | O(log n)
    while (left <= right) {
        let center = left + Math.floor((right - left)/2)
        if (arr[center - 1] === 1 && arr[center] === 0) {
            return arrLen - center //index of center marks the beginning, the last index will always be zero (once the edge cases are checked) 
        } else if (arr[center] === 0) { //Middle point landed in the zeros but was not the first occurance, drops the right side knowing that the first occurance has to be to the left of it
            right = center - 1
        } else { //Middle point landed in ones, drops the left side.
            left = center + 1
        }
    }

    return 0 //should theorectiaclly never happen due to checking edge cases prior to main counter
}



module.exports = countZeroes