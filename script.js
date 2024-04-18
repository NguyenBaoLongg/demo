// Banner Show
var imagesOfBanner = [
  "./access/image/slider/slider1.jpg",
  "https://cf.shopee.vn/file/vn-50009109-b50873b90e3fe86b43cb609337ffdc16_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-ce6f4ad7ccd1a196121a120e12d04584_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-b50873b90e3fe86b43cb609337ffdc16_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-99b4ae712c5d920ec6151cc9cd4467b3_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-2bb6d8c4d70a75ec5f4945356e9c4b44_xxhdpi",
];

const handleSectionDots = (parentElement, images) => {
  const sectionDots = document.querySelector(`${parentElement} .section-dots`);
  let cnt = 0;
  const dots = images
    .map(() => {
      return `
    <div class="section-dot dot-${cnt++}"></div>
    `;
    })
    .join("");
  if (sectionDots) {
    sectionDots.innerHTML = dots;
    const activeDot = document.querySelector(`${parentElement}  .dot-0`);
    activeDot.classList.add("active");
  }
};

function renderSlideMain() {
  var showBanner = document.querySelector(`.show-slide`);
  const imgOfSlide = imagesOfBanner
    .map((val) => {
      return `
      <li class="show_banner-list-item " >
          <a href="">
            <div class="wrap-item">
                <img src="${val}" alt="" class="img_of_slider">                                                  
            </div>
          </a>
        </li>
    `;
    })
    .join("");
  if (showBanner) {
    showBanner.innerHTML = imgOfSlide;
  }
}

function swiperSlideOfBanner() {
  renderSlideMain();
  handleSectionDots(".start-show_banner", imagesOfBanner);
  const showBanner = document.querySelector(`.show-slide`);
  const btnLeft = document.querySelector(`.icon-more_left`);
  const btnRight = document.querySelector(`.icon-more_right`);
  const imgs = document.querySelectorAll(`.show-slide img`);
  const length = imgs.length;
  let currentSlideIndex = 0;

  const handleChangeSlide = () => {
    if (currentSlideIndex == length - 1) {
      currentSlideIndex = 0;
      width = imgs[0].offsetWidth;
      showBanner.style.transform = `translateX(0px)`;
      document.querySelector(`.active`).classList.remove("active");
      document
        .querySelector(`.dot-${currentSlideIndex}`)
        .classList.add("active");
    } else {
      currentSlideIndex++;
      let width = imgs[0].offsetWidth;
      showBanner.style.transform = `translateX(${
        width * -currentSlideIndex
      }px)`;
      document.querySelector(`.active`).classList.remove("active");
      document
        .querySelector(`.dot-${currentSlideIndex}`)
        .classList.add("active");
    }
  };

  btnRight.addEventListener("click", () => {
    clearInterval(handleEventChangeSlide);
    handleChangeSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
  });

  btnLeft.addEventListener("click", () => {
    clearInterval(handleEventChangeSlide);
    if (currentSlideIndex == 0) {
      currentSlideIndex = length - 1;
      width = imgs[0].offsetWidth;
      showBanner.style.transform = `translateX(${
        width * -1 * currentSlideIndex
      }px)`;
    } else {
      currentSlideIndex--;
      let width = imgs[0].offsetWidth;
      showBanner.style.transform = `translateX(${
        width * -currentSlideIndex
      }px)`;
    }
    handleEventChangeSlide = setInterval(handleChangeSlide, 10000);
  });

  let handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
}

swiperSlideOfBanner();

// count down time
const countDownNumber = document.querySelectorAll(
  ".count-down-time__number-item"
);

formatTime = (num) => {
  return num <= 9 ? "0" + num : num;
};

const now = new Date().getTime();
const maxTime = now + 2 * 60 * 60 * 1000;
let check = setInterval(() => {
  let currentTime = new Date().getTime();
  let distance = maxTime - currentTime;
  if (distance <= 0) {
    clearInterval(check);
    countDownNumber.forEach((num) => {
      num.textContent = 0;
    });
    return;
  }
  let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  let second = Math.floor((distance % (60 * 1000)) / 1000);

  let formatHour = formatTime(hour);
  let formatMinute = formatTime(minute);
  let formatSecond = formatTime(second);

  let timeArray = (formatHour + formatMinute + formatSecond).split("");
  for (let i = 0; i < countDownNumber.length; i++) {
    countDownNumber[i].textContent = timeArray[i];
  }
}, 1000);

//show banner shopee mall

