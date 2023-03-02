function solution(spell, dic) {
  spell = spell.sort().join("");
  dic = dic.map((el) => el.split("").sort().join(""));
  return dic.filter((el) => spell === el).length === 1 ? 1 : 2;
}
