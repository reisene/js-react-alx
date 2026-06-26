let tab = [];

function liczby() {
    tab = [];
    let num;
    do {
        num = Number(prompt('Podaj liczbę całkowitą:'));
        if (num !== 0 && !isNaN(num)) {
            tab.push(num);
        }
    } while (num !== 0);

    const mapa = new Map();
    for (let x of tab) mapa.set(x, (mapa.get(x) || 0) + 1);

    let output = '';
    for (let [x, ilość] of mapa) {
        output += `<div><span class="liczba">${x}</span> - występuje <span class="ile">${ilość}</span>x <br/></div>`;
    }
    document.querySelector('#effect').innerHTML = output;
}

document.querySelector('#start').onclick = liczby;