const imagesOfShopeeMall = [
  "https://cf.shopee.vn/file/vn-50009109-63d358b63ab3e8276ceb63a90338ae53",
  "https://cf.shopee.vn/file/vn-50009109-44c3b3ddf43f4db7fd65536f5435682c",
  "https://cf.shopee.vn/file/vn-50009109-aadb2df8bbe5ce4540fe3309ff16148d",
  "https://cf.shopee.vn/file/vn-50009109-05aea49caef33affda793723750a5985",
  "https://cf.shopee.vn/file/vn-50009109-f8c6b54e1d59068994d4c0009cebced1",
];

const bannerShoppeMall = document.querySelector(".home_page_list-item");
function renderOfHomePage() {
  bannerShoppeMall.innerHTML = imagesOfShopeeMall
    .map((val) => {
      return `
      <li class="image_of_banner">
        <div class="item-inner_banner">
            <div>
                <a href="">
                    <img src="${val}" alt="" class="image-banner">
                </a>
            </div>
        </div>
      </li>
      `;
    })
    .join("");
}

function renderSlideOfShopeeMall() {
  renderOfHomePage();
  handleSectionDots(".hmall_content", imagesOfShopeeMall);

  const showBanner = document.querySelector(`.home_page_list-item`);
  const btnLeft = document.querySelector(`.hmall_content .icon-more_left`);
  const btnRight = document.querySelector(`.hmall_content .icon-more_right`);
  const imgs = document.querySelectorAll(`.image-banner`);
  const length = imgs.length;
  let currentSlideIndex = 0;

  const handleChangeSlide = () => {
    if (currentSlideIndex == length - 1) {
      currentSlideIndex = 0;
      width = imgs[0].offsetWidth;
      showBanner.style.transform = `translateX(0px)`;
      document
        .querySelector(`.hmall_content .active`)
        .classList.remove("active");
      document
        .querySelector(`.hmall_content .dot-${currentSlideIndex}`)
        .classList.add("active");
    } else {
      currentSlideIndex++;
      let width = imgs[0].offsetWidth;
      showBanner.style.transform = `translateX(${
        width * -currentSlideIndex
      }px)`;
      document
        .querySelector(`.hmall_content .active`)
        .classList.remove("active");
      document
        .querySelector(`.hmall_content .dot-${currentSlideIndex}`)
        .classList.add("active");
    }
  };

  btnRight.addEventListener("click", () => {
    clearInterval(handleEventChangeSlide);
    handleChangeSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
  });

  btnLeft.addEventListener("click", () => {
    clearInterval(handleEventChangeSlide);
    if (currentSlideIndex == 0) {
      currentSlideIndex = length - 1;
      width = imgs[0].offsetWidth;
      showBanner.style.transform = `translateX(${
        width * -1 * currentSlideIndex
      }px)`;
    } else {
      currentSlideIndex--;
      let width = imgs[0].offsetWidth;
      showBanner.style.transform = `translateX(${
        width * -currentSlideIndex
      }px)`;
    }
    handleEventChangeSlide = setInterval(handleChangeSlide, 10000);
  });

  let handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
}

renderSlideOfShopeeMall();

//render content shopee mall

const brands = [
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-cebfae17cd5979d823fb74ac79a922fa_xhdpi",
    scrip: "mua là có quà",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/be40023a9d9cff397a470460bc7a924d_xhdpi",
    scrip: "deli siêu sale",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-08a87dd1e828b4bef31dafa67d5300ec_xhdpi",
    scrip: "quà mọi đơn",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-06fb832ef52b45481158c26831cc459b_xhdpi",
    scrip: "thời trang -50%",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-e8e0b80b57828bee61eb7e31c3d83765_xhdpi",
    scrip: "giảm đến 50%",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-079ef6ec5c89b6a436c4455226841cd6_xhdpi",
    scrip: "mua là có quà",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2_xhdpi",
    scrip: "ưu đãi đến 50%",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-0be3ac214d6174200ed4f3096a0faa9a_xhdpi",
    scrip: "vourcher 100k",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-b44bb96f2e16efe70badc41661365c8a_xhdpi",
    scrip: "mua 1 tặng 1",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-7ce7d5800afb2b6c80a7242236ec7409_xhdpi",
    scrip: "mua là có quà",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-cba651d4c1f1b46e6fb41b8c44c4cabb_xhdpi",
    scrip: "mua là có quà",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/9ab2f66b65f4f8a3861f22668a380231_xhdpi",
    scrip: "mua là có quà",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-e8e0b80b57828bee61eb7e31c3d83765_xhdpi",
    scrip: "giảm đến 50%",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-5d6b20755f4ef36cf1f73d431c819c9e_xhdpi",
    scrip: "mua là có quà",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/vn-50009109-87186ed98227adab30afbe0f244f49a4_xhdpi",
    scrip: "giảm đến 50%",
  },
  {
    img: "https://down-vn.img.susercontent.com/file/5fb3f7b359a582f322ea39313e10260b_xhdpi",
    scrip: "mua 1 tặng 1",
  },
];

