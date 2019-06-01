fetch('/quote')
  .then(r => r.json())
  .then(data => {
    console.log(data);
    document.getElementById('quote').innerText = data.quote;
  });
