"use strict"

const url = "https://dahlgren.miun.se/ramschema_ht23.php";

window.onload = init;

async function init() {
    try {
        const response = await fetch(url);
        const kurskod = await response.json();

        console.table(kurskod)
    }catch {
        document.getElementById("error").innerHTML = "<p>Något gick fel</p>";
    }
}