// Select color input
const color = document.querySelector("#colorPicker");
// Select size input
const height = document.querySelector("#inputHeight");
const width = document.querySelector("#inputWidth");
const picker = document.querySelector("#sizePicker");
const grid = document.querySelector("#pixelCanvas");


// When size is submitted by the user, call makeGrid()
function makeGrid(height,width) {
  // Your code goes here!
  for(let i = 0; i < height; i++){
    let row = grid.insertRow(i);
    for(let a = 0; a < width; a++){
      let cell = row.insertCell(a);
      cell.addEventListener("click",function(){
        cell.style.backgroundColor=color.value;
  	  })
  	}
  } 
};

picker.addEventListener("submit",function(event){
  event.preventDefault();
  grid.innerHTML = " ";
  makeGrid(height.value, width.value);
});
                        
