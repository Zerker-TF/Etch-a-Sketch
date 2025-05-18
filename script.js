
// Etch-A-Sketch
// 16x16 square div webpage


//creamos los contenedores y un boton para reiniciar
const buttonContainer = document.getElementById("Buttons");
const gridContainer = document.getElementById("Grids");

const restartButton = document.createElement("button");
buttonContainer.textContent = "Reset game";
restartButton.id = "restartButton";

//funcion para crear el grid 16x16

function createGrid(row,col){
    for (let x=0;x<row;x++){
        for(let y=0;y<col;y++){
            //crea el div y lo manda a la clase gridDiv para juntarlos a todos
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("gridDiv");
            gridContainer.appendChild(gridDiv);
            //que se divida por la cantidad de filas
            gridDiv.style.flex = `0 0 calc(100% / ${row})`;
        }
    }
}