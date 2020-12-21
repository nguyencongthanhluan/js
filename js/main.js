function kiemTraNhap(giatri) {
  if (giatri == 8) {
    alert("Số tám");
  } else if (giatri == 9) {
    alert("Số chín");
  } else {
    alert("Không phải số tám và số chín");
  }
}

function xetHocLucSinhVien(dtb) {
  var thongBao = "";
  switch (dtb) {
    case 9:
      thongBao = "Học lực xuất sắc";
      break;
    case 8:
      thongBao = "Học lực giỏi";
      break;
    case 7:
      thongBao = "Học lực khá";
      break;
    case 6:
      thongBao = "Học lực trung bình";
      break;
    default:
      thongBao = "Chưa xét được học lực";
  }
  alert(thongBao);
}

function xuat10Cau() {
  document.write("Chương trình xuất số chẵn <br>");
  for (i = 0; i < 100; i += 2) {
    // if (i % 2 == 0) {
    document.write("Số chẵn thứ " + i + "<br>");
    // }
  }
}

function vongLapWhile(toida) {
  i = 1;
  while (i < toida) {
    i++;
    document.write("Số " + i + "<br>");
  }
}

function vongLapDoWhile(toida) {
  i = 1;
  do {
    i++;
    document.write("Số " + i + "<br>");
  } while (i < toida);
}

function changeColor(choose) {
  var txt = document.getElementById("test");
  if (choose == 1) {
    //focus
    txt.style.border = "solid 4px red";
  } else {
    //blur
    txt.style.border = "solid 1px gray";
  }
}

function thayDoiChon() {
  var theP = document.getElementById("xuat");
  var dropdown = document.getElementById("chon");
  theP.innerHTML = dropdown.value;
}

function changeColorButton(thamso) {
  var nut = document.getElementById("nut");
  if (thamso == 1) {
    //hover
    nut.style.backgroundColor = "red";
  } else if (thamso == 2) {
    //out
    nut.style.backgroundColor = "white";
  } else if (thamso == 3) {
    //down
    nut.style.backgroundColor = "green";
  } else {
    nut.style.backgroundColor = "yellow";
  }
}

function layGiaTri() {
  var theP = document.getElementById("noidung");
  theP.innerHTML = "Xin chào MyClass.vn";
  theP.style.color = "red";
}

function layGiaTriTheP2() {
  var tatCaP = document.getElementsByTagName("p");
  alert("số thẻ p " + tatCaP.length + " nội dug thẻ p: " + tatCaP[4].innerHTML);
}

function layGiaTriClass() {
  var tatCaP = document.getElementsByClassName("Demo");
  alert("số thẻ p " + tatCaP.length + " nội dug thẻ p: " + tatCaP[0].innerHTML);
}

function taoTable() {
  var sodongID = document.getElementById("sodong");
  var scotID = document.getElementById("socot");
  // NaN = Not a Number --> Hàm kiểm tra số: isNaN(chuỗi) --> là số Flase --> không phải số True
  if (isNaN(sodong.value) || isNaN(socot.value)) {
    alert("Nhập vào số dòng và số cột");
    return false;
  } else {
    //tạo table
    /**
     * <table>
     * <tr>
     *      <td>ô 0,0</td>
     *      <td>ô o,1</td>
     * </tr>
     * </table>
     */
    //lấy thẻ div để tạo table
    var divId = document.getElementById("container");
    //lấy sô dòng số cột người dùng nhập vào
    var soDong = parseInt(sodongID.value);
    var soCot = parseInt(scotID.value);
    //tạo thẻ table
    var tagTable = document.createElement("table");
    tagTable.border = 1;
    for (i = 0; i < soDong; i++) {
      //tạo thẻ dòng
      var tagTR = document.createElement("tr");
      tagTable.appendChild(tagTR);
      //tạo cột
      for (j = 0; j < soCot; j++) {
        var tagTD = document.createElement("td");
        var textNode = document.createTextNode("ô" + i + "," + j);
        tagTD.appendChild(textNode);
        tagTR.appendChild(tagTD);
      }
    }
    divId.appendChild(tagTable);
    return true;
  }
}

var now = new Date();
// alert(now);
var vnWomanDay = new Date(2015, 9, 20); //năm,tháng,ngày
// alert(vnWomanDay);
var vnWomanDayAndTime = new Date(2015, 9, 20, 12, 20, 30); //năm ,tháng,ngày,giờ,phút,giây
// alert(vnWomanDayAndTime);

