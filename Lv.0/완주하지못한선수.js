function solution(participant, completion) {
  const tmp = participant.concat(completion).sort();
  for (let i = 0; i < tmp.length; i += 2) {
    if (tmp[i] !== tmp[i + 1]) return tmp[i];
  }
}
