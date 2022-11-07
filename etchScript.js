const divs = [];
const gridBtn = document.createElement('button');
gridBtn.classList.add('gridBtn');
gridBtn.textContent = 'Grid Size';
document.body.appendChild(gridBtn);

let gridResolution;
let temp;

function askResolution(){
    console.log("inside askResolution()");
    temp = 1;
    while(temp < 2 ||temp > 100 || !(Number.isInteger(temp)) ){
        temp = parseInt(prompt('Please input desired grid resolution (min: 2, max: 100): '));
        console.log(temp);
    }
    if (temp < 2 ||temp > 100 || typeof temp != 'number') {
        console.log('inside if statement');
        askResolution();
    }
    else gridResolution = temp;
}

gridBtn.addEventListener('click', askResolution);

const divContainer = document.createElement('div');
divContainer.classList.add('container');

let initialOpacity = 0;

askResolution();

divContainer.style.cssText = `grid-template-columns: repeat(${gridResolution},1fr)`;

for (let i = 0; i < gridResolution**2; i++) {
    divs[i] = document.createElement('div');
    divs[i].classList.add(`div${i}`);
    divs[i].classList.add(`grid`);
    divs[i].style.opacity = `${initialOpacity}`
    divs[i].style.backgroundColor = 'black';
    divContainer.appendChild(divs[i]);
}

document.body.appendChild(divContainer);



function darkenCell(e) {
    if (e.target.style.opacity == '1') return;
    else {
        e.target.style.opacity = (parseFloat(e.target.style.opacity) + 0.1).toString();
    }
}

divs.forEach((div) => {
    div.addEventListener('mouseover', darkenCell);
});
