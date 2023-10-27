
  function displayLetterByLetter() {
    var textContainer = document.querySelector('.Story');
    var sentence = document.querySelector('.prom').value;
    var letterIndex = 0;

    function addLetter() {
        if (letterIndex < sentence.length) {
            textContainer.innerHTML += sentence.charAt(letterIndex);
            letterIndex++;
            setTimeout(addLetter, 50); 
        }
    }

    addLetter(); 
}

document.getElementById("generateButton").addEventListener("click", function () {
    document.querySelector('.Story').innerHTML = "";
    displayLetterByLetter();
});
  
  document.getElementById('insertButton').addEventListener('click', async () => {
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

  
  
