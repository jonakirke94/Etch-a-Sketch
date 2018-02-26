//generate defeault grid on load
generateGrid();

function generateGrid(n = 16) {
    const container = document.querySelector('#container');

    //generate rows
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        container.appendChild(row);

        //generate cells in row
        for (let j = 0; j < n; j++) {
            const cell = document.createElement('div');
            cell.classList.add('square');
            cell.style.width = `${960 / n}px`;
            cell.style.height = `${500 / n}px`;
            row.appendChild(cell);

        }
    }

    addHandlers();
}

function squareHover() {
    let background = this.style.backgroundColor;
    if (!background) {
        this.style.backgroundColor = "rgba(0,0,0,0.2)"
    } else {
        let len = background.length;

        //split the color into an array of chars
        background = background.split("");

        //fetch the opacity property and join them
        let currentValue = background.slice(len - 4, len - 1);
        currentValue = currentValue.join("");

        //add 10% opacity to the value and round to 1 decimal
        let newValue = parseFloat(currentValue) + 0.1;
        newValue = newValue.toFixed(1);

        //set the new backgroundcolor
        background = background.join("").replace(currentValue, newValue);
        this.style.backgroundColor = background;
    }
}

function clearCanvas() {
    const input = prompt('How large should the grid be?');
    const size = Number(input);

    //check for valid input
    if (isNaN(size) || input.length === 0) {
        alert('Please input a number next time');
        return;
    }

    //clear existing grid
    var container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //create new grid with new size
    generateGrid(size)
}

function addHandlers() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', squareHover);
    });
}

//self invoking function
(function addButtonHandlers() {
    const btnClear = document.querySelector('#clear');
    btnClear.addEventListener('click', clearCanvas);
})();





