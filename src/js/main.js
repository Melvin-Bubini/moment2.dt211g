"use strict"

const url = "https://dahlgren.miun.se/ramschema_ht23.php";

window.onload = init;

async function init() {
    try {
        const response = await fetch(url);
        const kurser = await response.json();

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