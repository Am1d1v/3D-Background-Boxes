

const boxesContainer = document.querySelector('#boxes');
const button = document.querySelector('.btn');

function createBoxes(){

    for(let i = 0; i < 4; i++){

        for(let j = 0; j < 4; j++){
            const box = document.createElement('div');
            box.classList.add('box');
            boxesContainer.appendChild(box);
        }

    }

    
}
createBoxes();