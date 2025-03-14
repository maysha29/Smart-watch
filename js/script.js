const ringButtons=document.querySelectorAll(".ring-button")
for (const button of ringButtons) {
  button.addEventListener("click",function(event){
    for (const btn of ringButtons) {
      btn.classList.add( "border-gray-300")
     btn.classList.remove("border-purple-600")      
    }
      event.target.classList.add("border-purple-600")
      event.target.classList.remove("border-gray-300")

      const image=document.getElementById("product-image")
      const color=event.target.id.split('-color')[0];
      const imageBase="../images/";
      image.src=`${imageBase}${color}.png`;
  })
}
  const sizes=['S','M','XL','L']
  for (const size of sizes) {
    const sizebtn=document.getElementById(`size-${size}`);
  sizebtn.addEventListener('click', function () {
    for (const sizeClick of sizes) {
      const sizeButton = document.getElementById(`size-${sizeClick}`);
      sizeButton.classList.remove('border-purple-700')
    }
    sizebtn.classList.add('border-purple-700')
  })

let quantity = 0
const quantityButtons = document.querySelectorAll(".quantity-button");
for (const btn of quantityButtons) {
  btn.addEventListener('click', function (event) {
    if (event.target.innerText === '+') {
      quantity++
    }
    else if (event.target.innerText === '-') {
      quantity--
    }
     if (quantity < 0) {
      quantity = 0;
    }

  document.getElementById("quantity").innerText = quantity
  })
}
  }