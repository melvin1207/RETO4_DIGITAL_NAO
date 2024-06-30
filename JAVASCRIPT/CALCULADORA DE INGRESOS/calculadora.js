//Se obtienen botones para ingresas los gastos o ingresos
const btnIngresos = document.querySelector('#btn-ingresos')
const btnGastos = document.querySelector('#btn-gastos')

//se obtienen los campos donde se escribiran los datos
const balanceGeneral = document.querySelector('#balance-general')
const ingresosTotales = document.querySelector('#ingresos-totales')
const gastosTotales = document.querySelector('#gastos-totales')


//variables para manejar el dinero
let balance = 0
let ingreso = 0
let gasto = 0


//funcion para ingresar dinero
btnIngresos.addEventListener('click', (e) => {
  e.preventDefault()

  //se actualiza el balance general
  balance = Number(document.querySelector('#ingresos').value) + Number(balance)
  balanceGeneral.innerHTML = balance

  //se actualizan los ingresos totales
  ingreso = Number(document.querySelector('#ingresos').value) + Number(ingreso)
  ingresosTotales.innerHTML = ingreso
})

//funcion para los gastos
btnGastos.addEventListener('click', (e) => {
  e.preventDefault()

  //se actualiza el balance general
  balance = Number(balance) - Number(document.querySelector('#gastos').value)
  balanceGeneral.innerHTML = balance

  //se actualizan los gastos totales
  gasto = Number(document.querySelector('#gastos').value) + Number(gasto)
  gastosTotales.innerHTML = gasto
})