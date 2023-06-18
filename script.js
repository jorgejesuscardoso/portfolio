const pixels = ['','','','','','','','','','','','','','','','','','','','','','','','',''];

let pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < pixels.length; index += 1){

    let addPixels = pixels[index];
    let listaPixels = document.createElement('div');
    listaPixels.innerHTML = addPixels;
    listaPixels.classList.add('pixel');

   
    pixelBoard.appendChild(listaPixels);
};

const clicou = document.querySelectorAll('.color');
     
    for (let index of clicou) {
      index.addEventListener('click' , (cor) => {
        const selected = document.querySelector('.selected')
        if (selected) {
            selected.classList.remove('selected');
        };
        cor.target.classList.add('selected')        
      });
    };
const colorir = document.querySelectorAll('.pixel');
     
    for (let index of colorir) {
      index.addEventListener('click' , (cores) => {
        const selected = document.querySelector('.selected')
        if (selected && selected.id === 'yellow'){
        cores.target.id = 'yellow';
        } else if (selected && selected.id === 'green'){
          cores.target.id = 'green';
        } else if (selected && selected.id === 'red') {
          cores.target.id = 'red';
        } else if (selected && selected.id === 'blue'){
          cores.target.id = 'blue';
        } else {
          alert('Escolha uma cor!')
        };
      });
    };
const limpaCores = document.getElementById('clear-board');
    limpaCores.addEventListener('click' , () => {
      const taColorido = document.querySelectorAll('.pixel');
      for (let naoTa of taColorido){
        if (naoTa.id !== null) {
          naoTa.removeAttribute('id')
        };
      }
    });

const clicouAleatorio = document.querySelector('#button-random-color');
    clicouAleatorio.addEventListener('click' , () => {
      const randomDiv = document.getElementsByClassName('pixel');
      for(let random of randomDiv) {
        
        const idsAleatorio = ['yellow', 'green', 'red', 'blue'];
        const recebeCor = idsAleatorio[Math.floor(Math.random() * idsAleatorio.length)];   
        random.id = recebeCor;

      };
      
    })
     
   






/*
const arrayAleatorio = Math.floor(Math.random() * index.length);
const corPintada = index[arrayAleatorio];*/
