const effect = document.querySelector('#effect');

for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 10 + 1);
    let y = Math.floor(Math.random() * 10 + 1);
    let sum = x * y;

    let ask = Number(prompt(`Ile to jest: ${x} * ${y}:`));

    const row = document.createElement('p');
    if (ask === sum) {
        row.textContent = `Pytanie ${i + 1}: ${x} * ${y} = ${sum} — Poprawna odpowiedź! ✓`;
        row.style.color = 'green';
        console.log(`Odpowiedź prawidłowa! ${x} * ${y} = ${sum}`);
    } else {
        row.textContent = `Pytanie ${i + 1}: ${x} * ${y} = ${sum}, a nie ${ask} — Błędna odpowiedź! ✗`;
        row.style.color = 'red';
        console.log(`Błędna odpowiedź!  ${x} * ${y} = ${sum}, a nie ${ask}.`);
    }
    effect.appendChild(row);
}
