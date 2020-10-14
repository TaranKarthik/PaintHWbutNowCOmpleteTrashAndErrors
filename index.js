let mouseEvent = "empty";

let color = "#f12711";
let width_of_circle = 3;
let radius = 40;
let  radiusPlace = document.getElementById("radii")
c = document.getElementById("myCanvas");
ctx = c.getContext("2d");



c.addEventListener("mousedown", function (e) {
    color = document.getElementById("color_text").value;
    radius = document.getElementById("radii").value;
    mouseEvent = "mouseDown";
})

c.addEventListener("mouseup", function (e) {
    mouseEvent = "mouseUp";
})

c.addEventListener("mouseleave", function (e) {
    mouseEvent = "mouseleave";
})

c.addEventListener("mousemove", function (e) {
    let mouse_position_currentX = e.clientX - c.offsetLeft;
    let mouse_position_currentY = e.clientY - c.offsetTop;

    if (mouseEvent == "mouseDown") {
        //this is smth
        if(radii = null){
            radiusPlace.placeholder = "Please";
        }
        else{
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_circle;
    
            
    
    
            ctx.arc(mouse_position_currentX,mouse_position_currentY,radius,0,2*Math.PI);
    
            ctx.stroke();
    
            //nothing
        }

    }
    last_position_of_x = mouse_position_currentX
    last_position_of_y = mouse_position_currentY;
});

function clearArea(){
    ctx.clearRect(0,0,c.width,c.height);
}