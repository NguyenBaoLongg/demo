// slide show
const images = [
  "./access/image/slider/slider1.jpg",
  "./access/image/slider/slider2.jpg",
  "./access/image/slider/slider3.jpg",
];

let index = 0;
let transitionDelay = 2000;
const sildeContainer = document.querySelector(".img_first");
const slides = document.querySelectorAll(".img_of_slider");

slides.forEach((slide) => {
  slide.style.transition = `all ${transitionDelay / 1000}s linear`;
});

showSlide(index);

function showSlide(slideNumber) {
  const imageSource = images[slideNumber];
  slides.forEach((slide, i) => {
    slide.src = imageSource;
    slide.style.display = i == slideNumber ? "block" : "none";
  });
  index = (index + 1) % images.length;
}

setInterval(() => showSlide(index), transitionDelay);

//show procduct

const allProducts = [
  {
    src: "https://down-vn.img.susercontent.com/file/e66cc386528d8c5119b59cd20ccacc22_tn",
    percent: 68,
    favourite: true,
    title:
      "Loa bluetooth mini không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH",
    discout: 2,
    decrease: true,
    timeDiscout: " ₫ 63.000 lúc 00:00",
    price: 199,
    soldProduct: 12000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/202cda63239ad682d5a79c9ad74abcc0_tn",
    percent: 52,
    favourite: false,
    title:
      "body mist Xịt Thơm Toàn thân Victoria's Secret Body Mist 250ml Siêu Thơm Cá Tính, Năng Động",
    discout: 0,
    decrease: true,
    timeDiscout: " Flash Sale",
    price: 22,
    soldProduct: 101000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh004pkew25v98_tn",
    percent: 52,
    favourite: true,
    title: "Túi xách nữ đeo vai đeo chéo kẹp nách thời trang mẫu mới lotiba",
    discout: 0,
    decrease: true,
    timeDiscout: " Flash Sale",
    price: 32,
    soldProduct: 9400,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgyz7g6edhpv4c_tn",
    percent: 34,
    favourite: true,
    title: "DÉP KIỂU NỮ ĐÍNH NƠ DỄ THƯƠNG ĐẾ CAO 5CM [HÀNG LOẠI ĐẸP]",
    discout: 0,
    decrease: true,
    timeDiscout: "",
    price: 79,
    soldProduct: 369,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/sg-11134201-7qvdo-lj5gj9fz74qp93_tn",
    percent: 50,
    favourite: true,
    title: "Dù Gấp Tự Động 2 Chiều Luyoo19 24 Xương",
    discout: 0,
    decrease: true,
    timeDiscout: "",
    price: 54,
    soldProduct: 10900,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lllsiotx9dfz92_tn",
    percent: 21,
    favourite: true,
    title:
      "Viên uống bổ sung vitamin C DHC sáng da, mờ thâm, tăng cường đề kháng gói 40 viên (20 ngày) và gói 120 viên (60 ngày)",
    discout: 0,
    decrease: true,
    timeDiscout: "",
    price: 60,
    soldProduct: 124000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/10d37f385351096a02074fa8ca92b1b8_tn",
    percent: 21,
    favourite: true,
    title: "Giày thể thao nam, đi bộ, Siêu êm chân",
    discout: 0,
    decrease: true,
    timeDiscout: "Flash Sale",
    price: 49,
    soldProduct: 122000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj0g67ofo98y5e_tn",
    percent: 50,
    favourite: true,
    title:
      "Áo thun tay lỡ Nụ Hôn Hades form rộng chất cotton khô, áo phông Sip on Your Lips màu tan cotton 3158 cho nam nữ áo cặp",
    discout: 5,
    decrease: true,
    timeDiscout: "Flash Sale",
    price: 55,
    soldProduct: 18000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lgyxk3oevsj6e5_tn",
    percent: 50,
    favourite: true,
    title:
      "Máy massage điện thông minh, miếng dán masage xung điện chân, cổ, vai, gáy kèm 10 chế độ rung masage xoa bóp giảm đau",
    discout: 0,
    decrease: true,
    timeDiscout: "",
    price: 35,
    soldProduct: 36000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/7065b387e7c7f5295fa8aa97a1443638_tn",
    percent: 43,
    favourite: true,
    title: "Chuột Không Dây Tự Sạc Siêu Mỏng M1",
    discout: 5,
    decrease: true,
    timeDiscout: "",
    price: 79,
    soldProduct: 10500,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/9cc97ad195965d64de53f495087b50a8_tn",
    percent: 28,
    favourite: false,
    title: "Sandal nữ,Giày cao gót nữ đi được 2 kiểu cực xinh",
    discout: 0,
    decrease: true,
    timeDiscout: "₫ 54.000 lúc 00:00",
    price: 199,
    soldProduct: 12000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/sg-11134201-23020-247o89wwohnve3_tn",
    percent: 30,
    favourite: false,
    title:
      "Bộ Ốc chuyển đổi bánh patin từ 1 hàng thành 2 hàng cho trẻ dễ thăng bằng dễ tập đi, ốc chuyển bánh giày patin trẻ em",
    discout: 2,
    decrease: true,
    timeDiscout: "₫ 63.000 lúc 00:00",
    price: 199,
    soldProduct: 12000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/59e1ed69165064ddcb93c060a6840adc_tn",
    percent: 50,
    favourite: true,
    title:
      "Lược gội đầu bằng silicon mát xa da đầu giảm rụng kích thích mọc tóc",
    discout: 0,
    decrease: true,
    timeDiscout: "",
    price: 1,
    soldProduct: 40000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/34969d7b8a92bcb5b6f6010669e5ca28_tn",
    percent: 56,
    favourite: true,
    title: "Dép quai ngang thể thao kẻ nam nữ caro nhiều màu",
    discout: 10,
    decrease: true,
    timeDiscout: "₫ 66.000 lúc 00:00",
    price: 66,
    soldProduct: 12000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lld2fkxcmxmed7_tn",
    percent: 0,
    favourite: true,
    title: "D[HÀNG THẬT GIÁ TỐT] Máy 13 256g lla",
    discout: 10,
    decrease: true,
    timeDiscout: "₫ 66.000 lúc 00:00",
    price: 1,
    soldProduct: 12000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0i2li6i3zo90_tn",
    percent: 68,
    favourite: true,
    title: "Hộp 50 Chiếc Tăm Chỉ Nha Khoa VOV.STORE",
    discout: 10,
    decrease: true,
    timeDiscout: "Flash Sale",
    price: 1,
    soldProduct: 46000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-uqpp5h6xreiv8a_tn",
    percent: 58,
    favourite: true,
    title: "Dép lông con sóc siêu cute xả khokho85k-85k sập giá",
    discout: 0,
    decrease: true,
    timeDiscout: "₫ 72.000 lúc 00:00",
    price: 1,
    soldProduct: 11000,
  },
  {
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkoom6ea5fv42f_tn",
    percent: 66,
    favourite: true,
    title:
      "Áo trễ vai dài tay bo gấu điệu đà tiểu thư D39 - Áo sơ mi màu trơn cổ bèo D86",
    discout: 0,
    decrease: true,
    timeDiscout: "",
    price: 50,
    soldProduct: 388,
  },
];

//render products

const procductsList = document.getElementById("stardust_tabs_list_product");
const renderProducts = (array) => {
  const productsHTML = array
    .map((val) => {
      return `
      <div class="stardust_tabs_product">
        <a href="#">
          <div class="stardust_product_wrap">
            <div class="stardust_product">
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
                    ₫ ${val.price}.000
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

              <div class="shopee_card_hover_bottom">
                Tìm kiếm sản phẩm tương tự
              </div>
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
