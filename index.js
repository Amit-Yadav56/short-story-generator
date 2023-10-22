function req(){
    const val=document.querySelector('.prom').value;
    document.querySelector('.Story').innerHTML=val;
  }
  document.getElementById('insertButton').addEventListener('click', async () => {
    const data = {
      name: 'John',
      age: 30,
      city: 'New York'
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

  
  
