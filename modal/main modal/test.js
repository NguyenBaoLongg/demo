// show modal
const modalRegister = document.getElementById("modal-register");
const modalLogin = document.getElementById("modal-login");
const btnLogin = document.querySelector(".btn-login");
const btnRegister = document.querySelector(".btn-register");
const btnBackRegister = document.querySelector("#modal-register .back");
const btnBackLogin = document.querySelector("#modal-login .back");

btnRegister.addEventListener("click", () => {
  renderRegister();
});

btnLogin.addEventListener("click", () => {
  renderLogin();
});

function renderRegister() {
  var registerHTML = `
  <div class="modal_overlay"></div>
  <div class="modal_body">
    <!--Register form-->
    <form action="" method="post" id="form-1" class="form">
      <div class="register">
        <div class="auth-form_exit">
          <div><i class="fa-solid fa-xmark icon-xmark"></i></div>
        </div>
        <div class="auth-form_container">
          <div class="auth-form_header">
            <h3 class="auth-form_heading">Đăng ký</h3>
            <span class="switch-btn_auth">Đăng nhập</span>
          </div>
  
          <div class="auth-form_form">
            <div class="auth-form_gr">
              <label for="email1" class="form-label"></label>
              <input
                type="text"
                name="email1"
                id="email1"
                class="auth-form_input"
                placeholder="Email của bạn"
              />
              <span class="form-message"></span>
            </div>
            <div class="auth-form_gr">
              <label for="password1" class="form-label"></label>
              <input
                type="password"
                name="password1"
                id="password1"
                class="auth-form_input"
                placeholder="Mật khẩu của bạn"
              />
              <span class="form-message"></span>
            </div>
            <div class="auth-form_gr">
              <label for="password-confirm" class="form-label"></label>
              <input
                type="password"
                id="password-confirm"
                name="password-confirm"
                class="auth-form_input"
                placeholder="Nhập lại mật khẩu của bạn"
              />
              <span class="form-message"></span>
            </div>
          </div>
  
          <div class="auth-form_aside">
            <p>
              Bằng việc đăng kí, bạn đã đồng ý với shopee về
              <a href="">điều khoản dịch vụ</a> &
              <a href="">Chính sách bảo mật</a>
            </p>
          </div>
  
          <div class="auth-form_controls">
            <button class="btn back">Trở lại</button>
            <button class="btn btn-primary">Đăng kí</button>
          </div>
        </div>
  
        <div class="auth-form_sociaty">
          <a href="" class="btn-icon btn-icon_size btn-facebook">
            <i class="bx bxl-facebook-circle icon-facebook"></i>
            <span>Kết nối với facebook</span>
          </a>
          <a href="" class="btn-icon btn-icon_size btn-gg">
            <i class="fa-brands fa-google icon-gg"></i>
            <span>Kết nối với Google</span>
          </a>
        </div>
      </div>
    </form>
  </div>
  `;
  modalRegister.innerHTML = registerHTML;
  modalRegister.style.pointerEvents = "all";

  //validator
  Validator({
    form: "#form-1",
    formGroupSelector: ".auth-form_gr",
    errorSelector: ".form-message",
    rules: [
      Validator.isRequired("#email1", "Vui long nhap email"),
      Validator.isEmail("#email1"),
      Validator.minLength("#password1", 6),
      Validator.isRequired("#password-confirm"),
      Validator.isConfirm(
        "#password-confirm",
        function () {
          return document.querySelector("#form-1 #password1").value;
        },
        "Mật khẩu nhập lại không chính xác"
      ),
    ],
    onSubmit: function (data) {
      console.log(data);
    },
  });

  const exitModalRegister = document.querySelector(".icon-xmark");
  const formRegister = document.querySelector(".register");

  exitModalRegister.addEventListener("click", () => {
    modalRegister.innerHTML = "";
    modalRegister.style.pointerEvents = "none";
  });

  modalRegister.addEventListener("click", (e) => {
    if (!formRegister.contains(e.target)) {
      exitModalRegister.click();
    }
  });
}

