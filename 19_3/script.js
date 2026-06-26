let tab = new Array();

let input;

do {
    input = Number(prompt('Podaj liczbę całkowitą:'));
    if (input !== 0 && !isNaN(input)) {
        tab.push(input);
    }
} while (input !== 0);

let sum = 0;
let even = 0;
let odd = 0;
let avg = 0;
let min;
let max;

if (tab.length > 0) {
    for (let x of tab) {
        sum += x;
        if (x % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    avg = sum / tab.length;
    min = Math.min(...tab);
    max = Math.max(...tab);
    console.log(tab);
}

document.querySelector('#sum').innerHTML = sum;
document.querySelector('#even').innerHTML = even;
document.querySelector('#odd').innerHTML = odd;
document.querySelector('#amount').innerHTML = tab.length;
document.querySelector('#avg').innerHTML = avg.toFixed(2);
document.querySelector('#min').innerHTML = min;
document.querySelector('#max').innerHTML = max;
