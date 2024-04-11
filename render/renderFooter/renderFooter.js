const footerDirectory = document.querySelector(".footer_directory");
const footerDirectoryItems = [
  [
    {
      header: "thời trang nam ",
      items: [
        "Áo khoác",
        "Áo vest & Blazer",
        "Áo Hoodie,Áo Len & áo nỉ",
        "quần jean",
        "quần dài/quần âu",
        "quần short",
        "áo",
        "áo ba lỗ",
        "đồ lót",
        "đồ ngủ",
        "đồ bộ",
        "vớ/tất",
        "trang phục truyền thống",
        "đồ hóa trang",
        "trang phục ngành nghề",
        "khác",
        "trang súc nam",
        "kính mắt nam",
      ],
    },
    {
      header: "nhà cửa và đời sống",
      items: [
        "Chăn, Ga, Gối & Nệm",
        "Đồ nội thất",
        "Trang trí nhà cửa",
        "dụng cụ & thiết bị tiện ích",
        "đồ dùng nhà bếp và hộp đựng thực phẩm",
        "đèn",
      ],
    },
    {
      header: "đồng hồ ",
      items: [
        "đồng hồ nam",
        "đồng hồ nữ",
        "bộ đồng hồ & đồng hồ cặp",
        "đồng hồ trẻ em",
        "phụ kiện đồng hồ",
        "khác",
      ],
    },
    {
      header: "phụ kiện & trang sức nữ",
      items: [
        "Nhẫn",
        "bông tai",
        "khăn choàng",
        "găng tay",
        "phụ kiện tóc",
        "vòng tay & lắc tay",
        "lắc chân",
        "mũ",
        "khác",
      ],
    },
  ],
  [
    {
      header: "thời trang nữ",
      items: [
        "quần",
        "quần đùi",
        "chân váy",
        "quần jeans",
        "váy cưới",
        "đồ liền thân",
        "đồ lót",
        "đồ ngủ",
        "bộ",
        "khác",
      ],
    },
    {
      header: "máy tính & laptop",
      items: [
        "máy tính bàn",
        "màn hình",
        "linh kiện máy tính",
        "thiết bị lưu trữ",
        "thiết bị mạng",
        "máy in,máy scan & máy chiếu",
        "phụ kiện máy tính",
        "laptop",
        "khác",
      ],
    },
    {
      header: "giày dép nữ",
      items: [
        "bốt",
        "giày thể thao",
        "giày đế bằng",
        "giày cao gót",
        "giày đế xuồng",
        "xăng -đan và dép",
        "giày khác",
      ],
    },
    {
      header: "thể thao & du lịch",
      items: [
        "vali",
        "túi du lịch",
        "phụ kiện du lịch",
        "dụng cụ thể thao & dã ngoại",
        "giày thể thao",
        "thời trang thể thao & dã ngoại",
        "khác",
      ],
    },
  ],
  [
    {
      header: "điện thoại & phụ kiện",
      items: [
        "điện thoại",
        "máy tính bảng",
        "pin dự phòng",
        "bảo vệ màn hình",
        "đế giữ điện thoại",
        "sim",
        "phụ kiện khác",
        "điện thoại khác",
      ],
    },
    {
      header: "sắc dẹp",
      items: [
        "chăm sóc da mặt",
        "trang điểm",
        "chăm sóc tóc",
        "vệ sinh răng miệng",
        "nước hoa",
        "chăm sóc nam giới",
        "khác",
      ],
    },
    {
      header: "bách hóa online",
      items: [
        "đồ ăn vặt",
        "đồ chế biến sẵn",
        "nhu yếu phẩm",
        "nguyên liệu nấu ăn",
        "đồ làm bánh",
        "các loại bánh",
        "đồ uống có cồn",
        "bộ quà tặng",
        "khác",
      ],
    },
  ],
  [
    {
      header: "mẹ & bé",
      items: [
        "đồ dùng du lịch cho bé",
        "đồ dùng ăn dặm cho bé",
        "phụ kiện cho mẹ",
        "chăm sóc sức khỏe mẹ",
        "đồ dùng phòng ngủ cho bé",
        "an toàn cho bé",
      ],
    },
    {
      header: "máy ảnh-- máy quay phim",
      items: [
        "camera giám sát & camẻa hệ thống",
        "thẻ nhớ",
        "ống kính",
        "phụ kiện máy ảnh",
        "máy bay camẻa & phụ kiện",
      ],
    },
  ],
  [
    {
      header: "thiết bị điện tử",
      items: [
        "thiết bị đeo thông minh",
        "phụ kiện tivi",
        "máy game console",
        "đĩa game",
        "link phụ kiện",
        "đĩa game",
        "link phụ kiện",
      ],
    },
    {
      header: "sức khỏe",
      items: [
        "vật tư ý tế",
        "tã người lớn",
        "thực phẩm chức năng",
        "hỗ trợ làm đẹp",
        "hỗ trựo người dùng",
      ],
    },
  ],
];

