let activateDarkMode

//seleccionamos el boton de html
const btn = document.querySelector("button")
const card = document.getElementById("card")

//definir una funcion que se ejecuta al momento decargar html
document.addEventListener("DOMContentLoaded", () => {
  console.log("contenido de la pagina ha cargado")
  darkMode()

})

const darkMode = () =>{
  activateDarkMode = !activateDarkMode
  if (activateDarkMode){
  console.log("Light Mode Activated")
  btn.innerHTML = "Dark Mode"
  btn.classList.add("btn-dark")
  card.classList.replace("text-bg-dark", "text-bg-light")
 
} else {
    console.log("Dark Mode Activated")
    btn.innerHTML = "Light Mode"
    btn.classList.replace("btn-dark", "btn-light")
    card.classList.replace("text-bg-light", "text-bg-dark")
  }
}