document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getMessage').onclick = function () {
      const req = new XMLHttpRequest();
      req.open('GET', '/json/cats.json', true);
      req.send();
      req.onload = function () {
        let json = JSON.parse(req.responseText);
        let html = '';
        // Agrega tu código debajo de esta línea
        json = json.filter(val => val.id !== 1);
        // Agrega tu código encima de esta línea
        json.forEach(function (val) {
          html += "<div class = 'cat'>";

          html +=
            "<img src = '" +
            val.imageLink +
            "' " +
            "alt='" +
            val.altText +
            "'>";

          html += '</div>';
        });
        document.getElementsByClassName('message')[0].innerHTML = html;
      };
    };
  });