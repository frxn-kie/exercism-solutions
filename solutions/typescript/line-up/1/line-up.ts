export function format(name: string, number: number): string {
  
  const numberAsString: string = number.toString();
  let lastDigit: number = Number(numberAsString[numberAsString.length - 1]);
  
    if (lastDigit === 1 || lastDigit === 2 || lastDigit === 3) {
      if (Number(numberAsString[numberAsString.length - 2]) === 1) {
         lastDigit = 4;
      }
  };
  
switch(lastDigit) {
      case 1:
    return `${name}, you are the ${number}st customer we serve today. Thank you!`
    break;
          case 2:
    return `${name}, you are the ${number}nd customer we serve today. Thank you!`
    break;
          case 3:
    return `${name}, you are the ${number}rd customer we serve today. Thank you!`
    break;
  default:
 return `${name}, you are the ${number}th customer we serve today. Thank you!`
}
}
