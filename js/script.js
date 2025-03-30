const ringButtons = document.querySelectorAll(".ring-button");
let productImageBase = "../images/";
ringButtons.forEach((ringBtn) => {
  ringBtn.addEventListener("click", (event) => {
    // const color = event.target.id.replace('-color', '')
    const color = event.target.id.split("-").at(0);

    ringButtons.forEach((button) => {
      button.classList.remove("border-purple-600");
      button.classList.add("border-gray-300");
    });

    event.target.classList.add("border-purple-600");
    event.target.classList.remove("border-gray-300");

    const productImage = document.getElementById("product-image");
    productImage.src = `${productImageBase}${color}.png`
    
  });
});

const sizes = ["S", "M", "L", "XL"];
sizes.forEach((size) => {
  const button = document.getElementById(`size-${size}`);
  button.addEventListener("click", () => {
    sizes.forEach((size) => {
      const btn = document.getElementById(`size-${size}`);
      btn.classList.remove("border-purple-600");
    });
    button.classList.add("border-purple-600");
  });
});

// const sizes = ["S", "M", "L", "XL"];
// const buttons = [];
// sizes.forEach((size) => {
//   const button = document.getElementById(`size-${size}`);
//   buttons.push(button);
// });
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     buttons.forEach((btn) => btn.classList.remove("border-purple-600"));
//     button.classList.add("border-purple-600");
//   });
// });


let quantity = 0;
const quantityButtons = document.querySelectorAll(".quantity-button");
quantityButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.textContent === "+") {
      quantity++;
    } else if (event.target.textContent === "-") {
      quantity--;
      if (quantity < 0) quantity = 0;
    }
    document.getElementById("quantity").textContent = quantity;
  });
});



// const quantityButton = document.querySelectorAll(".quantity-button");
// quantityButton.forEach(btn => {
//   btn.addEventListener('click', event => {
//     const amount = event.target.innerText === '+' ? 1 : -1
//     const quantity = document.getElementById("quantity").textContent;
//     const convertQuantity = Number(quantity)
//     const newQuantity = Math.max(0, convertQuantity + amount)
//    document.getElementById("quantity").textContent = newQuantity;
    
//   })
// })


let cartCount = 0
let cartItems = []
document.getElementById("add-to-cart").addEventListener('click', () => {
  const quantity = Number(document.getElementById("quantity").textContent);
  if (quantity > 0) {
    document.getElementById("checkout-container").classList.remove('hidden')
    cartCount += quantity
    document.getElementById("cart-count").textContent = cartCount
    const selectedColorButton = document.querySelector('button.border-purple-600.w-6')
    const selectedColor = selectedColorButton ? selectedColorButton.id.split('-').at(0) : 'S'
    const selectedSize = document
      .querySelector("button.border-purple-600:not(.w-6")
      .textContent.split(" ")
      .at(0);
    const selectedPrice = document
      .querySelector("button.border-purple-600:not(.w-6")
      .textContent.split(" ")
      .at(1).split('$').at(1);
    cartItems.push({
      image: `${selectedColor}.png`,
      title: 'Classy Modern Smart Watch',
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      price: quantity * Number(selectedPrice),
    })
   console.log(cartItems)
  }
  else {
    window.alert('PLease select a quantity')
  }
})

document.getElementById("checkout-btn").addEventListener("click", function () {
  const cartModal = document.getElementById("cart-modal");

  const cartContainer = document.getElementById("cart-items");

  for (const cartItem of cartItems) {
    const tableRow = document.createElement("tr");
    tableRow.classList.add("border-b");
    tableRow.innerHTML = `
    <td class="py-2 px-4">
      <div class="flex items-center space-x-2">
        <img class="h-12 w-12 object-cover rounded-md" src="${productImageBase}${cartItem.image}" alt="">
        <span class="font-semibold">${cartItem.title}</span>
      </div>
    </td>
    <td class="py-2 px-4">${cartItem.color}</td>
    <td class="py-2 px-4">${cartItem.size}</td>
    <td class="py-2 px-4">${cartItem.quantity}</td>
    <td class="py-2 px-4">$${cartItem.price}</td>
    `;
    cartContainer.appendChild(tableRow);
  }

  cartModal.classList.remove("hidden");
});

document
  .getElementById("continue-shopping")
  .addEventListener("click", function () {
    document.getElementById("cart-modal").classList.add("hidden");
  });
document.getElementById("checkOut").addEventListener("click", function () {
  window.alert('Checking your product')
});


// another part 

function displayCards(cards) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; 

  let visibleCount = 6; 

  function renderCards() {
      cardContainer.innerHTML = "";
      for (let i = 0; i < visibleCount && i < cards.length; i++) {
          const car = cards[i];
          const card = document.createElement("div");
          card.className = "card w-96 bg-base-100 shadow-xl p-4";
          card.innerHTML = `
              <div class="text-center">
                  <h2 class="text-3xl font-bold">${car.word}</h2>
                  <p class="text-xl font-normal">Meaning / Pronunciation</p>
                  <p class="text-lg font-semibold">${car.meaning}</p>
              </div>
              <div class="flex justify-between mt-4">
                  <button class="btn btn-circle bg-gray-200"><i class="fas fa-info"></i></button>
                  <button class="btn btn-circle bg-gray-200"><i class="fas fa-volume-up"></i></button>
              </div>
          `;
          cardContainer.appendChild(card);
      }

      showMoreBtn.style.display = (visibleCount < cards.length) ? "block" : "none";
  }
  renderCards();
  let showMoreBtn = document.getElementById("show-more-btn");
  if (!showMoreBtn) {
      showMoreBtn = document.createElement("button");
      showMoreBtn.id = "show-more-btn";
      showMoreBtn.innerText = "Show More";
      showMoreBtn.className = "mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg";
      showMoreBtn.onclick = () => {
          visibleCount += 6;
          renderCards();
      };

      cardContainer.after(showMoreBtn);
  }
}
