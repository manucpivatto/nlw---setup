const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

//evento que acontece ao clickar o botão, no caso chama a função add
button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
const today = new Date().toLocaleDateString("pt-br").slice(0,-5)
const dayExists = nlwSetup.dayExists(today)

if(dayExists) {
  alert("Dia já incluso")
return
} 
  alert("Adicionado com sucesso!")
  nlwSetup.addDay(today)

}

function save() {
  //transforma objeto em string
localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

}
//transforma de novo string em objeto

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