//render most search

function renderMostSearch() {
  var footerDirectoryHTML = `
<div class="footer_directory_header">danh mục</div>
<div class="footer_director_list">
`;
  for (let i = 0; i < footerDirectoryItems.length; i++) {
    footerDirectoryHTML += `<div class="footer_director_list-item_wrapper">`;
    for (let j = 0; j < footerDirectoryItems[i].length; j++) {
      footerDirectoryHTML += `
    <div class="footer_director_list-item">
        <div class="header_footer_director">
            <a href="#" class="footer_direction_link">${footerDirectoryItems[i][j].header} </a>
        </div>
        <div class="footer_director_content">
    `;
      footerDirectoryItems[i][j].items.map((val) => {
        footerDirectoryHTML += `
        <div>
        <a href="#">${val}</a>
        </div>
        <span>&nbsp; |&nbsp; </span>
        `;
      });
      footerDirectoryHTML += `
        </div>
    </div>
    `;
    }
    footerDirectoryHTML += `</div>`;
  }
  footerDirectoryHTML += `</div>`;
  footerDirectory.innerHTML = footerDirectoryHTML;
}

// footer script

const footerScript = document.querySelector(".footer");
const footerScriptList = [
  {
    header: "SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE",
    content: `Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu ở Đông Nam Á, có trụ sở chính ở Singapore, đã có mặt ở khắp các khu vực Singapore, Malaysia, Indonesia, Thái Lan, Philippines, Đài Loan, Brazil, México & Colombia. Với sự đảm bảo của Shopee, bạn sẽ mua hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!`,
  },
  {
    header: "MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN",
    content: `Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì Shopee.vn là một sự lựa chọn tuyệt vời dành cho bạn. Shopee là trang thương mại điện tử cho phép người mua và người bán tương tác và trao đổi dễ dàng thông tin về sản phẩm và chương trình khuyến mãi của shop. Do đó, việc mua bán trên Shopee trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy tín, Shopee Mall chính là sự lựa chọn lí tưởng dành cho bạn. Để bạn có thể dễ dàng khi tìm hiểu và sử dụng sản phẩm, sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời trang, review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá tốt bất ngờ`,
  },
  {
    header: "TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI",
    content: `Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng mọi lúc, mọi nơi. Bạn có thể tải ứng dụng Shopee cũng như đăng sản phẩm bán hàng một cách nhanh chóng và tiện lợi. Ngoài ra, ứng dụng Shopee còn có những ưu điểm sau:
    Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được ngay những sản phẩm nổi bật cũng như dễ dàng tìm đến các ô tìm kiếm, giỏ hàng hoặc tính năng chat liền tay.
    Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi trên cùng một tài khoản. Bạn sẽ vừa là người mua hàng, vừa là người bán hàng rất linh hoạt, dễ dàng.`,
  },
];

const topFooterBrandContent = [
  {
    header: "TOP THƯƠNG HIỆU NỔI BẬT",
    brands: [
      "Philips",
      "Deema",
      "Kappa",
      "Juno",
      "Converse",
      "Owen",
      "Pedro",
      "New Balance",
      "adidas",
      "Samsung",
      "Sunhouse",
      "Oreo",
      "PUMA",
      "Kindel",
      "DHC",
      "Martidem",
      "Transino",
      "Kitkat",
      "Teelab",
      "Elise",
      "YODY",
    ],
  },
  {
    header: "TOP TỪ KHÓA XU HƯỚNG",
    brands: [
      "gấu bông",
      "bút",
      "gấu dâu",
      "omega complex",
      "lớp học gia đình",
      "truyện tranh",
      "tô tượng",
      "mykingdom",
      "giày bata",
      "dép quai hậu",
      "yame",
      "hoa",
      "kuromi",
      "sim số đẹp",
      "pandora",
      "bánh trung thu",
      "móng tay đẹp",
      "gundam",
      "xe đạp trẻ em",
      "sticker",
    ],
  },
];

function renderFooterDirectory() {
  var footerScriptHTML = "";
  footerScriptList.map((val) => {
    footerScriptHTML += `
    <h1 class="footer_heading">
    ${val.header}
  </h1>
  <p class="footer_content">
   ${val.content}
  </p>
  <br />
    `;
  });
  footerScriptHTML += `<div class="top-featured-brand"></div>`;
  footerScript.innerHTML = footerScriptHTML;
}
renderFooterDirectory();
const topFooterBrand = document.querySelector(".top-featured-brand");
renderFooterFeaturedBrand();

