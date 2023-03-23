function solution(array, commands) {
  const result = [];
  commands.forEach((command) => {
    result.push(
      array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
        command[2] - 1
      ]
    );
  });
  return result;
}
