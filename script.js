const grid = document.body;
let square = document.createElement('div');
square.classList.add('square');
square.textContent = "X";


function createGrid(num) {
    for(i=0; i<num; i++){
        let row = document.createElement('div');
        row.className = "row";
        row.textContent = "Y";
        grid.appendChild(row.cloneNode(true));
        for(x = 1; x<=num; x++) {
            grid.appendChild(square.cloneNode(true));
        }
    
    }
}

createGrid(2);