function renderLogin() {
  var loginHTML = `
  <div class="modal_overlay"></div>
  <div class="modal_body">
    
    <form action="" id="form-2" class="form" method="post">
      <div class="login">
        <div class="auth-form_exit">
          <div><i class="fa-solid fa-xmark icon-xmark_login"></i></div>
        </div>
        <div class="auth-form_container">
          <div class="auth-form_header">
            <h3 class="auth-form_heading">Đăng nhập</h3>
            <span class="switch-btn_auth">Đăng ký</span>
          </div>

          <div class="auth-form_form">
            <div class="auth-form_gr">
              <label for="email2" class="form-label"></label>
              <input
                type="text"
                name="email2"
                id="email2"
                class="auth-form_input"
                placeholder="Email của bạn"
              />
              <span class="form-message"></span>
            </div>
            <div class="auth-form_gr">
              <label for="password2" class="form-label"></label>
              <input
                type="password"
                name="password2"
                id="password2"
                class="auth-form_input"
                placeholder="Mật khẩu của bạn"
              />
              <span class="form-message"></span>
            </div>
          </div>

          <div class="auth-form_aside">
            <div class="auth-form_help">
              <a href="">Quên mật khẩu</a>
              <span class="separate"></span>
              <a href="" class="text_need-help">Cần trợ giúp ?</a>
            </div>
          </div>

          <div class="auth-form_controls">
            <button class="btn back">Trở lại</button>
            <button class="btn btn-primary">Đăng nhập</button>
          </div>
        </div>

        <div class="auth-form_sociaty">
          <a href="" class="btn-icon btn-icon_size btn-facebook">
            <i class="bx bxl-facebook-circle icon-facebook"></i>
            <span>Đăng nhập facebook</span>
          </a>
          <a href="" class="btn-icon btn-icon_size btn-gg">
            <i class="fa-brands fa-google icon-gg"></i>
            <span>Đăng nhập Google</span>
          </a>
        </div>
      </div>
    </form>
  </div>
  `;
  modalLogin.innerHTML = loginHTML;
  modalLogin.style.pointerEvents = "all";

  //validator

  Validator({
    form: "#form-2",
    formGroupSelector: ".auth-form_gr",
    errorSelector: ".form-message",
    rules: [
      Validator.isRequired("#email2", "Vui long nhap email"),
      Validator.isEmail("#email2"),
      Validator.minLength("#password2", 6),
    ],
    onSubmit: function (data) {
      console.log(data);
    },
  });

  const exitModalLogin = document.querySelector(".icon-xmark_login");
  const formLogin = document.querySelector(".login");

  exitModalLogin.addEventListener("click", () => {
    modalLogin.innerHTML = "";
    modalLogin.style.pointerEvents = "none";
  });

  modalLogin.addEventListener("click", (e) => {
    if (!formLogin.contains(e.target)) {
      exitModalLogin.click();
    }
  });
}

/*Validator */
function Validator(options) {
  var selectorRules = {};

  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  function validate(inputElement, rule) {
    var errorMessage;
    var errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);

    var rules = selectorRules[rule.selector];
    for (var i = 0; i < rules.length; i++) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, options.formGroupSelector).classList.add(
        "invalid"
      );
    } else {
      errorElement.innerText = "";
      getParent(inputElement, options.formGroupSelector).classList.remove(
        "invalid"
      );
    }
    return !errorMessage;
  }

  var formElement = document.querySelector(options.form);
  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid = true;
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });
      if (isFormValid) {
        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll("[name]");
          var formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            values[input.name] = input.value;
            return values;
          },
          {});
          options.onSubmit(formValues);
        } else {
        }
      }
    };

    options.rules.forEach(function (rule) {
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        inputElement.onblur = function () {
          //value: inputElement.value
          // test: inputElement.test
          validate(inputElement, rule);
        };
      }
    });
  }
}

Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : message || "Vui long nhap truong nay";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "Vui long nhap truong nay";
    },
  };
};

Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min ? undefined : `Toi thieu ${min} ki tu`;
    },
  };
};

Validator.isConfirm = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue() ? undefined : message;
    },
  };
};
