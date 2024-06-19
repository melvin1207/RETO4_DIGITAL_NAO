//Se obtienen botones para ingresas los gastos o ingresos
const btn_ingresos = document.querySelector('#btn-ingresos')
const btn_gastos = document.querySelector('#btn-gastos')

//se obtienen los campos donde se escribiran los datos
const balance_general = document.querySelector('#balance-general')
const ingresos_totales = document.querySelector('#ingresos-totales')
const gastos_totales = document.querySelector('#gastos-totales')


//variables para manejar el dinero
let balance = 0
let ingreso = 0
let gasto = 0


//funcion para ingresar dinero
btn_ingresos.addEventListener('click', (e) => {
  e.preventDefault()

  //se actualiza el balance general
  balance = Number(document.querySelector('#ingresos').value) + Number(balance)
  balance_general.innerHTML = balance

  //se actualizan los ingresos totales
  ingreso = Number(document.querySelector('#ingresos').value) + Number(ingreso)
  ingresos_totales.innerHTML = ingreso
})

//funcion para los gastos
btn_gastos.addEventListener('click', (e) => {
  e.preventDefault()

  //se actualiza el balance general
  balance = Number(balance) - Number(document.querySelector('#gastos').value)
  balance_general.innerHTML = balance

  //se actualizan los gastos totales
  gasto = Number(document.querySelector('#gastos').value) + Number(gasto)
  gastos_totales.innerHTML = gasto
})