function renderCListBrandShopeeMall() {
  const listBrand = document.querySelector(".list_brand");
  const listBrandHTML = brands
    .map((val) => {
      return `
    <li class="brand_item" style="padding: 0">
      <div class="brand_item_cover">
        <a href="#" class="brand_item_link">
          <div class="brand_item_image_wrap">
            <div class="list_brand_image">
              <div
                class="list_brand_image_fix"
                style="
                  background-image: url('${val.img}');
                  background-repeat: no-repeat;
                  background-size: contain;
                "
              ></div>
            </div>
          </div>
        </a>
        <div class="brand_item_scrip">
          ${val.scrip}
        </div>
      </div>
    </li>
    `;
    })
    .join("");
  listBrand.innerHTML = listBrandHTML;

  const btnLeftBrand = document.querySelector(
    ".hmall_carousel .icon-more_left"
  );
  const btnRightBrand = document.querySelector(
    ".hmall_carousel .icon-more_right"
  );

  let widthBrand = listBrand.offsetWidth;

  btnRightBrand.addEventListener("click", () => {
    listBrand.style.transform = `translateX(${widthBrand * -1}px)`;
    btnLeftBrand.classList.remove("invisible");
    btnRightBrand.classList.add("invisible");
    btnLeftBrand.style.transform = "translateX(calc(-50% + 0px))";
  });

  btnLeftBrand.addEventListener("click", () => {
    listBrand.style.transform = `translateX(0px)`;
    btnRightBrand.classList.remove("invisible");
    btnLeftBrand.classList.add("invisible");
    btnRightBrand.style.transform = "translateX(calc(50% + 0px))";
  });
}

renderCListBrandShopeeMall();

