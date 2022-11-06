const divs = [];
const divContainer = document.createElement('div');
divContainer.classList.add('container')

for (let i = 0; i < 16; i++){
    divs[i] = document.createElement('div');
    divs[i].classList.add(`div${i}`);
    divs[i].classList.add(`grid`);
    divContainer.appendChild(divs[i]);
}

document.body.appendChild(divContainer);