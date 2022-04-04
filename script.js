function turnRed(event){
    console.log('test');
    event.target.style.background = 'red';
}

function createGrid(num) { //create function that takes a number
  document.getElementById("grid").style.gridTemplateColumns = `repeat(${num}, 1fr)`; //set col to num
  for(i=0; i<num*num; i++){ //creates (num X num) divs
    let square = document.createElement('div'); //creates element div stored in value square
    square.classList.add('square'); //add class square to div
    grid.appendChild(square); //add div to parent div(grid)
  }
  let squares = document.getElementsByClassName('square'); //creates node-list of all classId square
  for (let i = 0; i <squares.length; i++) {  //loops through node-list
  squares[i].addEventListener('click', turnRed); //adds turnRed function
  squares[i].addEventListener('mouseover', function(e) { // adds event listener
    e.target.style.background = 'gray';//add anon function turn background gray
  });
  }
}


createGrid(60);
