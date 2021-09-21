import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import { LockedOutlinedIcon }  from '@material-ui/icons/LockOutlined';
import useStyles from './styles';


const Auth = () => {
    const classes = useStyles();
    const isSignup = false;
    const handleSubmit = () => {
        console.log('submit');
    }
    const handleChange = () => {
        console.log('change');
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockedOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                <TextField name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6} />
                                <TextField name="lastName" label="Last Name" handleChange={handleChange} autoFocus xs={6} />
                                </>
                                )
                        }
                    </Grid>
                </form>
            </Paper>
        </Container>
    
    );
};


export default Auth
