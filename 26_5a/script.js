function liczby() {
    const tab = [];
    let num;
    do {
        let raw = prompt('Podaj liczbę całkowitą:');

        if (raw === null || raw.trim() === '') {
            alert('Błąd! Nie podano żadnej wartości. Wpisz liczbę całkowitą.');
            num = null;
            continue;
        }

        num = Number(raw);

        if (isNaN(num) || !Number.isInteger(num)) {
            alert('Błąd! To nie jest poprawna liczba całkowita. Podaj format cyfrowy (np. 10, a nie 1.5 lub tekst).');
            continue;
        }

        if (num !== 0) {
            tab.push(num);
        }
    } while (num !== 0);

    const mapa = new Map();
    for (let x of tab) mapa.set(x, (mapa.get(x) || 0) + 1);

    let output = '';
    for (let [x, ile] of mapa) {
        output += `<div><span class="liczba">${x}</span> - występuje <span class="ile">${ile}</span>x <br/></div>`;
    }
    document.querySelector('#effect').innerHTML = output;
}

document.querySelector('#start').onclick = liczby;