//show procduct

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const allProducts = [
  {
    id: 1,
    src: "https://down-vn.img.susercontent.com/file/e66cc386528d8c5119b59cd20ccacc22_tn",
    percent: 68,
    favourite: true,
    title:
      "Loa bluetooth mini không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH",
    discout: 2,
    decrease: true,
    timeDiscout: " ₫ 63.000 lúc 00:00",
    price: 199000,
    soldProduct: 12000,
  },
  {
    id: 2,
    src: "https://down-vn.img.susercontent.com/file/202cda63239ad682d5a79c9ad74abcc0_tn",
    percent: 52,
    favourite: false,
    title:
      "body mist Xịt Thơm Toàn thân Victoria's Secret Body Mist 250ml Siêu Thơm Cá Tính, Năng Động",
    discout: 0,
    decrease: true,
    timeDiscout: " Flash Sale",
    price: 22000,
    soldProduct: 101000,
  },
  {
    id: 3,
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh004pkew25v98_tn",
    percent: 52,
    favourite: true,
    title: "Túi xách nữ đeo vai đeo chéo kẹp nách thời trang mẫu mới lotiba",
    discout: 0,
    decrease: true,
    timeDiscout: " Flash Sale",
    price: 32000,
    soldProduct: 9400,
  },
  {
    id: 4,
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgyz7g6edhpv4c_tn",
    percent: 34,
    favourite: true,
    title: "DÉP KIỂU NỮ ĐÍNH NƠ DỄ THƯƠNG ĐẾ CAO 5CM [HÀNG LOẠI ĐẸP]",
    discout: 0,
    decrease: true,
    timeDiscout: "",
    price: 79000,
    soldProduct: 369,
  },
  {
    id: 5,
    src: "https://down-vn.img.susercontent.com/file/sg-11134201-7qvdo-lj5gj9fz74qp93_tn",
    percent: 50,
    favourite: true,
    title: "Dù Gấp Tự Động 2 Chiều Luyoo19 24 Xương",
    discout: 0,
    decrease: true,
    timeDiscout: "",
    price: 54000,
    soldProduct: 10900,
  },
  {
    id: 6,
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lllsiotx9dfz92_tn",
    percent: 21,
    favourite: true,
    title:
      "Viên uống bổ sung vitamin C DHC sáng da, mờ thâm, tăng cường đề kháng gói 40 viên (20 ngày) và gói 120 viên (60 ngày)",
    discout: 0,
    decrease: true,
    timeDiscout: "",
    price: 60000,
    soldProduct: 124000,
  },
  {
    id: 7,
    src: "https://down-vn.img.susercontent.com/file/10d37f385351096a02074fa8ca92b1b8_tn",
    percent: 21,
    favourite: true,
    title: "Giày thể thao nam, đi bộ, Siêu êm chân",
    discout: 0,
    decrease: true,
    timeDiscout: "Flash Sale",
    price: 49000,
    soldProduct: 122000,
  },
  {
    id: 8,
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj0g67ofo98y5e_tn",
    percent: 50,
    favourite: true,
    title:
      "Áo thun tay lỡ Nụ Hôn Hades form rộng chất cotton khô, áo phông Sip on Your Lips màu tan cotton 3158 cho nam nữ áo cặp",
    discout: 5,
    decrease: true,
    timeDiscout: "Flash Sale",
    price: 55000,
    soldProduct: 18000,
  },
  {
    id: 9,
    src: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lgyxk3oevsj6e5_tn",
    percent: 50,
    favourite: true,
    title:
      "Máy massage điện thông minh, miếng dán masage xung điện chân, cổ, vai, gáy kèm 10 chế độ rung masage xoa bóp giảm đau",
    discout: 0,
    decrease: true,
    timeDiscout: "",
    price: 35000,
    soldProduct: 36000,
  },
  {
    id: 10,
    src: "https://down-vn.img.susercontent.com/file/7065b387e7c7f5295fa8aa97a1443638_tn",
    percent: 43,
    favourite: true,
    title: "Chuột Không Dây Tự Sạc Siêu Mỏng M1",
    discout: 5,
    decrease: true,
    timeDiscout: "",
    price: 79000,
    soldProduct: 10500,
  },
  {
    id: 11,
    src: "https://down-vn.img.susercontent.com/file/9cc97ad195965d64de53f495087b50a8_tn",
    percent: 28,
    favourite: false,
    title: "Sandal nữ,Giày cao gót nữ đi được 2 kiểu cực xinh",
    discout: 0,
    decrease: true,
    timeDiscout: "₫ 54.000 lúc 00:00",
    price: 199000,
    soldProduct: 12000,
  },
  {
    id: 12,
    src: "https://down-vn.img.susercontent.com/file/sg-11134201-23020-247o89wwohnve3_tn",
    percent: 30,
    favourite: false,
    title:
      "Bộ Ốc chuyển đổi bánh patin từ 1 hàng thành 2 hàng cho trẻ dễ thăng bằng dễ tập đi, ốc chuyển bánh giày patin trẻ em",
    discout: 2,
    decrease: true,
    timeDiscout: "₫ 63.000 lúc 00:00",
    price: 199000,
    soldProduct: 12000,
  },
  {
    id: 13,
    src: "https://down-vn.img.susercontent.com/file/59e1ed69165064ddcb93c060a6840adc_tn",
    percent: 50,
    favourite: true,
    title:
      "Lược gội đầu bằng silicon mát xa da đầu giảm rụng kích thích mọc tóc",
    discout: 0,
    decrease: true,
    timeDiscout: "",
    price: 1000,
    soldProduct: 40000,
  },
  {
    id: 14,
    src: "https://down-vn.img.susercontent.com/file/34969d7b8a92bcb5b6f6010669e5ca28_tn",
    percent: 56,
    favourite: true,
    title: "Dép quai ngang thể thao kẻ nam nữ caro nhiều màu",
    discout: 10,
    decrease: true,
    timeDiscout: "₫ 66.000 lúc 00:00",
    price: 66000,
    soldProduct: 12000,
  },
  {
    id: 15,
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lld2fkxcmxmed7_tn",
    percent: 0,
    favourite: true,
    title: "D[HÀNG THẬT GIÁ TỐT] Máy 13 256g lla",
    discout: 10,
    decrease: true,
    timeDiscout: "₫ 66.000 lúc 00:00",
    price: 1000,
    soldProduct: 12000,
  },
  {
    id: 16,
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0i2li6i3zo90_tn",
    percent: 68,
    favourite: true,
    title: "Hộp 50 Chiếc Tăm Chỉ Nha Khoa VOV.STORE",
    discout: 10,
    decrease: true,
    timeDiscout: "Flash Sale",
    price: 1000,
    soldProduct: 46000,
  },
  {
    id: 17,
    src: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-uqpp5h6xreiv8a_tn",
    percent: 58,
    favourite: true,
    title: "Dép lông con sóc siêu cute xả khokho85k-85k sập giá",
    discout: 0,
    decrease: true,
    timeDiscout: "₫ 72.000 lúc 00:00",
    price: 1000,
    soldProduct: 11000,
  },
  {
    id: 18,
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkoom6ea5fv42f_tn",
    percent: 66,
    favourite: true,
    title:
      "Áo trễ vai dài tay bo gấu điệu đà tiểu thư D39 - Áo sơ mi màu trơn cổ bèo D86",
    discout: 0,
    decrease: true,
    timeDiscout: "",
    price: 50000,
    soldProduct: 388,
  },
];

