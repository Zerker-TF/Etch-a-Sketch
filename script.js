
// Etch-A-Sketch
// 16x16 square div webpage


//creamos los contenedores y un boton para reiniciar
const buttonContainer = document.getElementById("Buttons");
const gridContainer = document.getElementById("Grids");

const restartButton = document.createElement("button");
buttonContainer.appendChild(restartButton);
buttonContainer.textContent = "Reset game";
restartButton.id = "restartButton";

//funcion para elegir un color RGB aleatorio
function randomRGB( ){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

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
            gridDiv.hoverCount = 0;
            //aca detecta por donde pasa el cursor
            gridDiv.addEventListener("mouseover",() => {
                //llamamos una funcion para que eliga cualquier color
                gridDiv.style.backgroundColor = randomRGB();
                //Si paso mas de una vez por el mismo cuadro, se oscurece un 10%
                if(gridDiv.hoverCount < 10) {
                    gridDiv.hoverCount++;
                    gridDiv.style.opacity = gridDiv.hoverCount * 0.1;
                }

            })
        }
    }
}

createGrid(16,16);

restartButton.addEventListener("click", () => {
    createGrid(16,16);
})