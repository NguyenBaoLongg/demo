//format price
function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

//swiper

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
        sale: 5988,
      },
      {
        img: "/access/image/shopeelive/charge.jpg",
        sale: 90000,
      },
      {
        img: "/access/image/shopeelive/thatlung.jpg",
        sale: 48000,
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
        sale: 40,
      },
      {
        img: "/access/image/shopeelive/vn-11134207-7qukw-livh4fp1sp8yf7.jpg",
        sale: 20,
      },
      {
        img: "/access/image/shopeelive/sg-11134201-22100-3w4yssuf06ivb2.jpg",
        sale: 5,
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
            ${formatNumber(val.sale)}
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
              Giảm đến ${val.sale}%
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

//Flash sale
var flashSaleList = document.querySelector(".flashsell_list");
const allProductsFlashSale = [
  {
    img: "https://down-vn.img.susercontent.com/file/sg-11134201-23010-4s99xpf6vemv08_tn",
    price: 129000,
    statusDescript: "đang bán chạy",
    status: 6,
  },
  {
    img: "https://down-vn.img.susercontent.com/file/805a1beaafdabea9a1cca68d751376fe_tn",
    price: 1359000,
    statusDescript: 9,
    status: 90,
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-eefb01c19317106d4d3bcc4e497b86a5_tn",
    price: "245000",
    statusDescript: "đang bán chạy",
    status: 6,
  },
  {
    img: "https://down-vn.img.susercontent.com/file/793480c24f598832df25cfcb749656e4_tn",
    price: 308000,
    statusDescript: 8,
    status: 80,
  },
  {
    img: "https://down-vn.img.susercontent.com/file/37942ebc3688a75f5baa44abaa2e4780_tn",
    price: 250750,
    statusDescript: 12,
    status: 30,
  },
  {
    img: "https://down-vn.img.susercontent.com/file/a6bd3e205f29a007b85382cee64a6a33_tn",
    price: 159000,
    statusDescript: "đang bán chạy",
    status: 20,
  },
];

function renderFlashSale() {
  var allProductsFlashSaleArray = allProductsFlashSale
    .map((val) => {
      return `
    <li class="flashsell_list-item">
    <div class="flashsell_product">
        <div class="flashsell_image-wrap">
          <div
            class="flashsell_image"
            style="
              background-image: url('${val.img}');
              background-repeat: no-repeat;
              background-size: contain;
            "
          ></div>
        </div>
        <div class="flashsell_product-bottom">
          <div
            class="flashsell_product-bottom_child"
          >
            <div
              class="flashsell_price"
              style="text-decoration: none"
            >
              <div class="flashsell_price_child1">
                <div class="flashsell_price_child2">
                  <span>₫${formatNumber(val.price)}</span>
                </div>
              </div>
            </div>

            <div
              class="flashsell_price_status-wrap"
            >
              <div
                class="flashsell_price_status-amount"
              >
                <div
                  class="flashsell_price_status-scrip"
                  style="text-decoration: none"
                >
                  ${
                    typeof val.statusDescript === "number"
                      ? `Chỉ còn ${val.statusDescript}`
                      : `${val.statusDescript}`
                  }
                </div>
                <div
                  class="flashsell_price_status"
                  style="width: ${val.status}%; height: 16px"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </li>
    `;
    })
    .join("");
  flashSaleList.innerHTML = allProductsFlashSaleArray;
}

//section deal

function rendeSectionDeal() {
  const sectionDeal = document.querySelector(".section_deal");
  const pictureDeal =
    "https://cf.shopee.vn/file/sg-50009109-75effbabbb9736efc3851ae043840dd3";
  sectionDeal.innerHTML = `
  <div class="section_deal_wrap">
  <img src="${pictureDeal}" alt='picture'>
  </div>
  `;
}

const allPictureSlider = [
  "https://cf.shopee.vn/file/vn-50009109-48309bf86a26de2ac33a09d13ef9fead",
  "https://cf.shopee.vn/file/vn-50009109-d994c4f1a4ac064180d80772112e8afa",
  "https://cf.shopee.vn/file/vn-50009109-41e0fc4b6efa45721a8c296cc39e6769",
  "https://cf.shopee.vn/file/vn-50009109-7660ed963d3fa5a922dcd088648d64ac",
];

function renderTopSearchProduct() {
  const allProductTopSarch = [
    {
      img: "https://down-vn.img.susercontent.com/file/5ddbc585b7e9eaf10430c968f7a7d787",
      amount: 126000,
      nameProduct: "gập bẻ tập cơ tay",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/8e78019372e7c63a5c2f372d35532e56",
      amount: 129000,
      nameProduct: "balo thời trang",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/dc04a555685a9720d9da6655217a224f",
      amount: 60000,
      nameProduct: "bình giữ nhiệt",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/309e98d0c002c62b867a00bc639bdbae",
      amount: 69000,
      nameProduct: "bộ chăn ga gối cotton",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/461ccdf88d457131aaa7edef87613193",
      amount: 63000,
      nameProduct: "vòng đeo tay hợp kim",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/fad24d1b5caab802481090b9be5a5efa",
      amount: 69000,
      nameProduct: "ruột sổ còng",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/fad24d1b5caab802481090b9be5a5efa",
      amount: 69000,
      nameProduct: "ruột sổ còng",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/6d1416daa515aaf1a3c1b6c5fc47e07b",
      amount: 173000,
      nameProduct: "Ốp lưng Iphone",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/ea3c6a73cbd32bddb8323c14b837b4de",
      amount: 103000,
      nameProduct: "Bút mực Gel",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/af40edba655e36fd80f6b7da6e7dc41c",
      amount: 119000,
      nameProduct: "Áo thun",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/e3568f284358e6f5c46223036e54ef84",
      amount: 166000,
      nameProduct: "Bông Tẩy Trang 3 Lớp Cotton Pads",
    },
    {
      img: "https://down-vn.img.susercontent.com/file/30a8c88309e8f1c95f0f32fd3e368bb5",
      amount: 118000,
      nameProduct: "Giấy Ăn Gấu Trúc Sipiao",
    },
  ];
  const topSearcProductList = document.querySelector(".ts_content_list");
  const productsTopSarch = allProductTopSarch
    .map((val) => {
      return `
    <div class="ts_item_wrap swiper-slide">
      <a href="#" class="ts_link">
        <div class="ts_item">
          <div class="logo_top"></div>
          <div
            class="ts_image_wrap"
            style="
              background-image: url('${val.img}');
              background-size: contain;
              background-repeat: no-repeat;
            "
          >
            <div class="ts_image"></div>
            <div class="ts_image_scrip">
              bán ${
                val.amount >= 1000 ? `${val.amount / 1000}k+` : `${val.amount}`
              } /tháng
            </div>
          </div>
        </div>
        <div class="ts_nameproduct">${val.nameProduct}</div>
      </a>
    </div>
    `;
    })
    .join("");
  topSearcProductList.innerHTML = productsTopSarch;
}
renderSuggestSearch();
renderBannerBottom();
renderProductSaleLeft();
renderProductSaleRight();
renderDirectory();
renderFlashSale();
rendeSectionDeal();
renderTopSearchProduct();
