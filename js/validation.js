function kiemTraNhap() {
  var inputTen = document.forms["form1"]["username"];
  // var inputTen = document.form1.username;
  var giaTriTen = inputTen.value;
  var theP = document.getElementById("thongbao");
  if (giaTriTen == "") {
    theP.style.display = "block";
    theP.innerHTML = "Hãy nhập vào giá trị";
    theP.style.color = "red";
    // alert("Nhập vào một giá trị");
    return false;
  } else {
    theP.style.display = "none";
    // alert("Bạn đã nhập rồi! Thank you");
    return true;
  }
}

function kiemTraTatCaKiTu(idTag) {
  var inputTag = document.getElementById(idTag);
  var letters = /^[A-Za-z]+$/;
  var theP = document.getElementById("thongbao1");
  if (inputTag.value.match(letters)) {
    theP.style.display = "none";
    return true;
  } else {
    theP.style.display = "block";
    theP.innerHTML = "Hãy nhập tất cả đều là kí tự";
    theP.style.color = "red";
    return false;
  }
}

function kiemTraTatCaLaSo(idTag) {
  var inputTag = document.getElementById(idTag);
  var numbers = /^[0-9]+$/;
  var theP = document.getElementById("thongbao1");
  if (inputTag.value.match(numbers)) {
    theP.style.display = "none";
    return true;
  } else {
    theP.style.display = "block";
    theP.innerHTML = "Hãy nhập tất cả đều là số";
    theP.style.color = "red";
    return false;
  }
}

function kiemTraEmailHopLe(idTag) {
  var inputTag = document.getElementById(idTag);
  var email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
  var theP = document.getElementById("thongbao1");
  if (inputTag.value.match(email)) {
    theP.style.display = "none";
    return true;
  } else {
    theP.style.display = "block";
    theP.innerHTML = "Hãy nhập email hợp lệ";
    theP.style.color = "red";
    return false;
  }
}

function kiemTraMinMax(idText, minlength, maxlength) {
  var inputText = document.getElementById(idText);
  var field = inputText.value;
  var theP = document.getElementById("thongbao1");

  if (field.length < minlength || field.length > maxlength) {
    theP.style.display = "block";
    theP.innerHTML =
      "Hãy nhập vào giá trị từ " + minlength + " đến " + maxlength;
    theP.style.color = "red";
    return false;
  } else {
    theP.style.display = "none";
    return true;
  }
}

// Sự kiện khi nhấn tab đăng kí
function onDangKi() {
  // ẩn phần đăng nhập
  // hiển thị div đăng kí
  var divDangKi = document.getElementById("divdangki");
  var divDangNhap = document.getElementById("divdangnhap");
  divDangKi.style.display = "block";
  divDangNhap.style.display = "none";
}

// Sự kiện khi nhấn tab đăng nhập
function onDangNhap() {
  // ẩn phần đăng kí
  // hiển thị div đăng nhập
  var divDangKi = document.getElementById("divdangki");
  var divDangNhap = document.getElementById("divdangnhap");
  divDangKi.style.display = "none";
  divDangNhap.style.display = "block";
}

function kiemTraBatBuocDangKi() {
  var pthongbao = document.getElementById("pthongbao");
  var nghenghiep = document.getElementById("nghenghiep");
  var nam = document.getElementById("nam");
  var nu = document.getElementById("nu");
  if (
    formdangki.tendangnhap.value == "" ||
    formdangki.matkhau.value == "" ||
    formdangki.email.value == "" ||
    formdangki.tuoi.value == ""
  ) {
    formdangki.tendangnhap.style.border = "solid 2px red";
    formdangki.matkhau.style.border = "solid 2px red";
    formdangki.email.style.border = "solid 2px red";
    formdangki.tuoi.style.border = "solid 2px red";
    pthongbao.style.display = "block";
    pthongbao.innerHTML = "Bạn cần nhập dữ liệu cho các trường đầy đủ" + "<br>";
    return false;
  } else if (nghenghiep.selectedIndex == 0) {
    pthongbao.style.display = "block";
    pthongbao.innerHTML = "Bạn phải chọn nghề nghiệp <br>";
    return false;
  } else if (!nam.checked && !nu.checked) {
    pthongbao.style.display = "block";
    pthongbao.innerHTML = "Bạn phải chọn giới tính <br>";
    return false;
  } else {
    pthongbao.style.display = "none";
    return true;
  }
}

function kiemTraChieuDaiChuoi(idText, minlength, maxlength) {
  var inputText = document.getElementById(idText);
  var field = inputText.value;
  var pthongbao = document.getElementById("pthongbao");

  if (field.length < minlength || field.length > maxlength) {
    pthongbao.style.display = "block";
    pthongbao.innerHTML =
      "Hãy nhập vào giá trị từ " + minlength + " đến " + maxlength;
    return false;
  } else {
    pthongbao.style.display = "none";
    return true;
  }
}

function kiemTraEmail(idTag) {
  var inputTag = document.getElementById(idTag);
  var pthongbao = document.getElementById("pthongbao");
  var email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
  if (inputTag.value.match(email)) {
    pthongbao.style.display = "none";
    return true;
  } else {
    pthongbao.style.display = "block";
    pthongbao.innerHTML = "Hãy nhập email hợp lệ";
    return false;
  }
}

function kiemTraTuoi(minTuoi, maxTuoi, idTagThongBao) {
  var pthongbao = document.getElementById(idTagThongBao);
  var tuoi = document.getElementById("tuoi");
  var numbers = /^[0-9]+$/;
  if (tuoi.value.match(numbers)) {
    var intTuoi = parseInt(tuoi.value);
    if (intTuoi > maxTuoi || intTuoi < minTuoi) {
      pthongbao.style.display = "block";
      pthongbao.innerHTML = "Hãy nhập tuổi từ " + minTuoi + " đến " + maxTuoi;
      return false;
    } else {
      pthongbao.style.display = "none";
      return true;
    }
  } else {
    pthongbao.style.display = "block";
    pthongbao.innerHTML = "Hãy nhập tất cả đều là số";
    return false;
  }
}

function kiemTraHopLe() {
  return (
    kiemTraBatBuocDangKi() &&
    kiemTraChieuDaiChuoi("tendangnhap", 1, 30) &&
    kiemTraEmail("email") &&
    kiemTraTuoi(18, 40, "pthongbao")
  );
}
