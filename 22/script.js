function oblicz(a = 0, b = 0, c = 0, d = 0, e = 0) {
    let suma = a + b + c + d + e;
    let avg = (suma / 5).toFixed(2);

    let output = `
        Podane liczby: <span>${a}, ${b}, ${c}, ${d}, ${e}</span> <br/>
        Suma to <span class="ile">${suma}</span>, a średnia to <span class="ile">${avg}</span>
    `;

    document.querySelector('#effect').innerHTML = output;
}

function pobierzDane() {
    let pobrane = [];

    for (let i = 1; i <= 5; i++) {
        let num;
        do {
            num = Number(prompt(`Podaj liczbę nr ${i} (różną od 0):`));

            // Jeśli użytkownik wpisze 0, da Cancel lub wpisze tekst, prompt zapyta ponownie o tę samą liczbę
            if (num === 0 || isNaN(num)) {
                alert('Błąd! Liczba nie może być zerem ani tekstem. Podaj ją ponownie.');
            }
        } while (num === 0 || isNaN(num));

        pobrane.push(num);
    }

    // Wywołanie funkcji z przekazaniem 5 zebranych elementów
    oblicz(pobrane[0], pobrane[1], pobrane[2], pobrane[3], pobrane[4]);
}

// Podpięcie uruchomienia pod przycisk
document.querySelector('#start').onclick = pobierzDane;
