import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Preloader from "../../shared/Preloader";
import { FaAngleLeft } from "react-icons/fa";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const naavigate = useNavigate();

    const handleLogin = () => {
        naavigate("/home");
    }

    return (
        <div>
            {/* Preloader */}
            {/* <div className="preload preload-container">
        <div
          className="preload-logo"
          style={{ backgroundImage: "url('/images/logo/144.png')" }}
        >
          <div className="spinner"></div>
        </div>
      </div> */}

            <Preloader duration={500} />

            {/* Header */}
            <div className="header fixed-top bg-surface">
                <span className="left back-btn" onClick={() => window.history.back()}>
                    <FaAngleLeft />
                </span>
            </div>

            {/* Login Form */}
            <div className="pt-45 pb-20">
                <div className="tf-container">

                    <div className="logo-login flex justify-center">
                        <img src="/images/logo/logo1.png" alt="" className="mx-auto w-10" style={{ width: '200px' }} />
                    </div>
                    <div className="mt-32">
                        <h2 className="text-center">Login to Aristozx19</h2>

                        {/* Social Login */}
                        <ul className="mt-40 socials-login">
                            <li className="mt-12">
                                <Link to="/home" className="tf-btn md social dark">
                                    <img src="/images/logo/fb.jpg" alt="Facebook" /> Continue with Facebook
                                </Link>
                            </li>
                            <li className="mt-12">
                                <Link to="/home" className="tf-btn md social dark">
                                    <img src="/images/logo/google.jpg" alt="Google" /> Continue with Google
                                </Link>
                            </li>
                            <li className="mt-12">
                                <Link to="/home" className="tf-btn md social dark">
                                    <img src="/images/logo/apple.jpg" alt="Apple" /> Continue with Apple
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="auth-line mt-12">Or</div>

                    {/* Form */}
                    <form className="mt-16" onSubmit={() => handleLogin()}>
                        <fieldset className="mt-16">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Email</p>
                                <input type="text" placeholder="Example@gmail" className="form-control" />
                            </label>
                        </fieldset>

                        <fieldset className="mt-16 mb-12">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Password</p>
                                <div className="box-auth-pass position-relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        placeholder="Your password"
                                        className="password-field form-control"
                                    />
                                    <span
                                        className="show-pass position-absolute"
                                        style={{ right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <i className="icon-view-hide"></i> : <i className="icon-view"></i>}
                                    </span>
                                </div>
                            </label>
                        </fieldset>

                        <Link to="/reset-pass" className="text-secondary d-block mb-3">
                            Forgot Password?
                        </Link>

                        <button type="submit" className="btn btn-primary mt-3 w-100">
                            Login
                        </button>

                        <p className="mt-20 text-center text-small">
                            Already have an Account? &ensp;<Link to="/register">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;