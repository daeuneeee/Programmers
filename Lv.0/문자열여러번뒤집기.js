function solution(my_string, queries) {
  for (let x of queries) {
    my_string = my_string.split("");
    const tmp = my_string
      .slice(x[0], x[1] + 1)
      .reverse()
      .join("");
    my_string.splice(x[0], x[1] - x[0] + 1, tmp);
    my_string = my_string.join("");
  }

  return my_string;
}
