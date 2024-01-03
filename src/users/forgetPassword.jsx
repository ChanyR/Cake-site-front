import { Avatar, Button, CssBaseline, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef } from 'react'
import { Alert, Container, FormControl } from 'react-bootstrap'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';

function ForgetPassword() {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const emailRef = useRef()

    const onSub=()=>{

    }

    return (
        <div className='img-fluid center text-white flex-column container-fluid' style={{ opacity: ".8", backgroundImage: "url(https://i.ibb.co/DYxZQGS/pexels-pixabay-261156.jpg)" }}>

            <Container dir='rtl' component="main" maxWidth="xs" >
                {/* {errEmail && <Alert severity="error">המשתמש אינו קיים במערכת</Alert>} */}
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 3,
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
                    }}

                >
                     <Avatar sx={{ m: 1, bgcolor: '#0D9488' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ color: "black" }}>
                        שיחזור סיסמה
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSub)} sx={{ mt: 1 }} width={"300px"}>

                        {/*<FormControl fullWidth sx={{ my: 2 }} variant="outlined">
                            <InputLabel color='turquoise'>מייל</InputLabel>
                            <OutlinedInput
                                inputRef={emailRef}
                                margin="normal"
                                fullWidth
                                id="email"
                                label="מייל"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                color='turquoise'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button className='btn bg-success-subtle text-dark' size="small" onClick={checkEmail}>שלח מייל</Button>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>*/}
                    </Box>
                </Box> 
            </Container>
        </div >
    )
}

export default ForgetPassword