import { PiCurrencyEthBold, PiSwap } from "react-icons/pi";
import Preloader from "../../shared/Preloader";
import { SiBoosty, SiConvertio, SiLevelsdotfyi } from "react-icons/si";
import { IoMdGlobe } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaAngleLeft, FaChevronLeft } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { GiLevelEndFlag, GiSelfLove, GiTeamUpgrade } from "react-icons/gi";
import { BsDroplet } from "react-icons/bs";

function UserInfo() {
    return (
        <>
         <Preloader duration={500} />

            {/* Header */}
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <span className="left back-btn" onClick={() => window.history.back()}><FaChevronLeft /></span>
                <a href="qr-code.html" className="right text-secondary"><i className="icon-barcode"></i></a>
            </div>

            <div className="pt-45 pb-16">
                {/* Profile */}
                {/* <div className="bg-menuDark tf-container">
                    <a href="profile.html" className="pt-12 pb-12 mt-4 d-flex justify-content-between align-items-center">
                        <div className="box-account">
                            <img src="images/avt/avt2.jpg" alt="img" className="avt" />
                            <div className="info">
                                <h5>Tony Nguyen</h5>
                                <p className="text-small text-secondary mt-8 mb-8">Profile and settings</p>
                                <span className="tag-xs style-2 round-2 red">Unverified</span>
                            </div>
                        </div>
                        <span className="arr-right"><i className="icon-arr-right"></i></span>
                    </a>
                </div> */}

                {/* Buy Crypto */}
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <h5>Team</h5>
                        <ul className="mt-16 grid-3 gap-12">
                            <li>
                                <a href="#cryptocurrency" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center" data-bs-toggle="modal">
                                     <HiOutlinePaperAirplane /> Direct Team 
                                </a>
                            </li>
                            <li>
                                <a href="exchange-market.html" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <SiLevelsdotfyi /> Level Team
                                </a>
                            </li>
                            <li>
                                <a href="#cryptocurrency" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center" data-bs-toggle="modal">
                                    <RiTeamLine /> Team Business  
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Exchange */}
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <h5>Bonus</h5>
                        <ul className="mt-16 grid-3 gap-12">
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    {/* <i className="icon icon-convert"></i> Convert */}
                                    <AiOutlineDeploymentUnit /> Unit Growth Bonus
                                </a>
                            </li>
                             <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    {/* <i className="icon icon-convert"></i> Convert */}
                                    <SiBoosty /> Booster Bonus
                                </a>
                            </li>
                             <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    {/* <i className="icon icon-convert"></i> Convert */}
                                    <GiLevelEndFlag /> Level Bonus
                                </a>
                            </li>
                             <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    {/* <i className="icon icon-convert"></i> Convert */}
                                    <GiSelfLove /> Self Reward Bonus
                                </a>
                            </li>
                             <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    {/* <i className="icon icon-convert"></i> Convert */}
                                    <GiTeamUpgrade /> Team Reward Bonus
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Token */}
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <h5>Token</h5>
                        <ul className="mt-16 grid-3 gap-12">
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <BsDroplet /> Air Drop
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Help Center */}
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <h5>Help center</h5>
                        <ul className="mt-16 grid-3 gap-12">
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    {/* <i className="icon icon-globe"></i> Community */}
                                    <IoMdGlobe /> Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    {/* <i className="icon icon-headset"></i> Support */}
                                    <BiSupport /> Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* About */}
                <div className="bg-menuDark tf-container">
                    <a href="#" className="pt-12 pb-12 mt-4 d-flex justify-content-between align-items-center">
                        <h5>About Cointex</h5>
                        <span className="arr-right"><i className="icon-arr-right"></i></span>
                    </a>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade modalRight" id="cryptocurrency">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                            <span className="left" data-bs-dismiss="modal" aria-hidden="true">
                                <i className="icon-left-btn"></i>
                            </span>
                            <h3>Choose cryptocurrency</h3>
                        </div>
                        <div className="overflow-auto pt-45 pb-16">
                            <div className="tf-container">
                                {/* Search Box */}
                                <div className="mt-8 search-box box-input-field">
                                    <i className="icon-search"></i>
                                    <input type="text" placeholder="Search cryptocurrency" required className="clear-ip" />
                                    <i className="icon-close"></i>
                                </div>

                                <h5 className="mt-12">Popular search</h5>
                                <ul className="mt-16">
                                    <li>
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src="images/coin/coin-3.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Ethereum</p>
                                                    <span className="text-secondary text-small">ETH</span>
                                                </div>
                                                <span className="text-small">$30.776,93</span>
                                            </div>
                                        </a>
                                    </li>
                                    {/* ...baaki ke coins yaha paste karo... */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserInfo;
