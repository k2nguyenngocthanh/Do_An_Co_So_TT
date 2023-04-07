
function getValueFromForm() {
    var maSP = document.getElementById("productID").value;
    var tenSP = document.getElementById("tenProduct").value;
    var giaSP = document.getElementById("gia").value;
    var hinhAnh = document.getElementById("hinhAnh").value;
    var moTa = document.getElementById("moTa").value;
    var trangThai = document.getElementById("trangThai").value;
   
    return  {
      maSP,
      tenSP,
      giaSP,
      hinhAnh,
      moTa,
      trangThai,
    };
  }
  
   function reset() {
    document.getElementById('productID').value = '';
    document.getElementById('tenProduct').value = '';
    document.getElementById('gia').value = '';
    document.getElementById('hinhAnh').value = '';
    document.getElementById('moTa').value = '';
    document.getElementById('trangThai').value = '';
  }
  
   function showInformationProduct(product) {
    document.getElementById('productID').value = product.maSP;
    document.getElementById('tenProduct').value = product.tenSP;
    document.getElementById('gia').value = product.giaSP;
    document.getElementById('hinhAnh').value = product.hinhAnh;
    document.getElementById('moTa').value = product.moTa;
    document.getElementById('trangThai').value = product.trangThai;
  }
  
   function searchPositionEl(id, arr) {
    let position = -1;
  
    for (let index = 0; index < arr.length; index++) {
      let staff = arr[index];
  
      if (staff.tenSP == id) {
        position = index;
        break;
      }
    }
    return position;
  }
  
  
  
  