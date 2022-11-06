const divs = [];
const divContainer = document.createElement('div');
divContainer.classList.add('container');

let initialOpacity = 0;

for (let i = 0; i < 16; i++) {
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
