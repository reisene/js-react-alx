# Zadanie 59_2a

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
- Kiedy użytkownik odpowie poprawnie, otrzymuje kolejne pytanie.
- Kiedy użytkownik odpowie źle program pyta ponownie o to samo.

## Logika

Zastosowałam początkowo tą samą logikę zadania, co w zadaniu [59_2](../59_2/) — przynajmniej jeśli chodzi o zmienne `x`, `y` oraz `sum`. Jednak w tym przypadku w pętli `for` zastosowałam drugą pętlę — `while`, która w przypadku poprawnej odpowiedzi pozwala dalej pętli `for` działać (zadać kolejne pytanie), a w przypadku błędu zadaje ponownie to samo pytanie.

Podobnie jak w [59_2](../59_2/), cała logika jest opakowana w funkcję `startQuiz()` wywoływaną przyciskiem **Rozpocznij quiz**. Na stronie wyświetlane jest podsumowanie każdego pytania wraz z liczbą prób potrzebnych do udzielenia poprawnej odpowiedzi.
