!function(){async function e(){try{let e=await fetch("https://dahlgren.miun.se/ramschema_ht23.php"),n=await e.json(),d=document.getElementById("kurskodTd"),o=document.getElementById("namnTd"),r=document.getElementById("progressionTd"),c=document.getElementById("searchField");d.addEventListener("click",function(){n.sort((e,t)=>e.code>t.code?1:-1),document.getElementById("kurs-list").innerHTML="",t(n)}),o.addEventListener("click",function(){n.sort((e,t)=>e.coursename>t.coursename?1:-1),document.getElementById("kurs-list").innerHTML="",t(n)}),r.addEventListener("click",function(){n.sort((e,t)=>e.progression>t.progression?1:-1),document.getElementById("kurs-list").innerHTML="",t(n)}),c.addEventListener("input",function(){let e=document.getElementById("searchField").value.toLowerCase(),d=n.filter(t=>t.coursename.toLowerCase().includes(e)||t.code.toLowerCase().includes(e));document.getElementById("kurs-list").innerHTML="",t(d)}),t(n)}catch{document.getElementById("error").innerHTML="<p>Något gick fel</p>"}}function t(e){let t=document.getElementById("kurs-list");e.forEach(e=>{t.innerHTML+=`
            <tr>
                <td>${e.code}</td>
                <td>${e.coursename}</td>
                <td>${e.progression}</td>
            </tr>
        `})}window.onload=e}();
//# sourceMappingURL=index.98d32a9a.js.map
