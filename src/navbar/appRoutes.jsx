import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import UserHome from '../users/userHome';
import Login from '../general/login';
import SignUp from '../general/singup';
import { useDispatch, useSelector } from 'react-redux';
import Logout from '../general/logout';
import { Avatar, Button, CircularProgress, Menu, MenuItem, Stack } from '@mui/material';
import Loading from '../general/loading';
import NotFound from '../general/notFound';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CottageIcon from '@mui/icons-material/Cottage';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppContext } from '../context/context';
import Cookies from 'js-cookie';
import PersonIcon from '@mui/icons-material/Person';

export default function AppRoutes() {
    const { user, setUser } = useContext(AppContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        if (Cookies.get("user")) {
            setUser(JSON.parse(Cookies.get("user")));
            console.log(user);
        }
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <header className=' container-fluid sticky-top ' style={{  height: "80px" }}>
                {user != null ?
                    <div className='d-flex justify-content-between align-items-center p-4' data-user-set-bg="#ffffff">
                        <div>

                            <Avatar sx={{ bgcolor: "#eb0e9a", margin: "0", direction: "rtl" }}
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                src={user.image}
                                alt={user.name}
                            />
                            {/* {user?.name[0]} */}
                            {/* </Avatar> */}
                            <Menu
                                id="basic-menu"
                                className="mt-3"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose} dir='rtl' ><Link to="/profile" className='text-decoration-none py-2  px-0' style={{  color: 'silver' }}><AccountCircleIcon color='turquoise' className="ps-1" />פרופיל אישי</Link></MenuItem>
                                <MenuItem onClick={handleClose} dir='rtl' ><Link to="/like" className='text-decoration-none py-2 px-0' style={{  color: 'silver' }}><FavoriteBorderIcon color='turquoise' className="ps-1" />אופים שמורים</Link></MenuItem>
                                <MenuItem onClick={handleClose} dir='rtl' ><Link to="/myOrders" className='text-decoration-none py-2 px-0' style={{  color: 'silver' }}><InsertInvitationIcon color='turquoise' className="ps-1" />הזמנות שלי</Link></MenuItem>
                                {user.role == "baker" &&
                                    <MenuItem onClick={handleClose} dir='rtl' ><Link to="/profile" className='text-decoration-none py-2 px-0' style={{  color: 'silver' }}><AccountCircleIcon color='turquoise' className="ps-1" />פרופיל האופה שלי</Link></MenuItem>
                                }
                                {user.role == "admin" && <>
                                    <MenuItem onClick={handleClose} dir='rtl' ><Link to="/usersManagement" className='text-decoration-none py-2 px-0' style={{  color: 'silver' }}><InsertInvitationIcon color='turquoise' className="ps-1" />ניהול משתמשים</Link></MenuItem>
                                    <MenuItem onClick={handleClose} dir='rtl' ><Link to="/bakersManagement" className='text-decoration-none py-2 px-0' style={{  color: 'silver' }}><InsertInvitationIcon color='turquoise' className="ps-1" />ניהול אופים</Link></MenuItem>
                                </>}
                                <MenuItem onClick={handleClose} dir='rtl' ><Link to="/logout" className='text-decoration-none py-2 px-0' style={{  color: 'silver' }}><LogoutIcon color='turquoise' className="ps-1" />יציאה</Link></MenuItem>
                                <MenuItem className='bg-dark' onClick={handleClose} dir='rtl' ><img className='me-3' src='https://i.ibb.co/Bs6MHb6/01.png' width={130} /></MenuItem>

                            </Menu>
                        </div>

                        <nav className=''>
                            <Link to="/home/?page=1" className='me-3 btn btn-outline-dark' style={{ color: 'silver' }}><HomeIcon color="white" />
                            </Link>
                        </nav>

                    </div> :
                    <nav className='container p-4'>
                        {/* <Link to="/login" className='me-3 btn btn-outline-dark' style={{ color: 'silver' }}>כניסה לאיזור האישי</Link> */}
                        <Link to="/login" className='me-3 ' >< PersonIcon style={{ color: 'silver' }}/></Link>
                        <Link to="/" className='me-3 btn btn-outline-dark' style={{ color: 'silver' }}><HomeIcon color="white" /></Link>
                    </nav>
                }

            </header>
        </div>
    )
}

