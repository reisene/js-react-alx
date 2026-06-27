# Zadanie 59_2

## Treść

Zaprojektuj program, który będzie losował liczby (1-10) i pytał użytkownika jaki jest wynik
mnożenia np.:

<pre>
Ile to jest: 2 * 2 ?
Ile to jest: 9 * 4 ?
Ile to jest: 3 * 9 ?

...
</pre>

- Pytań powinno być 5.
- Program informuje o poprawnej lub błędnej odpowiedzi.

## Logika

Zastosowałam pętlę `for` dla 5 powtórzeń. Za każdym powtórzeniem program przypisuje do zmiennych `x` i `y` dwie randomowe liczby całkowite w zakresie 1–10 (`Math.floor(Math.random() * 10 + 1)`) i oblicza ich iloczyn (`sum = x * y`). Następnie pyta użytkownika o wynik działania (`ask = Number(prompt(...))`), po czym sprawdza odpowiedź.

Cała logika quizu jest opakowana w funkcję `startQuiz()`, wywoływaną po kliknięciu przycisku **Rozpocznij quiz** na stronie. Dzięki temu pop-up nie pojawia się automatycznie przy wczytaniu strony.

Wyniki każdego pytania są wyświetlane na stronie w elemencie `#effect` — poprawna odpowiedź kolorem zielonym, błędna czerwonym. Ponowne kliknięcie przycisku czyści poprzednie wyniki i uruchamia nowy quiz.
