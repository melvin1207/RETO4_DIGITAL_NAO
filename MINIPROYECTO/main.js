//Se obtiene el elemento de HTML
const canvas = document.querySelector("#canvas")
const context = canvas.getContext("2d")

//variables de posicion para poder trabajar 
let initialX
let initialY
let realX = 0
let realY = 0

let position = canvas.getBoundingClientRect()
realX = position.x
realY = position.y

//Funcion para dibujar
const drawing = (mouseX, mouseY) => {
  context.beginPath()
  context.moveTo(initialX, initialY)
  context.lineWidth = 20
  context.strokeStyle = "#000"
  context.lineCap = "round"
  context.lineJoin = "round"
  context.lineTo(mouseX, mouseY)
  context.stroke()

  initialX = mouseX
  initialY = mouseY
}

//Funcion para saber si se esta presionando el boton
const mouseClick = (e) => {
  e.preventDefault()
  if (e.changedTouches === undefined) {
    initialX = e.offsetX
    initialY = e.offsetY
  } else{
    initialX = e.changedTouches[0].pageX - realX
    initialY = e.changedTouches[0].pageY - realY
  }

  //se llama a traer la función para dibujar
  drawing(initialX, initialY)

  //se verifica si el mouse se mueve
  canvas.addEventListener("mousemove", moving)
}

//mapear el movimiento del mouse
const moving = (e) => {
  e.preventDefault()
  if (e.changedTouches === undefined) {
    drawing(e.offsetX, e.offsetY)
  } else{
    drawing( e.changedTouches[0].pageX - realX, e.changedTouches[0].pageY - realY )
  }
}

//funcion para saber si no se presiona el boton del mouse
const mouseNoClick = () => {
  canvas.removeEventListener("mousemove", moving)
}

//se verifica constantemente si se esta presionando o no el boton
canvas.addEventListener("mousedown", mouseClick);
canvas.addEventListener("mouseup", mouseNoClick);
