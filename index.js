var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

        // Update the countdown every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the corresponding elements
           /*  document.getElementById("days").textContent = days + "d";
            document.getElementById("hours").textContent = hours + "h";
            document.getElementById("minutes").textContent = minutes + "m";
            document.getElementById("seconds").textContent = seconds + "s"; */


            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);







const brandContainer = async () => {
  const res = await fetch("https://cosmetics-backend-server.vercel.app/brands");
  const data = await res.json();
/*   ourBrandShow(data); */
};
brandContainer();

const ourBrandShow = (brandItems) => {
  const ourBrand = document.getElementById("brands");

  for (let brandCart of brandItems) {
   /*  console.log(brandCart); */
    const div = document.createElement("div");
    div.classList = "card w-96  bg-base-100 shadow-xl";
    div.innerHTML = `
    <figure class="h-72 border">
        <img class="w-full h-full" src=${brandCart.brand_logo} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${brandCart.brand_name}</h2>
        </div>           
      `;
    ourBrand.appendChild(div);
  };
};

const productContainerShow = async (isMore,lessMore) => {
  const res = await fetch(
    "https://cosmetics-backend-server.vercel.app/product"
  );
  const data = await res.json();
  productItemShow(data,isMore,lessMore);
 /*  console.log(data); */
 console.log(isMore);
 /* console.log(lessMore); */
 

 
};
productContainerShow();

const productItemShow = (productData,isMore,lessMore) => {
  const productItemsId = document.getElementById("productContainer");
  const productBtn = document.getElementById('productBtn')
  const lessMoreBtn = document.getElementById('lessMoreBtn')

  
if(!isMore){
  productData = productData.slice(0,4)
  productBtn.classList.remove('hidden')
}else{
  productBtn.classList.add('hidden')
}


  for (let products of productData) {

    const div = document.createElement("div");
    div.classList = "card w-[100%] h-[90%]  bg-base-100 shadow-xl";
    div.innerHTML = `
    <figure class="h-full transition hover:scale-105 overflow-hidden w-full border" id="imageContainer">
        <img id="scaleImg"class="w-full h-[90%] object-cover" src=${products.photo} alt="product" />
        </figure>
        <div class="card-body">
        <div class="flex justify-between">
        <h2 class="card-title text-[18px] font-semibold">${products.category}</h2>
        <h2 class="card-title">Rating : <span class="text-[#F56B80]">${products.rating}<span></h2>
        </div>
        <div class="text-center mt-5 ">
        <button onclick="showMorebutton()" class="btn font-bold bg-[#F56B80] text-white hover:bg-slate-500">Show Details</button>
        </div>
        </div>           
      
    `;
    productItemsId.appendChild(div)
  }
  
};


/* const imageContainer = document.getElementById('imageContainer');
const scaleImg = document.getElementById('scaleImg');

imageContainer.addEventListener('mouseover', (e)=>{
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  console.log(x,y);
 scaleImg.style.transformOrigin = `${x}px ${y}px`;
 scaleImg.style.transform = "scale(2)"

}) */

/* ===============cart product============================ */

const cartContainer = async (isMore) => {
  const res = await fetch("https://cosmetics-backend-server.vercel.app/cart");
  const data = await res.json()
  cartProductShow(data,isMore);
  console.log(data);
}
cartContainer()

const cartProductShow = (cartData,isMore) => {
const cartContainer = document.getElementById('cartProduct');
const productBtn = document.getElementById('productBtn')

if(!isMore){
  cartData = cartData.slice(0,4)
}
for(let cart of cartData){
  let div = document.createElement('div');
  div.classList = "card w-[100%] h-[90%]  bg-base-100 shadow-xl";
  div.innerHTML = `
   <figure class="h-full w-full border">
        <img class="w-full h-[90%] object-cover" src=${cart.photo} alt="Shoes" />
        </figure>
        <div class="card-body">
       
        <h2 class="card-title text-[18px] font-semibold">${cart.brand}</h2>
        <h3 class="card-title"><p class="text-[#000]">${cart.name}</p></h3>
        <h2 class="card-title"><span class="text-[#F56B80]"> Price : ${cart.price} Tk<span></h2>
      
        <div class="text-center mt-5 ">
        <button onclick="showMorebutton()" class="btn font-bold bg-[#F56B80] text-white hover:bg-slate-500">Show Details</button>
        </div>
        </div> 
  
  `;
  cartContainer.appendChild(div)
};
};

const allShowProducts = (isMore) =>{
  productContainerShow(true)
  cartContainer(true)
}
/* const moreProductBtn = ()=>{
  cartContainer(true)
} */
const lessMoreBtn = (lessMore) =>{
  productContainerShow(true);
}