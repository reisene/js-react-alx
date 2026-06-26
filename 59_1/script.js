let pos = 0;
let err = 0;

for (i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 10 + 1);
    let y = Math.floor(Math.random() * 10 + 1);

    let operatory = ['+', '-', '*'];
    let op = operatory[Math.floor(Math.random() * operatory.length)];

    let sum;
    if (op === '+') {
        sum = x + y;
    } else if (op === '-') {
        sum = x - y;
    } else {
        sum = x * y;
    }

    let ask = Number(
        prompt(`Pytanie ${i + 1}/10: ile to jest: ${x} ${op} ${y}?`)
    );
    if (ask === sum) {
        pos++;
        console.log(`Odpowiedź prawidłowa!`);
    } else {
        err++;
        console.log(`Błędna odpowiedź!`);
    }
}
console.log('KONIEC GRY!');
document.querySelector('#pos').innerHTML = pos;
document.querySelector('#err').innerHTML = err;
