function solution(A, B) {
  let count = 0;
  let str = "";
  if (A === B) return 0;
  while (str !== B && count < A.length) {
    str = A[A.length - 1];
    for (let i = 0; i < A.length - 1; i++) {
      str += A[i];
    }
    count += 1;
    A = str;
  }
  return count === A.length ? -1 : count;
}
