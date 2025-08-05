// Header Background___________________________________________________________________________________________

const Header = document.querySelector('.header');
const logoName = document.querySelector('.logo-name');

window.addEventListener( 'scroll', function(){
    if(this.scrollY > 20){
        Header.classList.add( 'bgColor' );
        logoName.style.color = '#00b7ff';
    }
    else{
        Header.classList.remove( 'bgColor' )
        logoName.style.color = '';
    }
} )

// Hamburger Menu___________________________________________________________________________________________

hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
    hamburger.classList.toggle("active")
}

// Order Popup Form_________________________________________________________________________________________

function openForm(productName, price) {
  document.getElementById("product").value = productName;
  document.getElementById("price").value = `Ksh. ${price}`;
  document.getElementById("orderPopup").style.display = "flex";
}

function closeForm() {
  document.getElementById("orderPopup").style.display = "none";
  document.getElementById("orderForm").reset();
}


// Contact Form_____________________________________________________________________________________________

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


