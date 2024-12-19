const button = document.querySelector("#convert-btn");
const numberInput = document.getElementById("number");

  const checkUserInput = () =>  {
    const inputNumber = numberInput.value;
  if (!inputNumber || isNaN(inputNumber)) {
    document.querySelector("#output").innerHTML = "Please enter a valid number";
    return;
  }
  else if (inputNumber <= 0) {
    document.querySelector("#output").innerHTML = "Please enter a number greater than or equal to 1";
    return;
  }
  else if (inputNumber >= 4000) {
    document.querySelector("#output").innerHTML = "Please enter a number less than or equal to 3999";
    return;
  } else {
    document.querySelector("#output").innerHTML = decimalToRoman(inputNumber);
  }
};

const decimalToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let roman = '';
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      roman += numeral;
      num -= value;
    }
  }

  return roman;
}

button.addEventListener("click", checkUserInput);
