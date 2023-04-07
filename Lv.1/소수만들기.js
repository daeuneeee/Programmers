function solution(nums) {
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] === nums[j]) j++;
      for (let k = j; k < nums.length; k++) {
        if (nums[j] === nums[k]) k++;
        const sum = nums[i] + nums[j] + nums[k];
        if (nums[k] !== undefined && sum % 2 !== 0 && sum % 3 !== 0)
          arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  let count = 0;
  for (let x of arr) {
    let tmp = 0;
    for (let i = 2; i <= x; i++) {
      if (x % i === 0) tmp++;
    }
    if (tmp === 1) count++;
  }
  return count;
}
