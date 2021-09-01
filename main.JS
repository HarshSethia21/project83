canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
widthofline=1
var width=screen.width
var height=screen.height
newwidth=width-70
newheight=height-300
if(width<992){
    document.getElementById("mycanvas").width=newwidth;
    document.getElementById("mycanvas").height=newheight;
    document.body.style.overflow="hidden"
}
var lastpositionofx,lastpositionofy
color="Yellow"
canvas.addEventListener("touchstart",mytouchstart)
function mytouchstart(e){
    color=document.getElementById("input").value
    widthofline=document.getElementById("inputwidth").value
    lastpositionofx=e.touches[0].clientX-canvas.offsetLeft
    lastpositionofy=e.touches[0].clientY-canvas.offsetTop
}
canvas.addEventListener("touchmove",mytouchmove)
function mytouchmove(e){
   currentpositionofx=e.touches[0].clientX-canvas.offsetLeft
   currentpositionofy=e.touches[0].clientY-canvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthofline
    console.log("last position of x and y =")
    console.log("x ="+lastpositionofx+"y="+lastpositionofy)
    ctx.moveTo(lastpositionofx,lastpositionofy)
    console.log("current position of x and y =")
    console.log("x ="+currentpositionofx+"y="+currentpositionofy)
    ctx.lineTo(currentpositionofx,currentpositionofy) 
    ctx.stroke()

lastpositionofx=currentpositionofx
lastpositionofy=currentpositionofy
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseevent="mouseleave"
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}