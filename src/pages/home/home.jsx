import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaWallet, FaExchangeAlt, FaChartLine } from "react-icons/fa";
import Preloader from "../../shared/Preloader";
import { GiHamburgerMenu, GiTwoCoins } from "react-icons/gi";
import { Link } from "react-router-dom";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";
import { PiWallet } from "react-icons/pi";

const Home = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 24,
        hours: 5,
        minutes: 12,
        seconds: 54,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (<>
        <Preloader duration={500} />

        <div className="header-style2 fixed-top bg-menuDark">
            <div className="d-flex justify-content-between align-items-center">
                <div className="box-account style-2">
                    <Link to='/user-info' className="icon-gift">
                        <GiHamburgerMenu />
                        {/* <img src="images/avt/avt2.jpg" alt="img" className="avt" /> */}
                    </Link>
                    <div className="search-box box-input-field style-2">
                        <Link to='/search' className="icon-search" />
                        <input
                            type="text"
                            placeholder="Looking for crypto"
                            required=""
                            className="clear-ip"
                        />
                        <i className="icon-close" />
                    </div>
                </div>
                <div className="d-flex justify-content-end align-items-center box-account style-2">
                    <Link to="/profile" className="icon-gift">
                        <img src="images/avt/avt2.jpg" alt="img" className="avt" />
                    </Link>
                    {/* <a href="list-blog.html" className="icon-gift" />
                    <a
                        href="#notification"
                        className="icon-noti box-noti"
                        data-bs-toggle="modal"
                    /> */}
                </div>
            </div>
        </div>
        <div className="pt-68 pb-80">

            <div className="bg-menuDark tf-container">
                <div className="p-4 mt-4 border-2 border-green-500 rounded-sm overflow-hidden">
                    <div className="flex justify-center items-center bg-danger rounded-sm">
                        <div className="bg-red-500 text-white font-bold text-center px-6 py-4 rounded-md shadow-md">
                            <p className="text-sm">YOUR FREE SIGNUP BONUS WILL EXPIRE IN:</p>
                            <p className="text-lg mt-1">
                                {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
                                {timeLeft.seconds}s
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-menuDark tf-container">
                <div className="pt-12 pb-12 mt-4">
                    <h5>
                        <span className="text-primary">My Income</span>
                        {/* -{" "}
                        <a
                            href="#"
                            className="choose-account"
                            data-bs-toggle="modal"
                            data-bs-target="#accountWallet"
                        >
                            <span className="dom-text">Account 1 </span> &nbsp;
                            <i className="icon-select-down" />
                        </a>{" "} */}
                    </h5>
                    <h1 className="mt-16">
                        <a href="#">$2159,34</a>
                    </h1>
                    <ul className="mt-16 grid-4 m--16">
                        <li>
                            <a
                                href="choose-payment.html"
                                className="tf-list-item d-flex flex-column gap-8 align-items-center"
                            >
                                <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                                    {/* <i className="icon icon-way" /> */}
                                    <HiOutlinePaperAirplane />
                                </span>
                                Send
                            </a>
                        </li>
                        <li>
                            <a
                                href="qr-code2.html"
                                className="tf-list-item d-flex flex-column gap-8 align-items-center"
                            >
                                <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                                    {/* <i className="icon icon-way2" /> */}
                                    <HiOutlinePaperAirplane className="" style={{ transform: "rotate(180deg)" }} />
                                </span>
                                Receive
                            </a>
                        </li>
                        <li>
                            <a
                                href="buy-quantity.html"
                                className="tf-list-item d-flex flex-column gap-8 align-items-center"
                            >
                                <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                                    {/* <i className="icon icon-wallet" /> */}
                                    {/* <FaWallet /> */}
                                    <PiWallet />
                                </span>
                                Buy
                            </a>
                        </li>
                        <li>
                            <a
                                href="earn.html"
                                className="tf-list-item d-flex flex-column gap-8 align-items-center"
                            >
                                <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                                    {/* <i className="icon icon-exchange" /> */}
                                    <GiTwoCoins />
                                </span>
                                Earn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-menuDark tf-container">
                <div className="pt-12 pb-12 mt-4">
                    {/* <h5>Market</h5> */}
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={2.8}
                        breakpoints={{
                            768: { slidesPerView: 2.8 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="swiper tf-swiper swiper-wrapper-r mt-16"
                    >
                        <SwiperSlide className="swiper-slide">
                            <a href="exchange-market.html" className="coin-box d-block">
                                <div className="coin-price d-flex justify-content-between mb-2">
                                    <span>Total Ballance</span>
                                </div>
                                <div className="coin-price d-flex justify-content-between">
                                    <span>$30780</span>
                                </div>
                                <div className="blur bg1"></div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <a href="exchange-market.html" className="coin-box d-block">
                                <div className="coin-price d-flex justify-content-between mb-2">
                                    <span>Total Earning</span>
                                </div>
                                <div className="coin-price d-flex justify-content-between">
                                    <span>$30780</span>
                                </div>
                                <div className="blur bg2"></div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <a href="exchange-market.html" className="coin-box d-block">
                                <div className="coin-price d-flex justify-content-between mb-2">
                                    <span>Total Cripto</span>
                                </div>
                                <div className="coin-price d-flex justify-content-between">
                                    <span>$30780</span>
                                </div>
                                <div className="blur bg3"></div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="bg-menuDark tf-container">
                <div className="pt-12 pb-12 mt-4">
                    <h5>Market</h5>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={2.8}
                        breakpoints={{
                            768: { slidesPerView: 2.8 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="swiper tf-swiper swiper-wrapper-r mt-16"
                    >
                        <SwiperSlide className="swiper-slide">
                            <a href="exchange-market.html" className="coin-box d-block">
                                <div className="coin-logo">
                                    <img src="images/coin/market-1.jpg" alt="img" className="logo" />
                                    <div className="title">
                                        <p>Bitcoin</p>
                                        <span>BTC</span>
                                    </div>
                                </div>
                                <div className="mt-8 mb-8 coin-chart">
                                    {/* <div id="line-chart-1" /> */}
                                    <div
                                        id="apexchartsltccxglg"
                                        className="apexcharts-canvas apexchartsltccxglg apexcharts-theme-light"
                                        style={{ width: "89px", height: "26px" }}
                                    >
                                        <svg
                                            id="SvgjsSvg1378"
                                            width="89"
                                            height="26"
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlnsSvgjs="http://svgjs.dev"
                                            className="apexcharts-svg"
                                            xmlnsData="ApexChartsNS"
                                            transform="translate(0, 0)"
                                            style={{ background: "transparent" }}
                                        >
                                            <g
                                                id="SvgjsG1380"
                                                className="apexcharts-inner apexcharts-graphical"
                                                transform="translate(0, 0)"
                                            >
                                                <defs id="SvgjsDefs1379">
                                                    <clipPath id="gridRectMaskltccxglg">
                                                        <rect
                                                            id="SvgjsRect1385"
                                                            width="94"
                                                            height="27"
                                                            x="-2.5"
                                                            y="-0.5"
                                                            fill="#fff"
                                                        ></rect>
                                                    </clipPath>
                                                </defs>

                                                {/* Chart line */}
                                                <g
                                                    id="SvgjsG1387"
                                                    className="apexcharts-line-series apexcharts-plot-series"
                                                >
                                                    <g
                                                        id="SvgjsG1388"
                                                        className="apexcharts-series"
                                                        seriesName="seriesx1"
                                                    >
                                                        <path
                                                            id="SvgjsPath1391"
                                                            d="M 0 17.33C 5.19 17.33 9.64 12.13 14.83 12.13C 20.02 12.13 24.47 19.58 29.66 19.58C 34.85 19.58 39.30 3.46 44.5 3.46C 49.69 3.46 54.14 22.18 59.33 22.18C 64.52 22.18 68.97 6.93 74.16 6.93C 79.35 6.93 83.80 3.46 89 3.46"
                                                            fill="none"
                                                            stroke="rgba(210,80,255,0.85)"
                                                            strokeWidth="1"
                                                            className="apexcharts-line"
                                                            clipPath="url(#gridRectMaskltccxglg)"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="apexcharts-legend" style={{ maxHeight: "13px" }}></div>
                                    </div>
                                </div>
                                <div className="coin-price d-flex justify-content-between">
                                    <span>$30780</span>
                                    <span className="text-primary d-flex align-items-center gap-2">
                                        <i className="icon-select-up" /> 11,75%
                                    </span>
                                </div>
                                <div className="blur bg1"></div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <a href="exchange-market.html" className="coin-box d-block">
                                <div className="coin-logo">
                                    <img src="images/coin/market-3.jpg" alt="img" className="logo" />
                                    <div className="title">
                                        <p>Binance</p>
                                        <span>BNB</span>
                                    </div>
                                </div>
                                <div className="mt-8 mb-8 coin-chart">
                                    {/* <div id="line-chart-2" /> */}
                                    <div id="line-chart-2" style={{ minHeight: "26px" }}>
                                        <div
                                            id="apexcharts3rltm4lt"
                                            className="apexcharts-canvas apexcharts3rltm4lt apexcharts-theme-light"
                                            style={{ width: "89px", height: "26px" }}
                                        >
                                            <svg
                                                id="SvgjsSvg1418"
                                                width="89"
                                                height="26"
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xmlnsSvgjs="http://svgjs.dev"
                                                className="apexcharts-svg"
                                                xmlnsData="ApexChartsNS"
                                                transform="translate(0, 0)"
                                                style={{ background: "transparent" }}
                                            >
                                                <g
                                                    id="SvgjsG1420"
                                                    className="apexcharts-inner apexcharts-graphical"
                                                    transform="translate(0, 0)"
                                                >
                                                    <defs id="SvgjsDefs1419">
                                                        <clipPath id="gridRectMask3rltm4lt">
                                                            <rect
                                                                id="SvgjsRect1425"
                                                                width="94"
                                                                height="27"
                                                                x="-2.5"
                                                                y="-0.5"
                                                                fill="#fff"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>

                                                    {/* Line Path */}
                                                    <path
                                                        d="M 0 17.33C 5.19 17.33 9.64 12.13 14.83 12.13C 20.02 12.13 24.47 19.58 29.66 19.58C 34.85 19.58 39.30 3.46 44.5 3.46C 49.69 3.46 54.14 22.18 59.33 22.18C 64.52 22.18 68.97 6.93 74.16 6.93C 79.35 6.93 83.80 3.46 89 3.46"
                                                        fill="none"
                                                        stroke="#25C866"
                                                        strokeOpacity="0.85"
                                                        strokeWidth="1"
                                                        className="apexcharts-line"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="coin-price d-flex justify-content-between">
                                    <span>$270.10</span>
                                    <span className="text-primary d-flex align-items-center gap-2">
                                        <i className="icon-select-up" /> 21,59%
                                    </span>
                                </div>
                                <div className="blur bg2"></div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <a href="exchange-market.html" className="coin-box d-block">
                                <div className="coin-logo">
                                    <img src="images/coin/coin-3.jpg" alt="img" className="logo" />
                                    <div className="title">
                                        <p>Ethereum</p>
                                        <span>ETH</span>
                                    </div>
                                </div>
                                <div className="mt-8 mb-8 coin-chart">
                                    {/* <div id="line-chart-3" /> */}
                                    <div id="line-chart-3" style={{ minHeight: "26px" }}>
                                        <div
                                            id="apexcharts8fn7aj1w"
                                            className="apexcharts-canvas apexcharts8fn7aj1w apexcharts-theme-light"
                                            style={{ width: "89px", height: "26px" }}
                                        >
                                            <svg
                                                id="SvgjsSvg1458"
                                                width="89"
                                                height="26"
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xmlnsSvgjs="http://svgjs.dev"
                                                className="apexcharts-svg"
                                                xmlnsData="ApexChartsNS"
                                                transform="translate(0, 0)"
                                                style={{ background: "transparent" }}
                                            >
                                                <g
                                                    id="SvgjsG1460"
                                                    className="apexcharts-inner apexcharts-graphical"
                                                    transform="translate(0, 0)"
                                                >
                                                    <defs id="SvgjsDefs1459">
                                                        <clipPath id="gridRectMask8fn7aj1w">
                                                            <rect
                                                                id="SvgjsRect1466"
                                                                width="94"
                                                                height="27"
                                                                x="-2.5"
                                                                y="-0.5"
                                                                fill="#fff"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>

                                                    {/* Line Path */}
                                                    <path
                                                        d="M 0 12.35C 3.46 12.35 6.42 9.1 9.88 9.1C 13.35 9.1 16.31 15.6 19.77 15.6C 23.23 15.6 26.20 2.6 29.66 2.6C 33.12 2.6 36.09 19.5 39.55 19.5C 43.01 19.5 45.98 0 49.44 0C 52.90 0 55.87 23.4 59.33 23.4C 62.79 23.4 65.76 12.61 69.22 12.61C 72.68 12.61 75.65 15.6 79.11 15.6C 82.57 15.6 85.53 1.3 89 1.3"
                                                        fill="none"
                                                        stroke="#0082FE"
                                                        strokeOpacity="0.85"
                                                        strokeWidth="1"
                                                        className="apexcharts-line"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="coin-price d-flex justify-content-between">
                                    <span>$1478.10</span>
                                    <span className="text-primary d-flex align-items-center gap-2">
                                        <i className="icon-select-up" /> 4,75%
                                    </span>
                                </div>
                                <div className="blur bg3"></div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="bg-menuDark tf-container">
                <div className="pt-12 pb-12 mt-4">
                    <div className="wrap-filter-swiper">
                        <h5>
                            <a href="cryptex-rating.html" className="cryptex-rating">
                                <i className="icon-star" />
                                Cryptex Rating
                            </a>
                        </h5>
                        {/* <div class="swiper swiper-wrapper-r market-swiper" data-space-between="20" data-preview="auto"> */}
                        <div className="swiper-wrapper1 menu-tab-v3 mt-12" role="tablist">
                            <div
                                className="swiper-slide1 nav-link active"
                                data-bs-toggle="tab"
                                data-bs-target="#favorites"
                                role="tab"
                                aria-controls="favorites"
                                aria-selected="true"
                            >
                                Favorites
                            </div>
                            <div
                                className="swiper-slide1 nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#top"
                                role="tab"
                                aria-controls="top"
                                aria-selected="false"
                            >
                                Top
                            </div>
                            <div
                                className="swiper-slide1 nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#popular"
                                role="tab"
                                aria-controls="popular"
                                aria-selected="false"
                            >
                                Popular
                            </div>
                            <div
                                className="swiper-slide1 nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#price"
                                role="tab"
                                aria-controls="price"
                                aria-selected="false"
                            >
                                Token price
                            </div>
                            <div
                                className="swiper-slide1 nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#new"
                                role="tab"
                                aria-controls="new"
                                aria-selected="false"
                            >
                                New token
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                    <div className="tab-content mt-8">
                        <div
                            className="tab-pane fade show active"
                            id="favorites"
                            role="tabpanel"
                        >
                            <div className="d-flex justify-content-between">
                                Name
                                <p className="d-flex gap-8">
                                    <span>Last price</span>
                                    <span>Change</span>
                                </p>
                            </div>
                            <ul className="mt-16">
                                <li>
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-6.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">ETH</p>
                                                <span className="text-secondary">$360,6M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,80</span>
                                                <span className="coin-btn decrease">-1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-7.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">arb_ETH</p>
                                                <span className="text-secondary">$132,18M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,80</span>
                                                <span className="coin-btn increase">+1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-8.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">WBTC</p>
                                                <span className="text-secondary">$50,56M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$30.001,96</span>
                                                <span className="coin-btn decrease">-1,64%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-3.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">ARB</p>
                                                <span className="text-secondary">$31,55M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1,11</span>
                                                <span className="coin-btn increase">+3,71%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-9.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">WETH</p>
                                                <span className="text-secondary">$24,34M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,56</span>
                                                <span className="coin-btn decrease">-1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img
                                            src="images/coin/coin-10.jpg"
                                            alt="img"
                                            className="img"
                                        />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">MATIC</p>
                                                <span className="text-secondary">$19,36M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$0,666</span>
                                                <span className="coin-btn decrease">-4,42%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="top" role="tabpanel">
                            <div className="d-flex justify-content-between">
                                Name
                                <p className="d-flex gap-8">
                                    <span>Last price</span>
                                    <span>Change</span>
                                </p>
                            </div>
                            <ul className="mt-16">
                                <li>
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-6.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">ETH</p>
                                                <span className="text-secondary">$360,6M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,80</span>
                                                <span className="coin-btn decrease">-1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-7.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">arb_ETH</p>
                                                <span className="text-secondary">$132,18M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,80</span>
                                                <span className="coin-btn increase">+1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-8.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">WBTC</p>
                                                <span className="text-secondary">$50,56M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$30.001,96</span>
                                                <span className="coin-btn decrease">-1,64%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-3.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">ARB</p>
                                                <span className="text-secondary">$31,55M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1,11</span>
                                                <span className="coin-btn increase">+3,71%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-9.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">WETH</p>
                                                <span className="text-secondary">$24,34M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,56</span>
                                                <span className="coin-btn decrease">-1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img
                                            src="images/coin/coin-10.jpg"
                                            alt="img"
                                            className="img"
                                        />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">MATIC</p>
                                                <span className="text-secondary">$19,36M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$0,666</span>
                                                <span className="coin-btn decrease">-4,42%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="popular" role="tabpanel">
                            <div className="d-flex justify-content-between">
                                Name
                                <p className="d-flex gap-8">
                                    <span>Last price</span>
                                    <span>Change</span>
                                </p>
                            </div>
                            <ul className="mt-16">
                                <li>
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-6.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">ETH</p>
                                                <span className="text-secondary">$360,6M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,80</span>
                                                <span className="coin-btn decrease">-1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-7.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">arb_ETH</p>
                                                <span className="text-secondary">$132,18M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,80</span>
                                                <span className="coin-btn increase">+1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-8.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">WBTC</p>
                                                <span className="text-secondary">$50,56M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$30.001,96</span>
                                                <span className="coin-btn decrease">-1,64%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-3.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">ARB</p>
                                                <span className="text-secondary">$31,55M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1,11</span>
                                                <span className="coin-btn increase">+3,71%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-9.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">WETH</p>
                                                <span className="text-secondary">$24,34M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,56</span>
                                                <span className="coin-btn decrease">-1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img
                                            src="images/coin/coin-10.jpg"
                                            alt="img"
                                            className="img"
                                        />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">MATIC</p>
                                                <span className="text-secondary">$19,36M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$0,666</span>
                                                <span className="coin-btn decrease">-4,42%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="price" role="tabpanel">
                            <div className="d-flex justify-content-between">
                                Name
                                <p className="d-flex gap-8">
                                    <span>Last price</span>
                                    <span>Change</span>
                                </p>
                            </div>
                            <ul className="mt-16">
                                <li>
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-6.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">ETH</p>
                                                <span className="text-secondary">$360,6M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,80</span>
                                                <span className="coin-btn decrease">-1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-7.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">arb_ETH</p>
                                                <span className="text-secondary">$132,18M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,80</span>
                                                <span className="coin-btn increase">+1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-8.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">WBTC</p>
                                                <span className="text-secondary">$50,56M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$30.001,96</span>
                                                <span className="coin-btn decrease">-1,64%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-3.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">ARB</p>
                                                <span className="text-secondary">$31,55M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1,11</span>
                                                <span className="coin-btn increase">+3,71%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-9.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">WETH</p>
                                                <span className="text-secondary">$24,34M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,56</span>
                                                <span className="coin-btn decrease">-1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img
                                            src="images/coin/coin-10.jpg"
                                            alt="img"
                                            className="img"
                                        />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">MATIC</p>
                                                <span className="text-secondary">$19,36M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$0,666</span>
                                                <span className="coin-btn decrease">-4,42%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="new" role="tabpanel">
                            <div className="d-flex justify-content-between">
                                Name
                                <p className="d-flex gap-8">
                                    <span>Last price</span>
                                    <span>Change</span>
                                </p>
                            </div>
                            <ul className="mt-16">
                                <li>
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-6.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">ETH</p>
                                                <span className="text-secondary">$360,6M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,80</span>
                                                <span className="coin-btn decrease">-1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-7.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">arb_ETH</p>
                                                <span className="text-secondary">$132,18M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,80</span>
                                                <span className="coin-btn increase">+1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-8.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">WBTC</p>
                                                <span className="text-secondary">$50,56M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$30.001,96</span>
                                                <span className="coin-btn decrease">-1,64%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-3.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">ARB</p>
                                                <span className="text-secondary">$31,55M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1,11</span>
                                                <span className="coin-btn increase">+3,71%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img src="images/coin/coin-9.jpg" alt="img" className="img" />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">WETH</p>
                                                <span className="text-secondary">$24,34M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$1.878,56</span>
                                                <span className="coin-btn decrease">-1,62%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mt-16">
                                    <a
                                        href="choose-payment.html"
                                        className="coin-item style-2 gap-12"
                                    >
                                        <img
                                            src="images/coin/coin-10.jpg"
                                            alt="img"
                                            className="img"
                                        />
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">MATIC</p>
                                                <span className="text-secondary">$19,36M</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">$0,666</span>
                                                <span className="coin-btn decrease">-4,42%</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="menubar-footer footer-fixed">
            <ul className="inner-bar">
                <li className="active">
                    <a href="home.html">
                        {/* <i className="icon icon-home2" /> */}
                        <GoHomeFill className="icon" />
                        Home
                    </a>
                </li>
                <li>
                    <a href="exchange-market.html">
                        {/* <i className="icon icon-exchange" /> */}
                        <GiTwoCoins className="icon" />
                        Exchange
                    </a>
                </li>
                <li>
                    <a href="earn.html">
                        {/* <i className="icon icon-earn" /> */}
                        <FaChartLine className="icon" />
                        Earn
                    </a>
                </li>
                <li>
                    <a href="wallet.html">
                        {/* <i className="icon icon-wallet" /> */}
                        <FaWallet className="icon" />
                        Wallet
                    </a>
                </li>
            </ul>
        </div>
        {/* account */}
        <div className="modal fade action-sheet" id="accountWallet">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <span>Wallet</span>
                        <span className="icon-cancel" data-bs-dismiss="modal" />
                    </div>
                    <ul className="mt-20 pb-16">
                        <li data-bs-dismiss="modal">
                            <div className="d-flex justify-content-between align-items-center gap-8 text-large item-check active dom-value">
                                Account 1 <i className="icon icon-check-circle" />{" "}
                            </div>
                        </li>
                        <li className="mt-4" data-bs-dismiss="modal">
                            <div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">
                                Account 2<i className="icon icon-check-circle" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* notification */}
        <div className="modal fade modalRight" id="notification">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                        <span className="left" data-bs-dismiss="modal" aria-hidden="true">
                            <i className="icon-left-btn" />
                        </span>
                        <h3>Notification</h3>
                    </div>
                    <div className="overflow-auto pt-45 pb-16">
                        <div className="tf-container">
                            <ul className="mt-12">
                                <li>
                                    <a href="#" className="noti-item bg-menuDark">
                                        <div className="pb-8 line-bt d-flex">
                                            <p className="text-button fw-6">
                                                Cointex to just tick size and trading amount precision of
                                                spots/margins and perpetual swaps
                                            </p>
                                            <i className="dot-lg bg-primary" />
                                        </div>
                                        <span className="d-block mt-8">5 minutes ago</span>
                                    </a>
                                </li>
                                <li className="mt-12">
                                    <a href="#" className="noti-item bg-menuDark">
                                        <div className="pb-8 line-bt d-flex">
                                            <p className="text-button fw-6">
                                                Cointex to adjust components of several indexes
                                            </p>
                                            <i className="dot-lg bg-primary" />
                                        </div>
                                        <span className="d-block mt-8">5 minutes ago</span>
                                    </a>
                                </li>
                                <li className="mt-12">
                                    <a href="#" className="noti-item bg-menuDark">
                                        <div className="pb-8 line-bt d-flex">
                                            <p className="text-button fw-6">
                                                Cointex to just tick size and trading amount precision of
                                                spots/margins and perpetual swaps
                                            </p>
                                            <i className="dot-lg bg-primary" />
                                        </div>
                                        <span className="d-block mt-8">5 minutes ago</span>
                                    </a>
                                </li>
                                <li className="mt-12">
                                    <a href="#" className="noti-item bg-menuDark">
                                        <div className="pb-8 line-bt">
                                            <p className="text-button fw-6 text-secondary">
                                                Cointex to adjust components of several indexes
                                            </p>
                                        </div>
                                        <span className="d-block mt-8 text-secondary">1 day ago</span>
                                    </a>
                                </li>
                                <li className="mt-12">
                                    <a href="#" className="noti-item bg-menuDark">
                                        <div className="pb-8 line-bt">
                                            <p className="text-button fw-6 text-secondary">
                                                Cryptex wallet uses Achain network service
                                            </p>
                                        </div>
                                        <span className="d-block mt-8 text-secondary">1 day ago</span>
                                    </a>
                                </li>
                                <li className="mt-12">
                                    <a href="#" className="noti-item bg-menuDark">
                                        <div className="pb-8 line-bt">
                                            <p className="text-button fw-6 text-secondary">
                                                Cointex to adjust components of several indexes
                                            </p>
                                        </div>
                                        <span className="d-block mt-8 text-secondary">1 day ago</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* noti popup */}
        <div className="modal fade modalCenter" id="modalNoti">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content modal-sm">
                    <div className="p-16 line-bt text-center">
                        <h4>“Cointex” Would Like To Send You Notifications</h4>
                        <p className="mt-8 text-large">
                            Notifications may include alerts, sounds, and icon badges. These can
                            be configured in Settings.
                        </p>
                    </div>
                    <div className="grid-2">
                        <a
                            href="#"
                            className="line-r text-center text-button fw-6 p-10 text-secondary btn-hide-modal"
                            data-bs-dismiss="modal"
                        >
                            Don’t Allow
                        </a>
                        <a
                            href="#"
                            className="text-center text-button fw-6 p-10 text-primary btn-hide-modal"
                            data-bs-toggle="modal"
                            data-bs-target="#notiPrivacy"
                        >
                            {" "}
                            Allow
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* noti popup 2*/}
        <div className="modal fade modalCenter" id="notiPrivacy">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-20">
                    <div className="heading">
                        <h3>Privacy</h3>
                        <div className="mt-4 text-small">
                            <p>
                                A mobile app privacy policy is a legal statement that must be
                                clear, conspicuous, and consented to by all users. It must
                                disclose how a mobile app gathers, stores, and uses the personally
                                identifiable information it collects from its users.
                            </p>
                            <p>
                                A mobile privacy app is developed and presented to users so that
                                mobile app developers stay compliant with state, federal, and
                                international laws. As a result, they fulfill the legal
                                requirement to safeguard user privacy while protecting the company
                                itself from legal challenges.
                            </p>
                        </div>
                        <h3 className="mt-12">Authorized Users</h3>
                        <p className="mt-4 text-small">
                            A mobile app privacy policy is a legal statement that must be clear,
                            conspicuous, and consented to by all users. It must disclose how a
                            mobile app gathers, stores, and uses the personally identifiable
                            information it collects from its users.
                        </p>
                        <div className="cb-noti mt-12">
                            <input type="checkbox" className="tf-checkbox" id="cb-ip" />
                            <label htmlFor="cb-ip">
                                I agree to the Term of service and Privacy policy
                            </label>
                        </div>
                    </div>
                    <div className="mt-20">
                        <a href="#" className="tf-btn md primary" data-bs-dismiss="modal">
                            I Accept
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Home;