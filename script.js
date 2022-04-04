

//creates squares for grid
let square = document.createElement('div'); //creates element div stored in value square
square.classList.add('square'); //add class square to div


//creates node-list of elements w/ className 'square'
let squares = document.getElementsByClassName('square');

//function that adds event listeners to squares



//function that creates grid of divs for num*num times
//sets columns to num (so num X num grid)
function createGrid(num) {
  square.style.height = (600/num)+"px"; //sets square size
  square.style.width = (600/num)+"px";  
  document.getElementById("grid").style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  for(i=0; i<num*num; i++){
    grid.appendChild(square.cloneNode(true));
  }
  for (let i = 0; i <squares.length; i++) {  //loops through node-list
    squares[i].addEventListener('click', turnRed); //adds turnRed function (see below)
    squares[i].addEventListener('mouseover', function(e) { // adds event listener
      e.target.style.background = 'gray';//add anon function turn background gray
    });
    }
}

createGrid(6); //create grid



///could both the append chilc loop and add event listener loop happen else where
//they dont seem to make sense in the code right there
//how do I get the loops to run ...

function turnRed(event){
  console.log('test');
  event.target.style.background = 'red';
}