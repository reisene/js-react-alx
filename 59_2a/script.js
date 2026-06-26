for (i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 10 + 1);
    let y = Math.floor(Math.random() * 10 + 1);
    let sum = x * y;

    let ask;
    while (true) {
        ask = Number(prompt(`Ile to jest: ${x} * ${y}:`));
        if (ask === sum) {
            console.log(`Odpowiedź prawidłowa! ${x} * ${y} = ${sum}`);
            break;
        } else {
            console.log(`Błędna odpowiedź!  Spróbuj ponownie.`);
        }
    }
}
