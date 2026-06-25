let dane = new Map();
// let imie, nazwisko, miasto, uwagi, stanowisko;
// let technologie = new Array();

document.querySelector("input[type='button']").onclick = function () {
    dane.clear();

    dane.set('imie', document.querySelector('input[name=imie]').value);
    dane.set('nazwisko', document.querySelector('input[name=nazwisko]').value);
    dane.set('miasto', document.querySelector('select[name=miasto]').value);
    dane.set('uwagi', document.querySelector('textarea[name=uwagi]').value);
    dane.set('technologie', []);
    dane.set('stanowisko', '');

    let lang = document.querySelectorAll('input[type=checkbox]');
    let work = document.querySelectorAll('input[type=radio]');

    for (let x of work) {
        if (x.checked) {
            dane.set('stanowisko', x.value);
            break;
        }
    }

    for (let x of lang) {
        if (x.checked) {
            dane.get('technologie').push(x.value);
        }
    }

    // validate();

    if (validate() === true) {
        for (let x of dane.keys()) {
            if (x === 'technologie') {
                document.querySelector(`#${x}`).innerHTML = dane
                    .get(x)
                    .join(', ');
            } else {
                document.querySelector(`#${x}`).innerHTML = dane.get(x);
            }
            // document.querySelector('#imie').innerHTML = imie;
            // document.querySelector('#nazwisko').innerHTML = nazwisko;
            // document.querySelector('#miasto').innerHTML = miasto;
            // document.querySelector('#technologie').innerHTML =
            //     technologie.join(', ');
            // document.querySelector('#stanowisko').innerHTML = stanowisko;
            // document.querySelector('#uwagi').innerHTML = uwagi;
        }
    }
};

function validate() {
    let noValid = [];
    let ok = true;

    let err = document.querySelectorAll('span[id^="error_"]');
    for (let x of err) x.innerHTML = '';

    for (let x of dane.keys()) {
        if (x === 'technologie' && dane.get(x).length === 0) {
            ok = false;
            noValid.push('technologia');
        } else if (dane.get(x) === '' || dane.get(x) === undefined) {
            ok = false;
            noValid.push(x);
        }
    }

    // if (imie.trim() === '') {
    //     ok = false;
    //     noValid.push('imie');
    // }

    // if (nazwisko.trim() === '') {
    //     ok = false;
    //     noValid.push('nazwisko');
    // }

    // if (miasto === '') {
    //     ok = false;
    //     noValid.push('miasto');
    // }

    // if (technologie.length === 0) {
    //     ok = false;
    //     noValid.push('technologia');
    // }

    // if (stanowisko === '' || stanowisko === undefined) {
    //     ok = false;
    //     noValid.push('stanowisko');
    // }

    if (ok === false) {
        for (let x of noValid) {
            document.querySelector(`span#error_${x}`).innerHTML = 'Błąd';
        }
    }

    return true;
}
