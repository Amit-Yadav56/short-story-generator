import {openfun} from './ai.js'
  function displayLetterByLetter(result) {
    var textContainer = document.querySelector('.Story');
    var sentence = result;
    var letterIndex = 0;

    function addLetter() {
        if (letterIndex < sentence.length) {
            textContainer.innerHTML += sentence.charAt(letterIndex);
            letterIndex++;
            setTimeout(addLetter, 150); 
        }
    }

    addLetter(); 
}


document.getElementById("generateButton").addEventListener("click", function () {
  var sentence = document.querySelector('.prom').value;
  var result=openfun(sentence);
  document.querySelector('.Story').innerHTML = "";
  displayLetterByLetter(result);
});
  
  document.getElementById('insertButton').addEventListener('click', async () => {
    var val = document.querySelector('.prom').value;
    var sto = document.querySelector('.Story');
    const data = {
      prompt: `${val}`,
      story: `${sto}`,
      likes: 1
    };

    const response = await fetch('/insertData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const result = await response.text();
      alert(result);
    } else {
      alert('Error inserting data');
    }
  });

  
  
