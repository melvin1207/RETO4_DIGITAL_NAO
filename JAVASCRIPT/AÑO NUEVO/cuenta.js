//se obtinen los span donde se iran actualizando los datos de la cuenta regresiva
let dias = document.querySelector('#dias')
let horas = document.querySelector('#horas')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')

//se obtiene la fecha del siguiente año
const newYear = (new Date()).getFullYear() + 1
const newYearDate = new Date(newYear, 0 , 1)


//con SetInterval se ira actualizando la cuenta regresiva con cada segundo que pasa
setInterval(() => {
  //perimero se obtiene la fecha actual
  const today = new Date()

  //se obtiene la diferencia de tiempo en segundos entre la fecha actual y año nuevo
  const difference = Math.floor((newYearDate.getTime() - today.getTime()) / 1000)

  //se obtienen con operaciones los dias, horas, minutos y segundos faltantes
  const seconds = Math.floor(difference) % 60
  const minutes = Math.floor(difference / 60) % 60
  const hours = Math.floor(difference / 3600) % 24
  const days = Math.floor((difference / (3600 * 24)))
  
  //finalmente se van actualizando los datos en el HTML
  dias.innerText = days
  horas.innerText = hours
  minutos.innerText = minutes
  segundos.innerText = seconds 
}, 1000)