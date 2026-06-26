document.querySelector('button#submitBtn').onclick = function () {
    let n = document.querySelector('input[name="num"]').value;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    console.log(result);
    document.querySelector('span#result').innerHTML = result;
};

document.querySelector('#resetBtn').onclick = function () {
    document.querySelector('#fact').reset(); // czyszczenie formularza
    document.querySelector('span#result').innerHTML = ''; // czyszczenie spana z wynikiem
    console.clear(); // czyszczenie konsoli
};

function prevent(event) {
    if (event.key === 'Enter') {
        // zabezpieczenie, żeby przeglądarka nie próbowała automatycznie zrobić akcji 'submit'
        event.preventDefault();
        // Symulacja kliknięcia w przycisk "Wyślij"
        document.querySelector('#submitBtn').click();
    }
}
