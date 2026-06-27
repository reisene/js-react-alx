function startQuiz() {
    const effect = document.querySelector('#effect');
    effect.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        let x = Math.floor(Math.random() * 10 + 1);
        let y = Math.floor(Math.random() * 10 + 1);
        let sum = x * y;

        let raw = prompt(`Pytanie ${i + 1}/5: ile to jest: ${x} * ${y}?`);
        if (raw === null) return;
        let ask = Number(raw);

        const row = document.createElement('p');
        if (ask === sum) {
            row.textContent = `Pytanie ${i + 1}: ${x} * ${y} = ${sum} — Poprawna odpowiedź! ✓`;
            row.style.color = 'green';
            console.log(`Odpowiedź prawidłowa! ${x} * ${y} = ${sum}`);
        } else {
            row.textContent = `Pytanie ${i + 1}: ${x} * ${y} = ${sum}, a nie ${ask} — Błędna odpowiedź! ✗`;
            row.style.color = 'red';
            console.log(`Błędna odpowiedź! ${x} * ${y} = ${sum}, a nie ${ask}.`);
        }
        effect.appendChild(row);
    }
}

document.querySelector('#start').onclick = startQuiz;
