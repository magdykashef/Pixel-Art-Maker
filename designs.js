// Select color input
let color=document.querySelector("#colorPicker");
// Select size input
let h=document.querySelector("#inputHeight");
let w=document.querySelector("#inputWidth");
let picker=document.querySelector("#sizePicker");
let grid=document.querySelector("#pixelCanvas");
// When size is submitted by the user, call makeGrid()



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
                        