{/* <header id="top">
    <div class="container"><div class="row"><div class="col span_3">
        <a id="logo" href="https://theboutiquecake.com" data-supplied-ml-starting-dark="false" data-supplied-ml-starting="false" data-supplied-ml="true">
            <img class="stnd skip-lazy default-logo" width="500" height="213" alt="The Boutique Cake"
                src="https://theboutiquecake.com/wp-content/uploads/2019/02/whitetalternative-01-web-copy.png"
                srcset="https://theboutiquecake.com/wp-content/uploads/2019/02/whitetalternative-01-web-copy.png 1x, https://theboutiquecake.com/wp-content/uploads/2019/02/whitetalternative-01-web-copy.png 2x">
                <img class="mobile-only-logo skip-lazy" alt="The Boutique Cake" width="512" height="512"
                    src="https://theboutiquecake.com/wp-content/uploads/2019/02/submark-01-web-white.png">
                </a>
                <nav class="left-side" data-using-pull-menu="false">
                    <ul class="nectar-social">
                        <li id="social-in-menu" class="button_social_group">
                            <a target="_blank" rel="noopener" href="https://www.facebook.com/theboutiquecake/">
                                <span class="screen-reader-text">facebook</span>
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCvCxhYzKI-1eqS7Qa0XZZ0A">
                                <span class="screen-reader-text">youtube</span>
                                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                            </a>
                            <a target="_blank" rel="noopener" href="https://www.instagram.com/theboutiquecake">
                                <span class="screen-reader-text">instagram</span>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav class="right-side">
                    <ul class="buttons" data-user-set-ocm="off">
                        <li id="nectar-user-account">
                            <div>
                                <a href="https://theboutiquecake.com/my-account/">
                                    <span class="icon-salient-m-user" aria-hidden="true"></span>
                                    <span class="screen-reader-text">account</span>
                                </a>
                            </div>
                        </li>
                        <li class="nectar-woo-cart">
                            <div class="cart-outer" data-user-set-ocm="off" data-cart-style="dropdown">
                                <div class="cart-menu-wrap">
                                    <div class="cart-menu">
                                        <a class="cart-contents" aria-label="Cart" href="https://theboutiquecake.com/cart/">
                                            <div class="cart-icon-wrap">
                                                <i class="icon-salient-cart"></i>
                                                <div class="cart-wrap">
                                                    <span>0 </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="cart-notification">
                                    <span class="item-name"></span>
                                    was successfully added to your cart.
                                </div>
                                <div class="widget woocommerce widget_shopping_cart">
                                    <div class="widget_shopping_cart_content">

                                        <p class="woocommerce-mini-cart__empty-message">No products in the cart.</p>

                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="slide-out-widget-area-toggle mobile-icon slide-out-from-right" data-custom-color="false" data-icon-animation="simple-transform">
                        <div>
                            <a href="#sidewidgetarea" role="button" aria-label="Navigation Menu" aria-expanded="false" class="closed">

                                <span class="screen-reader-text">
                                    Menu
                                    <i class="lines-button x2 hover-effect">
                                        <i class="lines"> </i>
                                    </i>
                                    <i class="lines-button x2 hover-effect">
                                        <i class="lines"></i>
                                    </i>
                                </span>
                                <span aria-hidden="true">
                                    <i class="lines-button x2">
                                        <i class="lines"></i>
                                    </i>
                                    <i class="lines-button x2 hover-effect">
                                        <i class="lines"></i>
                                    </i>
                                    <i class="lines-button x2 hover-effect">
                                        <i class="lines"></i>
                                    </i>
                                </span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="col span_9 col_last">
                <div class="nectar-mobile-only mobile-header">
                    <div class="inner"></div></div>
                <a class="mobile-user-account" href="https://theboutiquecake.com/my-account/"><span class="normal icon-salient-m-user" aria-hidden="true"></span><span class="screen-reader-text">account</span></a>
                <a id="mobile-cart-link" data-cart-style="dropdown" href="https://theboutiquecake.com/cart/"><i class="icon-salient-cart"></i><div class="cart-wrap"><span>0 </span></div></a>
                <div class="slide-out-widget-area-toggle mobile-icon slide-out-from-right" data-custom-color="false" data-icon-animation="simple-transform"><div> <a href="#sidewidgetarea" role="button" aria-label="Navigation Menu" aria-expanded="false" class="closed">
                    <span class="screen-reader-text">Menu<i class="lines-button x2 hover-effect"> <i class="lines"></i> </i><i class="lines-button x2 hover-effect"> <i class="lines"></i> </i></span><span aria-hidden="true"> <i class="lines-button x2"> <i class="lines"></i> </i> <i class="lines-button x2 hover-effect"> <i class="lines"></i> </i><i class="lines-button x2 hover-effect"> <i class="lines"></i> </i></span>
                </a>
                </div>
                </div>
                <nav><ul class="sf-menu sf-js-enabled sf-arrows"><li id="menu-item-6372" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item menu-item-6372"><a href="https://theboutiquecake.com/weddings-celebrations/" class="sf-with-ul"><span class="menu-title-text">Weddings &amp; Celebrations</span></a><ul class="sub-menu"><li id="menu-item-6625" class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6625"><a href="https://theboutiquecake.com/weddings-celebrations/"><span class="menu-title-text">Weddings &amp; Celebrations</span></a></li><li id="menu-item-6373" class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6373"><a href="https://theboutiquecake.com/flavour-list/"><span class="menu-title-text">Flavour List</span></a></li></ul></li><li id="menu-item-6221" class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6221"><a href="https://theboutiquecake.com/about/"><span class="menu-title-text">About</span></a></li><li id="menu-item-8903" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat nectar-regular-menu-item menu-item-8903"><a href="https://theboutiquecake.com/product-category/happy-holiday/"><span class="menu-title-text">Happy Holiday</span></a></li><li id="menu-item-6297" class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6297"><a href="https://theboutiquecake.com/shop/"><span class="menu-title-text">Shop</span></a></li><li id="menu-item-6624" class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6624"><a href="https://theboutiquecake.com/gallery/"><span class="menu-title-text">Gallery</span></a></li><li id="menu-item-6223" class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6223"><a href="https://theboutiquecake.com/blog/"><span class="menu-title-text">Blog</span></a></li><li id="menu-item-6480" class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6480"><a href="https://theboutiquecake.com/quote/"><span class="menu-title-text">Quote</span></a></li><li id="menu-item-6220" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item menu-item-6220"><a href="https://theboutiquecake.com/contact/" class="sf-with-ul"><span class="menu-title-text">Contact</span></a><ul class="sub-menu"><li id="menu-item-6626" class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6626"><a href="https://theboutiquecake.com/contact/"><span class="menu-title-text">Contact</span></a></li><li id="menu-item-6575" class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6575"><a href="https://theboutiquecake.com/faqs/"><span class="menu-title-text">FAQs</span></a></li></ul></li></ul></nav></div></div></div></header> */}