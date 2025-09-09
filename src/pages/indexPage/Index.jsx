import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./index.css";

function Index() {
  const [showModal, setShowModal] = useState(false);
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    // show password toggle
    const handleShowPass = () => {
      document.querySelectorAll(".show-pass").forEach((el) => {
        el.addEventListener("click", () => {
          el.classList.toggle("active");
          const field = document.querySelector(".password-field");
          if (field) {
            field.type = field.type === "password" ? "text" : "password";
          }
        });
      });

      document.querySelectorAll(".show-pass2").forEach((el) => {
        el.addEventListener("click", () => {
          el.classList.toggle("active");
          const field2 = document.querySelector(".password-field2");
          if (field2) {
            field2.type = field2.type === "password" ? "text" : "password";
          }
        });
      });
    };

    // OTP input
    const handleOtpInput = () => {
      document.querySelectorAll(".digit-group input").forEach((input) => {
        input.maxLength = 1;
        input.addEventListener("keyup", (e) => {
          const parent = input.parentElement;
          const val = input.value;

          if (e.key === "Backspace" || e.key === "ArrowLeft") {
            const prev = parent.querySelector(`#${input.dataset.previous}`);
            if (prev) prev.select();
          } else if (
            (val && !isNaN(val)) &&
            ["ArrowRight"].includes(e.key) || (val && e.key.length === 1)
          ) {
            const next = parent.querySelector(`#${input.dataset.next}`);
            if (next) next.select();
            else if (parent.dataset.autosubmit) parent.submit();
          } else if (isNaN(val)) {
            input.value = "";
          }
        });
      });
    };

    // Clear item
    const handleClearItem = () => {
      document.querySelectorAll(".del-item").forEach((el) => {
        el.addEventListener("click", () => {
          const parent = el.closest(".list-favorite");
          if (parent) parent.style.display = "none";
        });
      });
    };

    // Back page
    const handleBackPage = () => {
      document.querySelectorAll(".back-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          window.history.go(-1);
        });
      });
    };

    // Press toggles
    const handlePressToggle = () => {
      document.querySelectorAll(".press-toggle").forEach((el) => {
        el.addEventListener("click", () => el.classList.toggle("active"));
      });
    };

    // Clear input
    const handleClearInput = () => {
      document.querySelectorAll(".icon-close").forEach((el) => {
        el.addEventListener("click", () => {
          document.querySelectorAll(".clear-ip").forEach((input) => (input.value = ""));
        });
      });
    };

    // Preloader
    const handlePreloader = () => {
      setTimeout(() => {
        const preload = document.querySelector(".preload");
        if (preload) preload.style.display = "none";
      }, 500);
    };

    // Initialize all
    handleShowPass();
    handleOtpInput();
    handleClearItem();
    handleBackPage();
    handlePressToggle();
    handleClearInput();
    handlePreloader();
  }, []);

  return (
    <div>
      {/* Preloader */}
      <div className="preload preload-container">
        <div
          className="preload-logo"
          style={{ backgroundImage: "url('/images/logo/144.png')" }}
        >
          <div className="spinner"></div>
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <Link to="/login" className="right">Skip</Link>
      </div>

      {/* Boarding Content */}
      <div className="wrap-boarding">
        <div className="tf-container">
          <div className="d-flex flex-column min-vh-100 justify-content-between">
            <div className="banner-boarding mt-30">
              <img src="./images/banner/boarding1.jpg" alt="img" />
              {/* SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="375" height="440" viewBox="0 0 390 440" fill="none">
                <g filter="url(#filter0_f_1_12302)">
                  <path d="M317.593 220.084C162.184 337.75 264.912 337.75 199.927 337.75C134.941 337.75 260.61 361.432 82.2598 220.084C-96.0904 78.7354 134.941 102.417 199.927 102.417C264.912 102.417 473.002 102.417 317.593 220.084Z" fill="url(#paint0_linear_1_12302)" />
                </g>
                <defs>
                  <filter id="filter0_f_1_12302" x="-84" y="0.925049" width="558" height="438.317" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_12302"/>
                  </filter>
                  <linearGradient id="paint0_linear_1_12302" x1="329.25" y1="100.925" x2="182.611" y2="397.934" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E250E5"/>
                    <stop offset="1" stopColor="#4B50E6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="content mb-32">
              <h2 className="text-center">Welcome to Cointex Crypto Wallet app</h2>
              <p className="mt-8 text-center text-large">
                Discover the world of cryptocurrencies and manage your assets securely and conveniently.
              </p>
              <Link to="/boarding" className="tf-btn primary md mt-40">Next</Link>
              <p className="mt-20 text-center mb-35">
                By creating an account, you’re agree to our{" "}
                <span className="text-white" onClick={() => setShowModal(true)}>Privacy policy</span>{" "}
                and{" "}
                <span className="text-white" onClick={() => setShowModal(true)}>Term of use</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-20">
              <div className="heading">
                <h3>Privacy</h3>
                <div className="mt-4 text-small">
                  <p>
                    A mobile app privacy policy is a legal statement that must be clear, conspicuous, and consented to by all users.
                  </p>
                </div>
                <div className="cb-noti mt-12">
                  <input
                    type="checkbox"
                    className="tf-checkbox"
                    id="cb-ip"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <label htmlFor="cb-ip">
                    I agree to the Term of service and Privacy policy
                  </label>
                </div>
              </div>
              <div className="mt-20">
                <button
                  className="tf-btn md primary"
                  disabled={!agree}
                  onClick={() => setShowModal(false)}
                >
                  I Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;
