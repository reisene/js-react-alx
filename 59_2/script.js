for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 10 + 1);
    let y = Math.floor(Math.random() * 10 + 1);
    let sum = x * y;

    let ask = Number(prompt(`Ile to jest: ${x} * ${y}:`));
    if (ask === sum) {
        console.log(`Odpowiedź prawidłowa! ${x} * ${y} = ${sum}`);
    } else {
        console.log(`Błędna odpowiedź!  ${x} * ${y} = ${sum}, a nie ${ask}.`);
    }
}
