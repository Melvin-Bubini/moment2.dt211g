"use strict";

const url = "https://dahlgren.miun.se/ramschema_ht23.php";

window.onload = init;

async function init() {
    try {
        const response = await fetch(url);
        const kurser = await response.json();
        const kurskodTd = document.getElementById("kurskodTd");
        const namnTd = document.getElementById("namnTd");
        const progressionTd = document.getElementById("progressionTd");
        const searchInput = document.getElementById("searchField");

        // eventlistner
        kurskodTd.addEventListener("click", kurskodSort);
        namnTd.addEventListener("click", namnSort);
        progressionTd.addEventListener("click", progressionSort);
        searchInput.addEventListener("input", updateSearch);

        // sortera data utifårn kurskod
        function kurskodSort() {
            kurser.sort((a, b) => (a.code > b.code) ? 1 : -1);
            const kurserEl = document.getElementById("kurs-list");
            kurserEl.innerHTML = "";
            displayKurser(kurser)
        }


        // sortera data utifrån kursnamn
        function namnSort() {
            kurser.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1);
            const kurserEl = document.getElementById("kurs-list");
            kurserEl.innerHTML = "";
            displayKurser(kurser)
        }

        // sortera data utifrån progression
        function progressionSort() {
            kurser.sort((a, b) => (a.progression > b.progression) ? 1 : -1);
            const kurserEl = document.getElementById("kurs-list");
            kurserEl.innerHTML = "";
            displayKurser(kurser)
        }

        // filtrera data
        function updateSearch() {
            // Hämta användarens inmatning och omvandla till små bokstäver
            const searchTerm = document.getElementById("searchField").value.toLowerCase();

            let filteredKurser = kurser.filter((kurs) => {
                return kurs.coursename.toLowerCase().includes(searchTerm) ||
                    kurs.code.toLowerCase().includes(searchTerm);
            });
            const kurserEl = document.getElementById("kurs-list");
            kurserEl.innerHTML = "";
            displayKurser(filteredKurser);
        }

        displayKurser(kurser)
    } catch {
        document.getElementById("error").innerHTML = "<p>Något gick fel</p>";
    }
}

function displayKurser(kurser) {
    const kurserEl = document.getElementById("kurs-list");

    // loopa igenom och skriv ut till dom
    kurser.forEach((kurs) => {
        kurserEl.innerHTML += `
            <tr>
                <td>${kurs.code}</td>
                <td>${kurs.coursename}</td>
                <td>${kurs.progression}</td>
            </tr>
        `;
    })
}