function solution(hp) {
  let count = 0;
  if (hp % 5 !== 0) {
    count += Math.floor(hp / 5);
    hp = hp % 5;
    if (hp % 3 !== 0) {
      count += Math.floor(hp / 3);
      hp = hp % 3;
    } else {
      count++;
      hp = 0;
    }
  } else {
    count = hp / 5;
    hp = 0;
  }
  return count + hp;
}
