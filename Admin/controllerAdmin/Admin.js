//------------- Start Admin Page ----------------//

const BASE_URL = 'https://63dc7db82308e3e319e87892.mockapi.io/Capstone';

function renderProduct(products) {

  
  let contentHTML = '';
  let stt = 0;

  products.forEach(function (product) {
    stt++;
    let content = `
                      <tr>
                        <td class="border border-slate-600">${stt}</td>
                        <td class="border border-slate-600">${product.tenSP}</td>
                        <td class="border border-slate-600">${product.giaSP}</td>
                        <td class="border border-slate-600">${product.hinhAnh}</td>
                        <td class="border border-slate-600">${product.moTa}</td>
                        <td class="border border-slate-600">${product.trangThai}</td>
                       </td>
                        <td class="border border-slate-600">
                        <button class="btn btn-danger" onclick="deleteProduct('${product.maSP}')">Xóa</button>
                        <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal" onclick="checkProduct('${product.maSP}')">Xem</button>
                        </td>
                      </tr>
        `;

    contentHTML += content;
  });
  document.getElementById('tableProduct').innerHTML = contentHTML;
}

function fetchProduct() {
  axios({
    url: `${BASE_URL}`,
    method: 'GET',
  })
    .then(function (res) {
      renderProduct(res.data);
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

fetchProduct();

// Add product
function addProduct() {
  let product = getValueFromForm();

  axios({
    url: `${BASE_URL}`,
    method: 'GET',
  })
          .then(function (res) {
             let isProduct =
         checkEmpty(product.tenSP, 'nameNotice') ;
            let isPrice=
            checkNumber(product.giaSP,'priceNotice') && checkEmpty(product.tenSP, 'priceNotice');

            let isImage=
            checkEmpty(product.tenSP, 'imageNotice');

            let isDescribe= 
            checkEmpty(product.tenSP, 'describeNotice');

            let isStatus=
            checkEmpty(product.tenSP, 'statusNotice');



         let isValid= isProduct && isPrice && isImage && isDescribe && isStatus; 
         
        // checkDuplicate(product.tenProduct, res.data, 'nameNotice');
          
         
          if (isValid) {
            axios({
              url: `${BASE_URL}`,
              method: 'POST',
              data: product,
            })
              .then(function (res) {
                fetchProduct();
              })
              .catch(function (err) {
                console.log(err);
              });
          }
      })
        .catch(function (err) {
          console.log(err);
        });
      
}

// Delete product
function deleteProduct(maSP) {
  axios({
    url: `${BASE_URL}/${maSP}`,
    method: 'DELETE',
  })
    .then(function (res) {
      fetchProduct();
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Edit product
function checkProduct(maSP) {
  axios({
    url: `${BASE_URL}/${maSP}`,
    method: 'GET',
  })
    .then(function (res) {
      showInformationProduct(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Update product
function updateProduct() {
  let product = getValueFromForm();
  
    let isProduct =
checkEmpty(product.tenSP, 'nameNotice') ;
   let isPrice=
   checkNumber(product.giaSP,'priceNotice') && checkEmpty(product.tenSP, 'priceNotice');

   let isImage=
   checkEmpty(product.tenSP, 'imageNotice');

   let isDescribe= 
   checkEmpty(product.tenSP, 'describeNotice');

   let isStatus=
   checkEmpty(product.tenSP, 'statusNotice');



let isValid= isProduct && isPrice && isImage && isDescribe && isStatus; 
if (isValid){
  axios({
    url: `${BASE_URL}/${product.maSP}`,
    method: 'PUT',
    data: product,
  })
    .then(function (res) {
      fetchProduct();
    })
    .catch(function (err) {
      console.log(err);
    });
  }
}
