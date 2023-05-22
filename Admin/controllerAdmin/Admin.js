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
                        <td class="border border-slate-600"><img style='width: 50px' src='${product.hinhAnh}'/></td></td>
                        
                        <td class="border border-slate-600">${product.moTa}</td>
                        <td class="border border-slate-600">${product.trangThai}</td>
                        <td class="border border-slate-600">${product.type}</td>
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
  batLoading();
  axios({
    url: `${BASE_URL}`,
    method: 'GET',
  })
    .then(function (res) {
      renderProduct(res.data);
      tatLoading();
    })
    .catch(function (err) {
      console.log(err.message);
      tatLoading(); 
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
            let isType=
            checkEmpty(product.tenSP,'typeNotice');



         let isValid= isProduct && isPrice && isImage && isDescribe && isStatus && isType; 
         
        // checkDuplicate(product.tenProduct, res.data, 'nameNotice');
          
         
          if (isValid) {
            batLoading();
            axios({
              url: `${BASE_URL}`,
              method: 'POST',
              data: product,
            })
              .then(function (res) {
                $("#modal").modal("hide");
                fetchProduct();
                reset();
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
  batLoading();
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
      document.querySelector("#addbtn").style.display = "none";
      document.querySelector("#updatebtn").style.display = "block";
     
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
   let isType=
   checkEmpty(product.tenSP,'typeNotice');



let isValid= isProduct && isPrice && isImage && isDescribe && isStatus && isType; 
if (isValid){
  batLoading();
  axios({
    url: `${BASE_URL}/${product.maSP}`,
    method: 'PUT',
    data: product,
  })
    .then(function (res) {
      $("#modal").modal("hide");
      fetchProduct();
      
    })
    .catch(function (err) {
      console.log(err);
    });
  }
}
