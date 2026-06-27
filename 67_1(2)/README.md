---
title: 'Zadanie 67_1 (vol. 2)'
date: 2026-06-27
published: true
version: 1.0.0
---

# Zadanie 67_1 (vol. 2)

## Treść

- Zaprojektuj formularz wraz z obsługą podglądu informacji.
- Jeśli dane pole nie zostało wypełnione, powinno to zostać zasygnalizowane stosownym komunikatem.

> [!NOTE]
> Jest to zadanie, które było wykonywane już wcześniej ([67_1](../67_1/)). To jest tylko moje indywidualne podejście do tego zadania, gdzie od podstaw chcę taki formularz zrobić.

## Logika

### HTML & CSS

Na początek przygotowałam szkielet HTML5 oraz stylowanie CSS, całkowicie rezygnując z tabel i wymuszania układu znacznikami `<br />`.

- **Układ dwukolumnowy:** Kontener `.wrapper` używa Flexboxa, dzieląc stronę na `<aside>` (formularz po lewej) i `<main>` (podsumowanie danych po prawej). Pola formularza (`.form-field`) układają się pionowo dzięki `flex-direction: column`.
- **Powiązanie labeli:** Wszystkie znaczniki `<label>` są spięte z inputami za pomocą atrybutu `for`. Pola w formularzu dostały przedrostek `id="reg-..."`, żeby ich identyfikatory nie dublowały się z polami w podsumowaniu.
- **Kontenery na błędy:** Pod polami wymagającymi walidacji znajdują się znaczniki `<small class="error-msg">`. Mają zdefiniowaną stałą minimalną wysokość w CSS, co zapobiega "skakaniu" formularza po wstrzyknięciu komunikatów o błędach.
- **Efekt maskowania haseł:** Pola haseł w podsumowaniu mają klasę `.masked-password`. Tekst jest domyślnie ukryty pod bladym, szarym paskiem (`color: transparent`). Najechanie kursorem (`:hover`) płynnie go odsłania. Dodatkowo `user-select: none` blokuje zaznaczanie tekstu, gdy hasło jest zakryte.

### JavaScript

1. **Struktura danych:** Dane z formularza przechowuję w centralnym obiekcie `Map` (`let data = new Map()`).
    1. Przed każdym odczytem czyszczę mapę (`data.clear()`), a następnie wstrzykuję do niej aktualne wartości z formularza.
    2. Pola `radio` (newsletter) i `checkbox` (regulamin) są inicjalizowane warunkowo – jeśli nic nie zaznaczono, trafia pusty string `''`.
    3. Pola `login`, `imie`, `email`, `telefon` i `uwagi` przechodzą przez `.trim()`, żeby pozbyć się wiodących/kończących spacji.
2. **Resetowanie podsumowania:** Przed wywołaniem walidacji pętla `for...of` iteruje po kluczach mapy i czyści wszystkie pola podsumowania (wstawia `'-'`). Dzięki temu stare dane nie zostają, gdy walidacja wykryje błąd.
3. **Logika walidacji (`validate()`):**
    1. Na starcie czyszczę wszystkie komunikaty błędów (`querySelectorAll('.error-msg')`).
    2. Używam zmiennej flagowej `let ok = true`, która zmienia się na `false` przy każdym naruszeniu reguły.
    3. Zaimplementowane reguły:
        1. **Login** – wymagany, minimum 3 znaki.
        2. **Hasło** – wymagane, więcej niż 5 znaków.
        3. **Powtórz hasło** – wymagane, musi być identyczne z hasłem.
        4. **Imię** – wymagane.
        5. **Email** – wymagany, musi zawierać znak `@`.
        6. **Telefon** – opcjonalny, ale jeśli wpisany, może zawierać tylko cyfry (regex `/^[0-9]+$/`).
        7. **Skąd się dowiedział** (`select`) – wymagany, pierwsza opcja ma `value=""`.
        8. **Newsletter** (`radio`) – wymagany, musi być zaznaczona jedna opcja.
        9. **Regulamin** (`checkbox`) – wymagany, musi być zaznaczony.
        10. **Uwagi** (`textarea`) – opcjonalne, brak walidacji.
    4. Każde naruszenie wstrzykuje komunikat do odpowiedniego `#error_{pole}` w formacie `Błąd: {treść}`.
    5. Funkcja zwraca `true` lub `false` – dane do podsumowania trafiają tylko przy `true`.
