// render product
const renderProduct = (cartList) => {
    let template = '';
    cartList.forEach((item) => {
      template += /*html*/ `
                              <div class="product__card">
                                <div class="card__img">
                                  <img src=${item.hinhAnh} alt="" />
                                </div>
                                <div class="card__content mt-4 px-2">
                                  <p>${item.tenSP}</p>
                                  <div class="card__price my-2">
                                    <span>30.990.000đ</span>
                                    <span>${item.giaSP}</span>
                                  </div>
                                </div>
                                <div class="card__btn mt-4">
                                  <button id='productBtn' onclick='addProduct("${item.maSP}")'>Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        `;
    });
    document.getElementById('card_product').innerHTML = template;
  };
  
  let renderContentCart = (cartList) => {
 
    let contentHTML = '';
    let total = 0;
    let total1Product = 0;
    cartList.forEach((item) => {
      let contentCart = `
                        <div id="modal__content">
                          <div class="modal__img">
                            <img src="${item.product.hinhAnh}" alt="" />
                          </div>
                          <div class="modal__quantity">
                          <button onclick="onChangeQuantity(
                            ${item.id}, 
                            'decrement'
                          )" class=" fa fa-angle-left "></button>
                            <span  id="cart-quantity"> ${item.quantity} </span>
                            <button onclick="onChangeQuantity(
                              ${item.id},
                              'increment'
                            )" class="fa fa-angle-right"></button>
                          </div>
                          <div class="modal__price">
                            <span>${item.product.giaSP * item.quantity}</span>
                          </div>
                          <div class="modal__icon">
                            <i class="las la-times" onclick="deleteIndexCartItem('${item.product.maSP}')"></i>
                          </div>
                        </div> 
                      `;
                      `<div>
                      <span>
                  
                      </span></div>
                      
                      
                      `
      contentHTML += contentCart;
      total1Product = item.product.giaSP * item.quantity;
    total += total1Product;
   
    });

    document.getElementById('modal__wrapper').innerHTML = contentHTML;
    document.getElementById('Total').innerHTML = total;
 
  };



  
  
