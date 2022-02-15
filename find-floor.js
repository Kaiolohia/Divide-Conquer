function findFloor(arr, target) {
  let arrLen = arr.length
  let left = 0
  let right = arrLen - 1

  while (left <= right) {
      let center = Math.floor((left + right) / 2)
      //check if target is between two values that is the closest lower value and closest higher val
      if ( arr[center] <= target && (center === arrLen - 1 || arr[center + 1] >= target) ) {
        return arr[center]
      }
      if ( arr[center] < target) {
        left = center + 1
    } else {
        right = center - 1
    }
  }
  return -1
}

module.exports = findFloor