//render products

const procductsList = document.getElementById("stardust_tabs_list_product");
const renderProducts = (array) => {
  const productsHTML = array
    .map((val) => {
      return `
      <div class="stardust_tabs_product id="${val.id}"">
        <a href="#">
          <div class="stardust_product_wrap">
            <div class="stardust_product">
            <a href="#">
              <div class="pdt_img">
                <img
                  src="${val.src}"
                  alt="picture"
                />

                <div class="stardust_favourite_logo">
                  ${
                    val.favourite
                      ? `<div>
                  <span>Yêu thích</span>
                </div>`
                      : ""
                  }
                </div>
                <div class="discount_percentage_wrapper">
                  <div class="discount_percentage_logo">
                    <span class="percent">${
                      val.percent > 0 ? val.percent : ""
                    }}%</span>
                    <span class="decrease">giảm</span>
                  </div>
                </div>
              </div>

              <div class="stardust_product_content">
                <div class="stardust_product_title">
                  <div class="stardust_product_title">
                    <div class="stardust_product_title_child"
                    > ${val.title}</div>
                  </div>
                  <div class="stardust_product_price">
                    <div class="discout_card_wrapper">
                      ${
                        val.discout > 0
                          ? `<div class="discout_card">
                      Giảm ₫${val.discout}k
                    </div>`
                          : ""
                      }
                    </div>

                    ${
                      val.timeDiscout
                        ? `<div class="time_discount">${val.timeDiscout}</div>`
                        : ""
                    }
                    
                  </div>
                </div>
                <div class="shopee_stardust_sale_wrapper">
                  <div class="shopee_stardust_price">
                    ₫ ${formatNumber(val.price)}
                  </div>
                  <div class="shopee_stardust_sold">
                    Đã bán ${
                      val.soldProduct > 1000
                        ? `${val.soldProduct / 1000}k+`
                        : val.soldProduct
                    }
                  </div>
                </div>
              </div>
            </a>        
              <buttom id="${val.id}" class="add-to-cart-btn">
                Thêm vào giỏ hàng
              </buttom>
            </div>
          </div>
        </a>
      </div>
    `;
    })
    .join("");
  procductsList.innerHTML = productsHTML;
  procductsList.innerHTML += `
  <div class="stardust_tabs_more_bottom">
  <a
    href="#"
    class="stardust_tabs_more_bottom-link"
    style="min-width: 24.375rem"
    >xem thêm</a
  >
</div>
  `;
};

renderProducts(allProducts);

const productsContainer = document.querySelector(".list-products-in-cart");
class ShoppingCart {
  constructor() {
    this.items = [];
    this.cnt = 0;
  }
  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { src, title, price } = product;
    this.items.push(product);
    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[id] || 0) + 1;
    });
    if (totalCountPerProduct[id] === 1) {
      this.cnt++;
    }
    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.querySelector(
      `.product-count-for-id${id}`
    );
    if (this.cnt <= 3) {
      currentProductCount > 1
        ? (currentProductCountSpan.textContent = currentProductCount)
        : (productsContainer.innerHTML += `
        <li class="product-in-cart">
          <div class="item-in-cart">
            <div
              class="item-in-cart_img"
              style="
                background-image: url('${src}');
                background-size: 100%;
                background-repeat: no-repeat;
              "
            ></div>
            <div class="item-in-cart_name">
              ${title}
            </div>
            <div class="product-count-for-id${id} product-count">
            </div>
            <div class="item-in-cart_price">${formatNumber(price)}</div>
          </div>
        </li>
        `);
    }
  }

  getCountProduct() {
    return this.items.length;
  }
}

const amountProduct = document.querySelector(".amount-in-cart p");
amountProduct.textContent = "0 Thêm vào giỏ hàng";
const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");
[...addToCartBtns].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    cart.addItem(Number(event.target.id), allProducts);
    amountProduct.textContent = `${cart.getCountProduct()} Thêm vào giỏ hàng`;
  });
});
