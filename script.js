//creates squares for grid
let square = document.createElement('div'); //creates element div stored in value square
square.classList.add('square'); //add class square to div

//creates live node-list of elements w/ className 'square'
let squares = document.getElementsByClassName('square');

//function that builds grid of numXnum divs
function build(num) {
  square.remove();
  square.style.height = (650/num)+"px"; //sets square size
  square.style.width = (650/num)+"px";  
  document.getElementById("grid").style.gridTemplateColumns = `repeat(${num}, 1fr)`; //sets columns to num (so num X num grid)
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

//function to clear grid
function clearGrid() {
  document.querySelectorAll('.square').forEach(e => e.remove()); //***still need to understand this
}

//initiate grid
build(50);

//buttons
const large = document.getElementById("large");
large.addEventListener('click', function() {
  clearGrid(); 
  build(10);
});

const m = document.getElementById("m");
m.addEventListener('click', function() {
  clearGrid();
  build(35);
});

const s = document.getElementById("s");
s.addEventListener('click', function() {
  clearGrid();
  build(100);
});

function turnRed(event){
  console.log('test');
  event.target.style.background = 'red';
}

