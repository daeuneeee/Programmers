// 첫번째
function solution(chicken) {
  let count = 0;
  let coupon = 0;
  while (chicken > 1) {
    count += Math.floor(chicken / 10);
    coupon += chicken % 10;
    chicken = chicken / 10;
  }
  return count + Math.floor(coupon / 10);
}

// 두번째
function solution(chicken) {
  let count = 0;
  while (chicken >= 10) {
    count = count + Math.floor(chicken / 10);
    chicken = Math.floor(chicken / 10) + Math.floor(chicken % 10);
  }
  return count;
}
