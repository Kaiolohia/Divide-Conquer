function findRotatedIndex(arr, target) {
    //Binary search setup
    let arrLen = arr.length
    let left = 0
    let right = arrLen - 1
    let offset
   
    //Find rotation offset
    while (left < right) {
        let center = Math.floor((left + right) / 2)
        //if center value is greater than the value after it then we know we found the offset
        if ( arr[center] > arr[center + 1] ) {
            offset = center
            break;
        }
        // Another check we can do is if the center value is less than the value before it
        if ( arr[center] < arr[center - 1] ) {
            offset = center + 1
            break;
        }
        if ( arr[left] >= arr[center] ) {
            right = center
        } else {
            left = center
        }
    }

    //here we seperate the main array on the offset.
    //Then it performs a binary search on which one could have the key.

    //[5,6,7,8,1,2,3,4] >> [5,6,7,8] [1,2,3,4]
    //IMPORTANT: The program does not split an array into two arrays, it just sets the upper and lower bounds for binary search according to
    //               Above is a representation to better understand what is going on
    if ( arr[offset] === target ) {
        return offset
    }
    if ( arr[0] <= target) {
        left = 0
        right = offset - 1
    } else {
        left = offset + 1
        right = arrLen - 1
    }

    //Binary search the sub-array for the key
    while (left <= right) {
        let center = Math.floor((left + right) / 2)
        if ( arr[center] === target ) {
            return center
        }
        if ( arr[center] < target) {
            left = center + 1
        } else {
            right = center - 1
        }
    }
    return -1

}

module.exports = findRotatedIndex