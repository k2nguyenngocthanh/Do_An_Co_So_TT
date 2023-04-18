// render product
const renderProduct = (arr) => {
    let template = '';
    arr.forEach((item) => {
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
  
  let renderContentCart = (arr) => {
    let contentHTML = '';
  
    arr.forEach((item) => {
      let contentCart = `
                        <div id="modal__content">
                          <div class="modal__img">
                            <img src="${item.product.hinhAnh}" alt="" />
                          </div>
                          <div class="modal__quantity">
                            <span>${item.quantity}</span>
                          </div>
                          <div class="modal__price">
                            <span>${item.product.giaSP}</span>
                          </div>
                          <div class="modal__icon">
                            <i class="las la-times" onclick="deleteIndexCartItem('${item.product.maSP}')"></i>
                          </div>
                        </div> 
                      `;
      contentHTML += contentCart;
    });
  
    document.getElementById('modal__wrapper').innerHTML = contentHTML;
  };
  
  let saveCart = () => {
    localStorage.setItem('shoppingCart', JSON.stringify(cartList));
  };
  