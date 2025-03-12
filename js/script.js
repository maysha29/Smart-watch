const ringButtons=document.querySelectorAll(".ring-button")
for (const button of ringButtons) {
  button.addEventListener("click",function(event){
    for (const btn of ringButtons) {
      btn.classList.add( "border-gray-300")
     btn.classList.remove("border-purple-600")      
    }
      event.target.classList.add("border-purple-600")
      event.target.classList.remove("border-gray-300")

  })
  
}