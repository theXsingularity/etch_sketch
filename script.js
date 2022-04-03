let square = document.createElement('div');
square.classList.add('square');
square.textContent = "X";


let grid = document.getElementById('grid');
function createGrid(num) {
  document.getElementById("grid").style.gridTemplateColumns = `repeat(${num}, 1%)`;
  for(i=0; i<num*num; i++){
          grid.appendChild(square.cloneNode(true));    
  }
}


grid.addEventListener('click', changeColor )


function  changeColor(event) {
    console.log(event.target);
    event.target.style.backgroundColor = 'green';
  }


createGrid(16);










/*
let btn = document.getElementById('btn');
let item = document.getElementById("button");
item.addEventListener("mouseover", func, false);

function func()
{  
   item.setAttribute("style", "background-color:blue;")
}
*/