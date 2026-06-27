# Zadanie 27

## Treść

Napisz funkcję, której dwa pierwsze parametry będą określały wartości liczbowe, a trzeci — rodzaj wykonywanego działania.
W zależności od stanu trzeciego parametru, funkcja ma wyświetlić sumę, różnicę, iloczyn, iloraz lub resztę z dzielenia pierwszego i drugiego parametru.

<span style="font-family: 'Courier New', monospace;">
Przykład wywołania: oblicz(12, 5, "+");
</span>

## Logika

Stworzyłam w JS funkcję `pobierzDane()`, która jest wywoływana po kliknięciu przycisku `#start` i odpowiada za zebranie danych od użytkownika przy pomocy okien `prompt`.

Do walidacji wprowadzanych wartości użyłam pętli `do...while`:

- przy pomocy funkcji `isNaN()` sprawdzam, czy użytkownik podał poprawne wartości liczbowe dla zmiennych `a` i `b`,
- za pomocą metody `.includes()` weryfikuję, czy wpisany znak działania znajduje się w zdefiniowanej tablicy dopuszczalnych operatorów `op = ['+', '-', '*', '/', '%']`.

Prawidłowo zweryfikowane zmienne przekazuję do funkcji `oblicz(a, b, c)`. Rodzaj wykonywanej operacji matematycznej obsługuję za pomocą instrukcji `switch(c)`. W przypadkach dzielenia (`/`) oraz reszty z dzielenia (`%`) dodałam warunek sprawdzający, czy `b === 0`, który w razie próby dzielenia przez zero przerywa działanie i wyświetla komunikat o błędzie.

Wynik końcowy formatuję w zmiennej `output`, wykorzystując klasy `.liczba` oraz `.ile`, a następnie wstrzykuję go do kontenera `#effect` za pomocą `.innerHTML`.
