// EVENT LISTENER

document.querySelector('.get-jokes').addEventListener('click', getJokes);

// FUNCTIONS

function getJokes(e) {
  const number = document.getElementById('number').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = '';

      if(response.type === 'success') {
        response.value.forEach((item) => {
          output += `<li>${item.joke}</li>`;
        });
      } else {
        output += `<li>Something went wrong.</li>`
      }

      document.querySelector('.jokes').innerHTML = output;

      console.log(output)
    }
  }

  xhr.send();

  e.preventDefault();
}