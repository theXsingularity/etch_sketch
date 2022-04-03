let square = document.createElement('div');
square.classList.add('square');
square.textContent = "";

let grid = document.getElementById('grid');

function createGrid(num) {
  document.getElementById("grid").style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  for(i=0; i<num*num; i++){
          grid.appendChild(square.cloneNode(true));
  }
}


function  hoverGreen(event) {
  //console.log(event.target);
  event.target.style.background = 'black';
}

function clickRed(event){
event.target.style.background = 'red';
}

grid.addEventListener('mouseover', hoverGreen)
grid.addEventListener('click', clickRed)




createGrid(60);
