
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('getMessage').onclick = function () {
    const req = new XMLHttpRequest();
    req.open('GET', '/json/cats.json', true);
    req.send();
    req.onload = function () {
      const json = JSON.parse(req.responseText);
      let html = '';
      // Agrega tu código debajo de esta línea

      json.forEach((value) => {
        const keys = Object.keys(value);
        html += "<div class='cat'>";
        keys.forEach((val) => {
          html += "<strong>" + val + "</strong>: " + value[val] + "<br>";
        })
        html += "</div><br>"
      })

      // Agrega tu código encima de esta línea
      document.getElementsByClassName('message')[0].innerHTML = html;
    };
  };
});

/*

<h1>Cat Photo Finder</h1>
<p class="message box">The message will go here</p>
<p>
  <button id="getMessage">Get Message</button>
</p> */