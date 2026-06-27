const effect = document.querySelector('#effect');

for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 10 + 1);
    let y = Math.floor(Math.random() * 10 + 1);
    let sum = x * y;
    let attempts = 0;

    let ask;
    while (true) {
        ask = Number(prompt(`Ile to jest: ${x} * ${y}:`));
        attempts++;
        if (ask === sum) {
            console.log(`Odpowiedź prawidłowa! ${x} * ${y} = ${sum}`);
            break;
        } else {
            console.log(`Błędna odpowiedź! Spróbuj ponownie.`);
        }
    }

    const row = document.createElement('p');
    row.textContent = `Pytanie ${i + 1}: ${x} * ${y} = ${sum} — poprawna odpowiedź po ${attempts} ${attempts === 1 ? 'próbie' : 'próbach'}. ✓`;
    row.style.color = 'green';
    effect.appendChild(row);
}
