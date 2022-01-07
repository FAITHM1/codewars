// complete the function
function solution(string) {
  const arr = string.split("");
  let joined;
  const check = arr.forEach((element) => {
    if (element === element.toUpperCase()) {
      const indexElement = arr.indexOf(element);
      const arr2 = arr.splice(indexElement);
      joined = arr.join("") + " " + arr2.join("");

      arr2.forEach((element, index) => {
        if (element === element.toUpperCase() && index !== 0) {
          const arr3 = arr2.splice(index);
          joined = arr.join("") + " " + arr2.join("") + " " + arr3.join("");

          arr3.forEach((element, index) => {
            if (element === element.toUpperCase() && index !== 0) {
              const arr4 = arr3.splice(index);
              joined =
                arr.join("") +
                " " +
                arr2.join("") +
                " " +
                arr3.join("") +
                " " +
                arr4.join("");
            }
          });
        } else {
          return false;
        }
      });
    } else {
      return false;
    }
  });

  if (typeof joined === "undefined") {
    return string;
  } else {
    return joined;
  }
}

console.log(solution("camerlCastingCooYes"));

const solution2 = (string) => {
  return [...string]
    .map((char) => {
      return char === char.toUpperCase() ? ` ${char}` : char;
    })
    .join("");
};
console.log(solution2("camerlCastingCooYes"));
