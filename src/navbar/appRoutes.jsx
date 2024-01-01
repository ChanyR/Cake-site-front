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

export default function AppRoutes() {
    const { user, setUser } = useContext(AppContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        console.log(user);

    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <header className=' container-fluid sticky-top' style={{ background: "black", height: "80px" }}>
                {user!=null ?
                    <div className='d-flex justify-content-between align-items-center p-4'>
                        <div>
                            <Avatar sx={{ bgcolor: "#0D9488", margin: "0", direction: "rtl" }}
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {user?.name[0]}
                            </Avatar>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose} dir='rtl' ><Link to="/profile" className='text-decoration-none text-black py-2  px-0'><AccountCircleIcon color='turquoise' />פרופיל אישי</Link></MenuItem>
                                <MenuItem onClick={handleClose} dir='rtl' ><Link to="/like" className='text-decoration-none text-black py-2 px-0'><FavoriteBorderIcon color='turquoise' />אופים שמורים</Link></MenuItem>
                                <MenuItem onClick={handleClose} dir='rtl' ><Link to="/myOrders" className='text-decoration-none text-black py-2 px-0'><InsertInvitationIcon color='turquoise' />הזמנות שלי</Link></MenuItem>
                                <MenuItem onClick={handleClose} dir='rtl' ><Link to="/logout" className='text-decoration-none text-black py-2 px-0'><LogoutIcon color='turquoise' />יציאה</Link></MenuItem>
                                <MenuItem className='bg-dark' onClick={handleClose} dir='rtl' ><img className='me-3' src='https://i.ibb.co/Bs6MHb6/01.png' width={130} /></MenuItem>
                                {user.role == "baker" &&
                                    <MenuItem onClick={handleClose} dir='rtl' ><Link to="/profile" className='text-decoration-none text-black py-2  px-0'><AccountCircleIcon color='turquoise' />פרופיל האופה שלי</Link></MenuItem>
                                }
                                {user.role == "admin" && <>
                                    <MenuItem onClick={handleClose} dir='rtl' ><Link to="/usersManagement" className='text-decoration-none text-black py-2 px-0'><InsertInvitationIcon color='turquoise' />ניהול משתמשים</Link></MenuItem>
                                    <MenuItem onClick={handleClose} dir='rtl' ><Link to="/bakersManagement" className='text-decoration-none text-black py-2 px-0'><InsertInvitationIcon color='turquoise' />ניהול אופים</Link></MenuItem>
                                </>}
                            </Menu>
                        </div>

                        <nav className=''>
                            <Link to="/?page=1" className='me-3 btn btn-outline-light'><HomeIcon color="white" />
                            </Link>
                        </nav>

                    </div> :
                    <nav className='container p-4'>
                        <Link to="/login" className='me-3 btn btn-outline-light'>כניסה לאיזור האישי</Link>
                        <Link to="/" className='me-3 btn btn-outline-light'><HomeIcon color="white" /></Link>
                    </nav>
                }

            </header>
        </div>
    )
}
