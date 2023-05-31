const text = "Descobrindo o JavaScript"
const speed = 100
let i=0
function typeWriter(){
  if (i<text.length){
    document.getElementById("disciplina").innerHTML+=text.charAt(i)
    i++
    setTimeout(typeWriter, speed)
  }
}
typeWriter()