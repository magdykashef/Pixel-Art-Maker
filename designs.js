// Select color input
const color=document.querySelector("#colorPicker");
// Select size input
const h=document.querySelector("#inputHeight");
const w=document.querySelector("#inputWidth");
const picker=document.querySelector("#sizePicker");
const grid=document.querySelector("#pixelCanvas");

/* 
 a function to draw a grid by using two nested For loops
 the first loop is to drawing the the rows and the second 
 loop to draw the the cell
*/

function makeGrid(h,w) {
  // Your code goes here!
  for(let i=0; i<h; i++){
    let row=grid.insertRow(i);
    for(let a=0; a<w; a++){
      let cell=row.insertCell(a);
      cell.addEventListener("click",function(){
        cell.style.backgroundColor=color.value;
  	  })
  	}
  } 
};

picker.addEventListener("submit",function(event){
  event.preventDefault();
  grid.innerHTML=" ";
  makeGrid(h.value,w.value);
});
                        
