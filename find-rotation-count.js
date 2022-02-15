function findRotationCount(arr) {
    let arrLen = arr.length
    let left = 0
    let right = arrLen - 1
   
    while (left < right) {
        let center = Math.floor((left + right) / 2)
        if ( arr[center] > arr[center + 1] ) {
            return center + 1
        }
        if ( arr[center] < arr[center - 1] ) {
            return center
        }
        if ( arr[left] >= arr[center] ) {
            right = center
        } else {
            left = center
        }
    }
    //not rotated
    return 0
}

module.exports = findRotationCount