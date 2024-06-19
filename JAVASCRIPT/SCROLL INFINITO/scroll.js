// Se obtiene el contenedor principal de HTML para ir agregando elementos
const container = document.querySelector('.container')


//Funcion para ver cuando se esta realizando un scroll en la pagina
window.addEventListener('scroll', () => {

    //Se desetructuran las propiedades necesarias 
    const {scrollHeight, clientHeight, scrollTop} = document.documentElement
  
    // se creara un nuevo elemento solo si la altura de la ventana mas el scroll que se esta haciendo es menor a la altura de Scroll
    scrollTop + clientHeight > scrollHeight - 3 && setTimeout(newContainer, 2000)    
})

// Función para crer un nuevo elemento para agregar al contenedor
const newContainer = () => {
    const newCont = document.createElement('div')
    newCont.className = 'cont fourth rounded-circle'
    container.appendChild(newCont)
}