function renderFooterFeaturedBrand() {
  var footerFeaturedBrandHTML = "";
  for (let i = 0; i < topFooterBrandContent.length; i++) {
    footerFeaturedBrandHTML += `
        <h2 class="footer_heading">${topFooterBrandContent[i].header}</h2>
        <p class="footer_content">
        <span class="footer_list_brand">
        `;
    topFooterBrandContent[i].brands.map((val) => {
      footerFeaturedBrandHTML += `
        <u class="footer_brand"
        ><a href="#"><span>${val}</span></a></u>
        <span style="color: #000000">&nbsp; |&nbsp; </span>
        `;
    });
    footerFeaturedBrandHTML += `
        </span>
    </p>
    <br />
    `;
  }
  topFooterBrand.innerHTML = footerFeaturedBrandHTML;
}

//footer info
const footerInfo = document.querySelector(".footer_info-width");
const allFooterInfo = [
  [
    {
      head: "chăm sóc khách hàng",
      contents: [
        "trung tâm trợ giúp",
        "shopee blog",
        "shopee mall",
        "hướng dẫn mua hàng",
        "hướng dẫn bán hàng",
        "thanh toán",
        "shopee xu",
        "vận chuyển",
        "trả hàng & hoàn tiền",
        "chăm sóc khách hàng",
        "chính sách bảo hành",
      ],
      text: false,
    },
  ],
  [
    {
      head: "về shopee",
      contents: [
        "giới thiệu về shopee việt nam",
        "tuyển dụng",
        "điều khoản Shopee",
        "chính sách bảo mật",
        "chính hãngg",
        "kênh người bán",
        "flash sales",
        "vận chuyển",
        "chương trình tiếp thị liên kết shopee",
        "liên hệ với truyền thông",
      ],
      text: false,
    },
  ],
  [
    {
      head: "thanh toán",
      contents: [
        "https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8",
        "https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16",
        "https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08",
        "https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c",
        "https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281",
        "https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09",
        "https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06",
        "https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492",
      ],
      text: false,
    },
  ],
  [
    {
      head: "theo dõi chúng tôi trên",
      contents: [
        "https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5",
        "https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91",
        "https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a",
      ],
      text: ["facebook", "instagram", "linkedln"],
    },
  ],
];
const allLinkDowload = [
  {
    head: "tải ứng dụng shopee ngay thôi",
    content: {
      mainPicture: ["./access/image/qrcode.png"],
      secondPicture: [
        "./access/image/applestore.png",
        "./access/image/chplay.png",
        "./access/image/appgalley.png",
      ],
    },
  },
];

function renderFooterInfo() {
  var footerInfoContentHTML = "";
  var footerInfoHTML = "";
  for (let i = 0; i < allFooterInfo.length; i++) {
    for (let j = 0; j < allFooterInfo[i].length; j++) {
      if (i >= 2) {
        footerInfoContentHTML = "";
        for (let g = 0; g < allFooterInfo[i][j].contents.length; g++) {
          footerInfoContentHTML += `
          <li>
          <img
            src="${allFooterInfo[i][j].contents[g]}"
            alt="picture"
            class="footer_icon"
          />
          <span class="footer_info-content_link_text">${
            allFooterInfo[i][j].text ? allFooterInfo[i][j].text[g] : ""
          }</span>

        </li>
          `;
        }
      } else {
        footerInfoContentHTML = allFooterInfo[i][j].contents
          .map((val) => {
            return `
        <li>
          <a href="#">${val}</a>
        </li>`;
          })
          .join("");
      }

      footerInfoHTML += `
        <div class="footer_info-item">
          <div class="footer_info-header">${allFooterInfo[i][j].head}</div>
          <div class="footer_info-content">
          <ul>
          ${footerInfoContentHTML}
          </ul>
          </div>
        </div>
        `;
    }
  }

  for (let z = 0; z < allLinkDowload.length; z++) {
    var footerInfoPicture = allLinkDowload[z].content.secondPicture
      .map((val) => {
        return `<img src="${val}" alt="picture" />`;
      })
      .join("");

    footerInfoHTML += `
        <div class="footer_info-item">
        <div class="footer_info-header">
          ${allLinkDowload[z].head}
        </div>
        <div class="footer_info-content">
          <div class="footer_info_app">
            <div class="footer_info_app-child">
              <img src="${allLinkDowload[z].content.mainPicture}" alt="picture" />
            </div>
            <div class="footer_info_app-child">
              ${footerInfoPicture}
            </div>
          </div>
        </div>
      </div>
        `;
  }
  footerInfo.innerHTML = footerInfoHTML;
}
renderFooterDirectory();
renderMostSearch();
renderFooterInfo();
