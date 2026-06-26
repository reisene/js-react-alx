let tab = new Array();

let input;

do {
    let raw = prompt('Podaj liczbę całkowitą:');

    // Odrzucenie "Anuluj" oraz pustego pola
    if (raw === null || raw.trim() === '') {
        alert('Błąd! Nie podano żadnej wartości. Wpisz liczbę całkowitą.');
        input = null;
        continue;
    }
    input = Number(raw);

    // Odrzucenie tekstu oraz liczb zmiennoprzecinkowych (np. 1.5)
    if (isNaN(input) || !Number.isInteger(input)) {
        alert('Błąd! To nie jest poprawna liczba całkowita. Podaj format cyfrowy.');
        continue;
    }

    // Dodajemy do tablicy tylko wtedy, gdy to nie jest zero kończące program
    if (input !== 0) {
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

    document.querySelector('#sum').innerHTML = sum;
    document.querySelector('#even').innerHTML = even;
    document.querySelector('#odd').innerHTML = odd;
    document.querySelector('#amount').innerHTML = tab.length;
    document.querySelector('#avg').innerHTML = avg.toFixed(2);
    document.querySelector('#min').innerHTML = min;
    document.querySelector('#max').innerHTML = max;
} else {
    let err = document.querySelectorAll('span');
    for (let span of err) {
        span.innerHTML = 'Brak liczb!';
    }
}
