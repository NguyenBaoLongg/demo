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

const directorySection = document.querySelector(".directory_item-list");

renderBannerBottom();
renderProductSaleLeft();
renderProductSaleRight();
