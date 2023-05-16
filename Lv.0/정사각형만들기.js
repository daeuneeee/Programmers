function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length < arr[i].length) {
      arr.push(new Array(arr[i].length).fill(0));
    } else if (arr.length > arr[i].length) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr.length !== arr[i].length) {
          arr[i].push(0);
        }
      }
    }
  }

  return arr;
}
