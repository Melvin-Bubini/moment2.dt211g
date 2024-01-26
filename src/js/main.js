"use strict"

const url = "https://dahlgren.miun.se/ramschema_ht23.php";

window.onload = init;

async function init() {
    try {
        const response = await fetch(url);
        const kurser = await response.json();
        const kurskodTd = document.getElementById("kurskodTd");
        const namnTd = document.getElementById("namnTd");
        const progressionTd = document.getElementById("progressionTd");

        // eventlistner
        kurskodTd.addEventListener("click", kurskodSort);
        namnTd.addEventListener("click", namnSort);
        progressionTd.addEventListener("click", progressionSort);

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
        // let filteredKurser = kurser.filter((kurs) => {
        //     return kurs.coursename.toLowerCase().includes("we");
        // });


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