var now = new Date();
// alert("Ngày hôm nay " + now);
// alert(
//   "Ngày hôm qua " +
//     new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
// );
// alert(
//   "Ngày mai " + new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
// );
// alert(
//   "Ngày mốt " + new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2)
// );

//tìm vị trí chuỗi con nằm đầu
var chuoi = "Hệ thống khóa học myclass.vn";
document.write(
  "Vị trí xuất hiện chuỗi myclass.vn là: <b> " +
    chuoi.indexOf("myclass.vn") +
    "</b><br>"
);

//tìm vị trí chuỗi con nằm cuối
var string =
  "Học lập trình myclass.vn - Trang web myclass.vn học theo dự án thực tiễn tại myclass.vn";
document.write(
  "Vị trí xuất hiện chuỗi myclass.vn là: <b> " +
    string.lastIndexOf("myclass.vn") +
    "</b><br>"
);

//tìm vị trí chuỗi con sử dụng search
var chuoi = "Hệ thống khóa học myclass.vn";
document.write(
  "Vị trí xuất hiện chuỗi myclass.vn là: <b> " +
    chuoi.search("myclass.vn") +
    "</b><br>"
);

//slice
var chuoi = "Xin chào các bạn đến hệ thống myclass.vn";
document.write("Chuỗi cần lấy là: <b>" + chuoi.slice(30, 35) + "</b><br>");

//truyền vào âm
var string = "Xin chào các bạn đến hệ thống myclass.vn";
document.write("Chuỗi cần lấy là: <b>" + string.slice(-12, 35) + "</b><br>");

//truyền vào một tham số
var string = "Xin chào các bạn đến hệ thống myclass.vn";
document.write("Chuỗi cần lấy là: <b>" + string.slice(34) + "</b><br>");

//subtring
var string = "Xin chào các bạn đến hệ thống myclass.vn";
document.write("Chuỗi cần lấy là: <b>" + string.substring(23, 35) + "</b><br>");

//subtr
var string = "Xin chào các bạn đến hệ thống myclass.vn";
document.write("Chuỗi cần lấy là: <b>" + string.substr(22, 15) + "</b><br>");

//subtr
var string = "Xin chào các bạn đến hệ thống myclass.vn";
document.write("Chuỗi cần lấy là: <b>" + string.substr(-2, 3) + "</b><br><br>");

// Tìm kiếm và thay thế
//replace(str_find,str_replace)
var chuoi = "Welcome to itclass.vn";
document.write(chuoi.replace("itclass.vn", "blog.myclass.vn"));

//chuyển hoa thường
//toUpperCase() : chuyển sang chữ Hoa
//toLowerCase() : chuyển sang chữ thường
var chuoi = "Welcome to myclass.vn. HỌc lập trình TRực Tuyến";
document.write("<br>" + chuoi.toUpperCase() + "<br>");
document.write(chuoi.toLowerCase() + "<br>");

//nối chuỗi
//sử dụng dấu +
var chuoi = "Welcome " + "to" + " myclass.vn";
document.write(chuoi + "<br/>");

// hoặc dùng hàm concat
var chuoi = "<br> Welcome ";
chuoi = chuoi.concat("to" + " myclass.vn. Học lập trình");
document.write(chuoi + "<br/>");

//Các hộp thoại trong Javascript
// 1 Hộp thoại cảnh báo (alert box)
// 2 Hộp thoại xác nhận (confirm box)
// 3 Hộp thoại nhập liệu (prompt box)
function xuatThongBao() {
  alert("Xin chào các bạn đến với hệ thống học lập trình myclass.vn");
}

function xacNhan() {
  var xacNhan;
  xacNhan = confirm("Bạn đã đánh giá khóa học này chưa? ");
  if (xacNhan) {
    document.write("Xin cảm ơn các bạn!");
  } else {
    document.write(
      "Vui lòng click vào nút màu vàng: ĐÁNH GIÁ KHÓA HỌC để đánh giá Giảng viên. Xin cảm ơn!"
    );
  }
}

function nhapDuLieu() {
  var ten;
  ten = prompt("Vui lòng nhập vào tên của bạn");
  document.write(ten);
}

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
  var theP = document.getElementById("thongbao");
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
  var theP = document.getElementById("thongbao");
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
  var theP = document.getElementById("thongbao");
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
  var theP = document.getElementById("thongbao");

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
