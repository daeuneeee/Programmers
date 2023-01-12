// prettier-ignore
const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

function solution(letter) {
  const letterSplit = letter.split(" ");
  const result = [];
  let keys = Object.keys(morse);
  let values = Object.values(morse);

  for (let i = 0; i < letterSplit.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (letterSplit[i] === keys[j]) {
        result.push(values[j]);
      }
    }
  }
  return result.join("");
}

// function solution(letter) {
//     let answer = ""
//     letter = letter.split(' ');
//     for(let i = 0; i < letter.length; i++){
//         answer += morse[letter[i]];
//     }
//     return answer;
// }

// 주석처리 안한 것이 내가 푼 방법이고 주석처리한 것은 다른사람이 푼 방식을 본건데,
// 객체일 경우 대괄호를 통해 value에 접근할 수 있다는 것을 완전히 잊고있었다.
// 완전 기초중에 기초,,, 나중에 다시 풀어볼 것!
