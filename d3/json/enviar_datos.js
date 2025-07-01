const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201) {
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent =
      serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);

/* ----------------------full version */
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sendMessage').onclick = function () {
    const userName = document.getElementById('name').value;
    const url = 'https://jsonplaceholder.typicode.com/posts';
    // Agrega tu código debajo de esta línea
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 201) {
        const serverResponse = JSON.parse(xhr.response);
        document.getElementsByClassName('message')[0].textContent =
          serverResponse.userName + serverResponse.suffix;
      }
    };
    const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
    xhr.send(body);
    // Agrega tu código encima de esta línea
  };
});