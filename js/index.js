// owl carousel---------------------------------------------------
$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    dotsData: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // -------------------------------------------------------------
  // Home Page----------------------------------------------------
  const BASE_URL = 'https://63dc7db82308e3e319e87892.mockapi.io/Capstone';
  var cartList = [];
  var productList = [];
  
  var cartListJSON = localStorage.getItem('shoppingCart');
  
  if (cartListJSON != null) {
    cartList = JSON.parse(localStorage.getItem('shoppingCart'));
    renderContentCart(cartList);
  }
  
  // get data from api
  const getData = async () => {
    try {
      const res = await axios.get(BASE_URL);
      res.data.forEach((data) => {
        productList.push(data);
      });
      renderProduct(productList);
    } catch (error) {
      console.log(error);
    }
  };
  getData();
  
  // add cart shopping
  let addProduct = (id) => {
    let index = productList.findIndex((item) => item.maSP == id);
    let cartItem = new CartItem(productList[index], 1);
    var quantityCart = 0;
  
    if (cartList.length == 0) {
      cartList.push(cartItem);
    } else {
      let indexItem = cartList.findIndex((item) => item.product.maSP == id);
  
      if (indexItem != -1) {
        cartList[indexItem].quantity = cartList[indexItem].quantity + 1;
      } else {
        cartList.push(cartItem);
      }
    }
  
    renderContentCart(cartList);
  
    cartList.forEach((item) => {
      quantityCart += item.quantity;
    });
  
    // cart quantity
    if ((quantityCart > 0) & (cartList.length > 0)) {
      document.getElementById('quantityCart').innerHTML = `
                                                          <span class="quantity">${quantityCart}</span>
                                                        `;
      document.getElementById('quantityCart').style.display = 'flex';
    } else {
      document.getElementById('quantityCart').style.display = 'none';
    }
  
    saveCart();
  };
  
  // show cart
  document.getElementById('cart').onclick = function () {
    document.getElementById('modal').style.display = 'block';
  };
  
  // close cart
  document.getElementById('modal__close-btn').onclick = function () {
    document.getElementById('modal').style.display = 'none';
  };
  
  // delete item cart
  let deleteIndexCartItem = (id) => {
    let index = cartList.findIndex((item) => item.product.maSP == id);
  
    cartList.splice(index, 1);
    saveCart();
    renderContentCart(cartList);
  };
  
  // filter product
  document.getElementById('filterProduct').onchange = function () {
    let type = document.getElementById('filterProduct').value;
  
    console.log(type);
  
    let appleProduct = productList.filter((item) => item.type == 'iphone');
  
    let samsungProduct = productList.filter((item) => item.type == 'samsung');
  
    if (type == 'Apple') {
      renderProduct(appleProduct);
    } else if (type == 'SamSung') {
      renderProduct(samsungProduct);
    } else {
      renderProduct(productList);
    }
  };
  