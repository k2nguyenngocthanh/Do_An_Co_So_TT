function checkEmpty(value, idErr) {
    if (value.length == 0) {
      document.getElementById(idErr).innerText = 'Trường này không được để trống';
      return false;
    } else {
      document.getElementById(idErr).innerText = '';
      return true;
    }
  }

  function checkNumber(value, idErr) {
    let reg = /^\d+$/;
    let isNumber = reg.test(value);
    if (isNumber) {
      document.getElementById(idErr).innerText = '';
      return true;
    } else {
      document.getElementById(idErr).innerText = 'Vui lòng nhập số';
      return false;
    }
  }
  