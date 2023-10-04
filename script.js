const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;
const WIDTH = 20;
const HEIGHT = SQUARES / WIDTH;

const container = document.getElementsById("container")

for( let i=0; i < NUM_SQUAREs; i++)
{
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', ()=>{
        setColor(square);
    })
    square.addEventListener('mouseout', ()=>{
        removeColor(square)
    })

    container.appendChild(square);
}


function getRandomColor(){
    return randomIndex = Math.floor(Math.random()*colors.length);
}
function setColor(square){
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
    square.style.boxShadow = '0 0 2px ${randomColor}, 0 0 10px ${randomColor}'
}
function removeColor(square){
    square.style.backgroundColor = '#444'
    square.style.boxShadow = "";
}
function blinkGrid(){
    const squares = document.getElementsByClassName("square");
    for(const square of squares){
        setColor(square);
        setTimeout( ()=>{
            removeColor(square)
        }, 2000)
    }
}
function clearGrid(){

}
document.addEventListener('keypress', (event)=> {
    console.log(event);
    if(event.code === "space"){
        clearGrid();
    };
    if(event.code === "Enter"){
        blinkGrid();
    };  
    if(event.code === "w"){
        activeSquare++;
    };
    if(event.code === "d"){
        activeSquare++;
        setColor( getSquareByIndex(activeSquare));
    };

})
// blinkGrid()

