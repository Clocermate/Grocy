let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
}
let ShoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=>{
    ShoppingCart.classList.toggle('active');
}
let Login=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>{
    Login.classList.toggle('active');
}