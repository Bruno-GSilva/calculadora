// let visorCalc = document.getElementById("visor");
// let btns = document.getElementsByClassName("tecla");
// let listNumbers = [];
// let nums = 0;

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     visorCalc.innerText = this.innerText;
//     listNumbers.push(Number(visorCalc.innerText));

//     for (let i = 0; i < listNumbers.length; i++) {
//         nums += listNumbers[i];
//     }

//     console.log(nums, listNumbers);
//   });
// }
let visorCalc = document.getElementById("visor");
let numbers = [];
let total = 0;

adicionar = (num) => {
  let btn = document.getElementById(num);
  btn.addEventListener("click", function () {
    let numeroDigitado = Number(this.innerText);
    numbers.push(numeroDigitado);
    visorCalc.innerText = numeroDigitado;
    console.log(numbers);
  });
};
for (let i = 0; i < 10; i++) {
  adicionar("num" + i);
}

//operations calc

somar = () => {
    for ( var i = 0; i < numbers.length; i++ ){
        total += numbers[i];
    }    
    visorCalc.innerText = '+' 
};

dividir = (num1, num2) => {
  return console.log(num1 / num2);
};
subtrair = (num1, num2) => {
  return console.log(num1 - num2);
};
multiplicar = (num1, num2) => {
  return console.log(num1 * num2);
};

//funcional

deletar = () => {
    visorCalc.innerText = numbers.pop()
    if (numbers.length === 0) {
        visorCalc.innerText = "number here ..."
    }
}
resultado = () => {
    visorCalc.innerText = total
}