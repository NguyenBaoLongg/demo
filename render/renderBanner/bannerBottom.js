//suggest search
const suggestSearch = document.querySelector(".suggest_search");
const allSuggestSearchs = [
  "iphone 1k",
  "Dép nữ",
  "Đồ 1k",
  "Áo 1k",
  "Đồ 1k Quần Áo",
  "Balo",
  "Hộp Bút",
  "Quạt Mini",
  "Son",
  "Sticker",
];

function renderSuggestSearch() {
  suggestSearch.innerHTML = allSuggestSearchs
    .map((val) => {
      return `<a href="#">${val}</a>`;
    })
    .join("");
}

//Banner Bottom

const bannerBottom = document.getElementById("banner_bottom");
var allProductBannerBottom = [
  {
    img: "/access/image/banner/Khunggiosansale.png",
    desc: "Khung Giờ Săn Sale",
  },
  {
    img: "/access/image/banner/freeship.png",
    desc: "Miễn Phí Ship - có Shopee",
  },
  {
    img: "/access/image/banner/voucher.png",
    desc: "Voucher Giảm Đến 500.000Đ",
  },
  {
    img: "/access/image/banner/outlet.png",
    desc: "Hàng Hiệu Outlet Giảm Đến 50%",
  },
  {
    img: "/access/image/banner/discount.png",
    desc: "Mã Giảm Giá",
  },
  {
    img: "/access/image/banner/cheap_image.png",
    desc: "Gì Cũng Rẻ - Deal Sốc Đến 9.000Đ",
  },
  {
    img: "/access/image/banner/data.png",
    desc: "Nạp thẻ, Dịch Vụ & Data",
  },
  {
    img: "/access/image/banner/international_product.png",
    desc: "Hàng Quốc Tế",
  },
  {
    img: "/access/image/banner/trand.png",
    desc: "Bắt Trend - Giá Sốc",
  },
];

function renderBannerBottom() {
  const bannerBottomHTML = allProductBannerBottom
    .map((val) => {
      return `
        <a href="#">
            <div class="banner_bottom-item">
            <div class="banner_bottom-margin">
                <div>
                <div
                    class="banner_bottom-image"
                    style="
                    background-image: url('${val.img}');
                    background-size: contain;
                    background-repeat: no-repeat;
                    "
                ></div>
                </div>
            </div>
            <div class="banner_bottom-describe">
               ${val.desc}
            </div>
            </div>
        </a>
    `;
    })
    .join("");
  bannerBottom.innerHTML = bannerBottomHTML;
}

//flash sale
const flSaleProduct = document.querySelector(".sale_live-product-wrap");
const allProductSaleLeft = [
  {
    head: "Đồ bạn thích ở đây",
    product: [
      {
        img: "/access/image/shopeelive/len.jpg",
        sale: "₫5.988",
      },
      {
        img: "/access/image/shopeelive/charge.jpg",
        sale: "₫9.000",
      },
      {
        img: "/access/image/shopeelive/thatlung.jpg",
        sale: "₫4.800",
      },
    ],
  },
];

const allProductSaleRight = [
  {
    head: "hàng hiệu giá tốt",
    product: [
      {
        img: "/access/image/shopeelive/vn-11134207-7qukw-lj2jr39xdfbm1c.jpg",
        sale: "giảm đến 40%",
      },
      {
        img: "/access/image/shopeelive/vn-11134207-7qukw-livh4fp1sp8yf7.jpg",
        sale: "giảm đến 20%",
      },
      {
        img: "/access/image/shopeelive/sg-11134201-22100-3w4yssuf06ivb2.jpg",
        sale: "giảm đến 5%",
      },
    ],
  },
];

function renderProductSaleLeft() {
  var allProductSaleLeftHTML = allProductSaleLeft[0].product
    .map((val) => {
      return `
      <div>
        <div class="sale_live_item-img">
            <img
            src="${val.img}"
            alt="Picture"
            />
        </div>
        <div
            class="sale_liveprice"
            style="color: rgb(238, 78, 46)"
        >
            ${val.sale}
        </div>
        </div>
    `;
    })
    .join("");
  flSaleProduct.innerHTML = `
    <div class="sale_live-product-left">
    <div class="sale_live-top">
        <span class="sale_live-upcase text-white">${allProductSaleLeft[0].head}</span>
        <span class="sale_live-capitalize"
            ><a class="sale_live-link-more text-white" href="#">Xem thêm> </a>
        </span>
        </div>
        <div class="sale_live-item">
            ${allProductSaleLeftHTML}
        </div>
    </div>
    `;
}

function renderProductSaleRight() {
  var allProductSaleRightHTML = allProductSaleRight[0].product
    .map((val) => {
      return `
        <div>
          <div class="sale_live_item-img">
              <img
              src="${val.img}"
              alt="Picture"
              />
          </div>
          <div
              class="sale_liveprice"
              style="color: rgb(238, 78, 46)"
          >
              ${val.sale}
          </div>
          </div>
      `;
    })
    .join("");
  flSaleProduct.innerHTML += `
      <div class="sale_live-product-left">
      <div class="sale_live-top">
          <span class="sale_live-upcase text-white">${allProductSaleRight[0].head}</span>
          <span class="sale_live-capitalize"
              ><a class="sale_live-link-more text-white" href="#">Xem thêm> </a>
          </span>
          </div>
          <div class="sale_live-item">
              ${allProductSaleRightHTML}
          </div>
      </div>
      `;
}

//Render Directory

const directorySection = document.querySelector(".directory_item-list");
const allDirectoryItems = [
  {
    img: "/access/image/directory/clothesmale.png",
    desc: "thời trang nam",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
    desc: "thời trang nữ",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    desc: "điện thoại & phụ kiện",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn",
    desc: "mẹ & bé",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn",
    desc: "thiết bị điện tử",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f_tn",
    desc: "nhà của & đời sống",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
    desc: "máy tính & laptop",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72_tn",
    desc: "sắc đẹp",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn",
    desc: "máy ảnh & máy quay",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747_tn",
    desc: "sức khỏe",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
    desc: "đồng hồ",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847_tn",
    desc: "giày dép nữ",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
    desc: "giày dép nam",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52_tn",
    desc: "túi ví nữ",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
    desc: "thiết bị điện gia dụng",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e_tn",
    desc: "phụ kiện & trang sức nữ",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
    desc: "thể thao & du lịch",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn",
    desc: "bách hóa online",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
    desc: "ô tô & xe máy & xe đạp",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn",
    desc: "nhà sách online",
  },
];

function renderDirectory() {
  var directoryHTML = "";
  directoryHTML = allDirectoryItems
    .map((val) => {
      return `
    <li class="directory_item-wrap">
    <a href="#">
      <div class="directory_item-wrap-child">
        <div class="directory_item-image-wrap">
          <div class="directory_item-image">
            <div
              class="directory_item-image-fix "
              style="
                background-image: url('${val.img}');
                background-size: contain;
                background-repeat: no-repeat;
                height: 100%;
                "
            ></div>
          </div>
        </div>
        <div class="directory_item-scrip-wrap">
          <div class="directory_item-scrip">
            ${val.desc}
          </div>
        </div>
      </div>
    </a>
  </li>`;
    })
    .join("");
  directorySection.innerHTML = directoryHTML;
}
renderSuggestSearch();
renderBannerBottom();
renderProductSaleLeft();
renderProductSaleRight();
renderDirectory();
