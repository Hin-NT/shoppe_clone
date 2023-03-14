const handelLogin = (event) => {
  event.preventDefault();
  const form = document.querySelector(".wrapper__form");
  const inputs = form.querySelectorAll("input");
  const email = inputs[0].value;
  const password = inputs[1].value;
  if (email && password && email === "hien@gmail.com" && password === "2001") {
    localStorage.setItem("username", email);
    localStorage.setItem("name", "Hiền Nguyễn");
    localStorage.setItem("password", password);
    window.location.href = "index.html";
  } else {
    form.querySelector("small").innerText = "Email hoặc mật khẩu không đúng";
  }
};

window.addEventListener("load", function () {
  checkLogin();
  addProductToDom();
});
const checkLogin = () => {
  const savedName = localStorage.getItem("name");
  if (savedName) {
    document.querySelector(".header__navbar-user-name").innerText = savedName;
  } else {
    document
      .querySelector(".header__navbar-user")
      .querySelector("img").style.display = "none";
    const signIn = document.createElement("a");
    signIn.appendChild(document.createTextNode("Đăng nhập"));
    signIn.setAttribute("href", "login.html");
    signIn.classList.add("header__navbar-item-link");
    document.querySelector(".header__navbar-user").appendChild(signIn);
  }
};
const handelLogOut = (event) => {
  event.preventDefault();
  localStorage.clear();
  window.location.href = "login.html";
};
const addProductToDom = () => {
  const productSelling = products.map((product) => {
    return `<li class="promotion__body-item">
        <a href="">
          <img src="${product.image}" alt="">
          <p class="f-weight-600"> <sup>đ</sup>${product.price}</p>
          <span class="description">${product.name}</span>
          <p>ĐANG BÁN CHẠY</p>
        </a>
      </li>`;
  });
  document
    .querySelector(".promotion__product--selling")
    .querySelector(".promotion__body-list").innerHTML = productSelling.join("");
};
const products = [
  {
    name: "Áo thun Unisex tay lỡ form rộng in hình mặt trăng, áo phông Unisex nam nữ, áo thun Unisex Freesize tay lửng JTeeMan JT30",
    price: 99.0,
    image: "https://cf.shopee.vn/file/2dcab2a0dfafe1628996a717ec667d65",
  },
  {
    name: "Áo Khoác Cardigan Trắng Nâu Túi Gấu Nữ form rộng xinh xắn",
    price: 65.0,
    image: "https://cf.shopee.vn/file/sg-11134201-22110-gp9d4kjul6jvbc_tn",
  },
  {
    name: "[Thùng 100 cái] Khẩu trang 5D mask VINAMASK",
    price: 22.0,
    image: "https://cf.shopee.vn/file/sg-11134201-23010-kondioox4vmvf0_tn",
  },
  {
    name: "Đồng Hồ Thông Minh Y68 Kết Nối Điện Thoại,Phù Hợp Nam Nữ, Thay Được Hình Nền , Nhận Thông Báo Cuộc Gọi, Tin Nhắn",
    price: 32.0,
    image: "https://cf.shopee.vn/file/sg-11134201-22110-8iyzx54vfljvdc_tn",
  },
  {
    name: "Dép lông con sóc siêu cute xả khokho85k-85k sập giá",
    price: 85.0,
    image: "https://cf.shopee.vn/file/sg-11134201-22100-uqpp5h6xreiv8a_tn",
  },
  {
    name: "Quần ống loe nữ cạp cao, quần tây ống loe nữ ôm vải mềm chun lưng",
    price: 75.0,
    image: "https://cf.shopee.vn/file/92ccd376ac7cee42ad7d1fba94ffa064_tn",
  },
  {
    name: "Áo thun Outerity Signature Trắng ver2.0- Lisa offical( V405)",
    price: 89.0,
    image: "https://cf.shopee.vn/file/sg-11134201-23010-pdpnzmvxtulvcd_tn",
  },
  {
    name: "Giày Lolita Nữ Quai Ngọc BUỘC NƠ Cao Cấp (đặt lùi 1 sz)- Giày búp bê nữ đế độn 4 phân 2 màu siêu hót",
    price: 99.0,
    image: "https://cf.shopee.vn/file/d037e5916863b0e0c271e60d4cf36eb9_tn",
  },
  {
    name: "Set Croptop 3 Món Quần Chun Suông, Chất Cotton Xinh",
    price: 86.0,
    image: "https://cf.shopee.vn/file/8d1b9c48987c870257f082360c1fbd09_tn",
  },
  {
    name: "Tai Nghe Bluetooth Tai Nghe X15 Gaming Hifi tương thích với Samsung Oppo Vivo Xiaomi",
    price: 81.0,
    image: "https://cf.shopee.vn/file/sg-11134201-23020-v7tog4n5e4mv02_tn",
  },
];
