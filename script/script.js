/*
al click del btn:
    la griglia viene creata (10*10)
    al cui interno ci sono 100 BOX numerati
    al click sul box:
        si colora di azzurro e appare l'output del numero
*/

const btn = document.querySelector('.btn');
const sectionGrid = document.getElementById('section-grid');

btn.addEventListener('click', function(){
    // controlla se esiste già la grid 
    let firstChild = sectionGrid.firstChild;
    if(firstChild) sectionGrid.removeChild(firstChild);
    // crea e appende la grid 
    const grid = document.createElement('div');
    grid.classList.add('grid');
    sectionGrid.append(grid);
    // creo le box 
    const boxTotal = 100;
    for(let i=0; i < boxTotal; i++){
        grid.append(newBox(i));
    }
})

/**
 * [newBox]
 * crea un box numerato che se cliccato aggiunge una classe(per cambiare il bg color) e stampa il numero proprio
 * @param {number} index 
 * @returns {object}
 */
function newBox(index){
    const box = document.createElement('div');
    box.innerHTML = index + 1;
    box.classList.add('box');
    box.addEventListener('click', function(){
        box.classList.add('clicked');
        console.log(`hai cliccato la casella: ${index + 1}`);
    });
    return box
}