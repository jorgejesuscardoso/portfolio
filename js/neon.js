function alternarCores() {
    var titulo = document.getElementById('menu').querySelector('h1');
  
    if (titulo.style.color === 'blue') {
      titulo.style.color = 'black';
    } else {
      titulo.style.color = 'blue';
    }
  }
  
  setInterval(alternarCores, 500);
  