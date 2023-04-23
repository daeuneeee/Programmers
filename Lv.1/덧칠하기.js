function solution(n, m, section) {
  const tmp = [0];

  for (let i = 0; i < section.length; i++) {
    if (tmp[tmp.length - 1] <= section[i]) tmp.push(section[i] + m);
  }
  return tmp.length - 1;
}
