# Zadanie 22

## Treść

Napisz funkcję oblicz, która przyjmuje 5 parametrów liczbowych.
Funkcja będzie obliczała sumę oraz średnią przekazanych liczb, a następnie będzie wyświetlała je w komunikacie

<span style="font-family: 'Courier New', monospace;">
Suma to X, a średnia to Y <br/>
<b>Przykład wywołania: oblicz(1,4,7,6,2);</b>
</span>

## Logika

Stworzyłam w JS funkcję `pobierzDane()`, która odpowiada za zebranie pięciu liczb od użytkownika i jest podpięta pod zdarzenie `.onclick` przycisku `#start`.
    
Zaimplementowałam pętlę `for`, która wykonuje się dokładnie 5 razy. W jej wnętrzu znajduje się pętla `do...while` pilnująca walidacji danych. Jeśli wprowadzona wartość wynosi `0` lub nie jest liczbą (`isNaN`), program wyświetla `alert` z błędem i prosi o ponowne podanie tej samej liczby. Prawidłowe wartości wrzucam do tablicy `pobrane` za pomocą `.push()`.

Po zebraniu kompletu danych wywołuję funkcję `oblicz()`, przekazując elementy tablicy jako argumenty, gdzie:
- w zmiennej `suma` dodaję do siebie wszystkie 5 przekazanych liczb,
- w zmiennej `avg` obliczam średnią arytmetyczną i zaokrąglam ją do 2 miejsc po przecinku za pomocą `.toFixed(2)`.

Wynik w postaci podanych liczb, sumy oraz średniej składam w zmiennej `output` i wstrzykuję bezpośrednio do elementu `#effect` przy użyciu `.innerHTML`.
