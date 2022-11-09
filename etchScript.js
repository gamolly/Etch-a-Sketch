const divs = [];
const gridBtn = document.createElement('button');
gridBtn.classList.add('gridBtn');
gridBtn.textContent = 'Grid Size';
gridBtn.setAttribute("title", "This will reset the drawing!");
document.body.appendChild(gridBtn);
gridBtn.addEventListener('click', askResolution);

let gridResolution;
let temp;
let bodyNodes;

function askResolution() {
    console.log("inside askResolution()");
    temp = 1;
    while (temp < 2 || temp > 100 || !(Number.isInteger(temp))) {
        temp = parseInt(prompt('Please input desired grid resolution (min: 2, max: 100): ', '15'));
        console.log(temp);
    }
    if (temp < 2 || temp > 100 || typeof temp != 'number') {
        console.log('inside if statement');
        askResolution();
    }
    else gridResolution = temp;
    createGrid();
}

function darkenCell(e) {
    if (e.target.style.opacity == '1') return;
    else {
        e.target.style.opacity = (parseFloat(e.target.style.opacity) + 0.1).toString();
    }
}



let divContainer = document.createElement('div');
divContainer.classList.add('container');

let initialOpacity = 0;

askResolution();

divContainer.style.cssText = `grid-template-columns: repeat(${gridResolution},1fr)`;

function createGrid() {
    bodyNodes = Array.from(document.body.childNodes);
    if (bodyNodes.includes(divContainer)){
        console.log('bodynodes includes divcontainer');
        document.body.removeChild(divContainer)
    }
    
    divContainer = document.createElement('div');
    divContainer.classList.add('container');
    divContainer.style.cssText = `grid-template-columns: repeat(${gridResolution},1fr)`;

    for (let i = 0; i < gridResolution ** 2; i++) {
        divs[i] = document.createElement('div');
        divs[i].classList.add(`div${i}`);
        divs[i].classList.add(`grid`);
        divs[i].style.opacity = `${initialOpacity}`
        divs[i].style.backgroundColor = 'black';
        divContainer.appendChild(divs[i]);
        divs[i].addEventListener('mouseover', darkenCell);
    }
    document.body.appendChild(divContainer);
}

