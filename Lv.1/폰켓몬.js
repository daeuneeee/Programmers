function solution(nums) {
  const another = [...new Set(nums)];
  return Math.min(another.length, nums.length / 2);
}
