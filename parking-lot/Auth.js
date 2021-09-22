import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import  LockOutlinedIcon   from '@material-ui/icons/LockOutlined';
import useStyles from './styles.js';
import Input from './Input.js';



// function Auth() {
//     const classes = useStyles();
//     return (
//         <Container component="main" maxWidth="xs">
//             <Paper className={classes.paper} elevation={3}>
//                 <Avatar className="classes.avatar">
//                     <LockOutlinedIcon />
//                 </Avatar>
//             </Paper>
//         </Container>
//     )
// }





const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const isSignup = false;
    const handleSubmit = () => {
        console.log('submit');
    }
    const handleChange = () => {
        console.log('change');
    }
    // this toggles setShowPassword
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                                )
                        }
                        <Input name="email" label="Email" handleChange={handleChange} type="email" />
                        {/* if showPassword is true, show text, otherwise, show password.  this allows view to see password at entry */}
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {/* if isSIgnup, display content below in place of line above. */}
                        { isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button tpe="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                </form>
            </Paper>
        </Container>
    
    );
    
};


export default Auth
