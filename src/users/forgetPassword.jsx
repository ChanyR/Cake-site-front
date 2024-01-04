import { Avatar, ButtonBase, CssBaseline, Input, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { isExistEmailInDB, resetPassowrd, sendEmail } from '../services/functionApiService';
import { useNavigate } from 'react-router';


function ForgetPassword() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [openCode, setOpenCode] = useState(false);
    const [openNewPass, setOpenNewPass] = useState(false);
    const [errEmail, setErrEmail] = useState(false);
    const [emailChange, setEmailChange] = useState();
    const [alertMsg, setAlertMsg] = useState(false);
    const [errCode, setErrCode] = useState(false);
    const [tempPass, setTempPass] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const checkEmail = async () => {
        try {
            setErrEmail(false);
            setAlertMsg(false);
            let email = getValues('email');
            let isExist = await isExistEmailInDB(email);
            console.log(isExist);
            if (isExist.msg == "false") {
                setAlertMsg(true);
            }
            else {
                let resp = await sendEmail(email);
                console.log(resp);
                if (resp.status == "Email sent successfully") {
                    setTempPass(resp.code);
                    setOpenCode(true);
                    setEmailChange(email);
                }
                else {
                    setErrEmail(true)
                }
            }
        }
        catch (err) {
            setAlertMsg(true);
        }
    }

    const confirmCode = () => {
        if (document.querySelector("#code").value != tempPass) {
            setErrCode(true);
        }
        else {
            setOpenNewPass(true);
            setOpenCode(false);
            setErrCode(false);
        }
    }

    const onResetPassowrd = async (e) => {
        let body = {
            "tempPassword": tempPass,
            "newPassword": getValues('password'),
            "email": emailChange
        }
        let resp = await resetPassowrd(body);
        if (resp.modifiedCount == 1) {
            alert("הסיסמה עודכנה בהצלחה");
            navigate("/login");
        }
        else if (resp.msg == "user not exist") {
            setAlertMsg(true);
        }

    }

    return (
        <div className='img-fluid center text-white flex-column container-fluid' style={{ width: '100%', height: "86vh", marginTop: '0px', opacity: ".8", backgroundImage: "url(https://i.ibb.co/DYxZQGS/pexels-pixabay-261156.jpg)" }}>
            <Container dir='rtl' component="main" style={{ direction: "rtl", padding: "40px", width: "50%" }} >
                {alertMsg && <Alert severity="error" style={{marginBottom:'10px'}}>המשתמש אינו קיים במערכת, עליך <a href="/signup" style={{ textDecoration: 'underline' }}>להרשם</a></Alert>}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: "30px",
                    borderRadius: "20px",
                    //border: "2px solid #0D9488",
                    background: "white",
                    opacity: ".9",
                    boxShadow: "15px",
                    color: "white",
                }}>
                    <Avatar sx={{ m: 1, bgcolor: '#0D9488' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ color: "black" }}>
                        שיחזור סיסמה
                    </Typography>
                    <Box component="form" dir='rtl' noValidate onSubmit={handleSubmit(onResetPassowrd)} sx={{ mt: 1 }} width={"300px"}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-email">מייל</InputLabel>
                            <OutlinedInput
                                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                id="outlined-adornment-email"
                                margin="normal"
                                fullWidth
                                label="מייל"
                                dir="ltr"
                                type='email'
                                error={Boolean(errors.email)}
                                helperText={errors.email && "Email is required and must be a valid email address"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button className='btn bg-success-subtle text-dark' size="small" onClick={checkEmail}>שלח מייל<SendIcon className="ms-2" /></Button>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        {openCode && <div>
                            <p className='text-dark' style={{ marginTop: '20px' }}>הכנס כאן את הקוד שנשלח לך במייל</p>
                            <TextField
                                {...register('code', {
                                    required: true,
                                    validate: (val) => { return val == tempPass }
                                })
                                }
                                margin="normal"
                                fullWidth
                                id="code"
                                label="קוד"
                                name="code"
                                autoComplete="code"
                                style={{ marginTop: '0px' }}
                            />
                            {errCode && <div className='text-danger d-block' style={{ fontSize: "11px" }}>קוד שגוי</div>}
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: 'turquoise' }}
                                // color='turquoise'
                                onClick={confirmCode}>המשך</Button>
                        </div>}
                        {openNewPass && <div style={{ marginTop: '20px' }}>
                            <FormControl fullWidth variant="outlined" style={{ marginTop: '0px' }}>
                                <InputLabel htmlFor="outlined-adornment-password1">סיסמה חדשה</InputLabel>
                                <OutlinedInput
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                    })}
                                    id="outlined-adornment-password1"
                                    margin="normal"
                                    fullWidth
                                    label="סיסמה חדשה"
                                    dir="ltr"
                                    type={showPassword ? 'text' : 'password'}
                                    error={Boolean(errors.password)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <p style={{ direction: "rtl", color: "red" }}>{errors.password && (
                                    errors.password.type === 'required' ? "דרושה סיסמא" :
                                        errors.password.type === 'minLength' ? "הסיסמה חייבת להיות באורך של לפחות 6 תווים" :
                                            "הסיסמה חייבת להכיל לפחות אות אחת גדולה, ספרה אחת ותו מיוחד אחד"
                                )}</p>
                            </FormControl>
                            <FormControl fullWidth variant="outlined" style={{ marginTop: '0px' }}>
                                <InputLabel htmlFor="outlined-adornment-password2">אימות סיסמה</InputLabel>
                                <OutlinedInput
                                    {...register("passVerify", { required: true, validate: (val) => { return val == getValues("password") } })}
                                    id="outlined-adornment-password2"
                                    margin="normal"
                                    fullWidth
                                    label="אימות סיסמה"
                                    dir="ltr"
                                    type={showPassword ? 'text' : 'password'}
                                    error={Boolean(errors.passVerify)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <p style={{ direction: "rtl", color: "red" }}>{errors.passVerify && (
                                    errors.passVerify.type === 'required' ? "אימות סיסמה חובה" : "סיסמה לא תואמת"
                                )}</p>
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: 'turquoise' }}
                                // color='turquoise'
                                // onClick={onResetPassowrd}
                            >המשך</Button>
                        </div>}
                    </Box>
                </Box>
            </Container>
        </div >
    )
}

export default ForgetPassword