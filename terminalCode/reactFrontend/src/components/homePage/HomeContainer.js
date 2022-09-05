import React from "react";

import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { Grid, Paper, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import ForumIcon from '@mui/icons-material/Forum';
import "../../"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.025)' : '#fafafa',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
}));

export const HomeContainer = (props) => {



    const style = {
        height: '20px',
        width: '150px',
        margin: '30px',
        fontSize: '18px',
        textAlign: 'center',
        fontFamily: '\'Times New Roman\', Times, serif',
        color: '#0B1F64',
    }
    const logOut = {
        height: '20px',
        width: '150px',
        margin: '30px',
        fontSize: '12px',
        textAlign: 'center',
        color: '#0B1F64',
    }
    const icon_style = { fontSize: 90, marginBottom: "10px", color: " #7d91e7" };
    const h_style = { paddingTop: "120px", fontSize: "60px", textAlign: 'center', marginBottom: "10px", fontWeight: 'light', color: "#444", fontFamily: '\'Times New Roman\', Times, serif' };
    const funcs = [
        {
            icon: <TerminalIcon sx={icon_style}></TerminalIcon>,
            title: "Terminal",
            desc: "W celu zrozumienia dziłania wybranych poleceń przejdź do zakładki Terminal i wprowadź polecenia \"man\", aby zobaczyć które z nich możesz użyć.",
        },
        {
            icon: <SchoolIcon sx={icon_style}></SchoolIcon>,
            title: "Nauka",
            desc: `Nauka poprzez praktykę. Przechodząc do zakładki Quiz, będziesz mógł(-a) przejść do pozwiązywania quizu 
            lub najpierw przeczytać krótką teorię z przykładami.
            Podczas rozwiązywania quizu możesz sprawdzić poprawną odpowiedź, wprowadzając polecenie w terminalu.`,
        },
        {
            icon: <ForumIcon sx={icon_style}></ForumIcon>,
            title: "Forum",
            desc: "Na stronie możesz zostawić pytanie związane z terminalem, aby to zrobic przejź do zakładki Forum i został swoją wiadomość",
        },

    ];
    return (
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
            <div className="container" >
                <div>
                    <img alt='' src='img/logo.png' width={'100px'}></img>
                </div>
                <div className="mainMenu">
                    <Link to="/term"><Button className="btnMenu" size="large" style={style}>Terminal</Button></Link>
                    <Link to="/quiz"><Button className="btnMenu" size="large" style={style}>Quiz</Button></Link>
                    <Link to="/forum"><Button className="btnMenu" size="large" style={style} >Forum</Button></Link>
                </div>

                <div >
                    <Button size="large" style={logOut} onClick={e => { props.setLogToken() }} >Wyloguj się</Button>
                </div>

            </div>
            <div style={{ height: "370px", textAlign: "center", marginBottom: "30px", background: `radial-gradient(circle, #CAFFE3 0%, transparent 50%), radial-gradient(circle, #97a7eb 0%, transparent 100%)` }}>
                <Typography component="div" style={h_style}>
                    Witaj w TermTrain!
                </Typography>
                <p style={{ color: "#444", fontSize: "20px" }}>Poznaj bliżej polecenia terminala w systemie Linux.</p>

            </div>
            <Grid container item spacing={3} style={{ marginBottom: "10px" }} justifyContent="center">
                {funcs.map((it) => (
                    <Grid item xs={3}>
                        <Item>
                            {it.icon}
                            <Typography variant="h6" component="div" style={{ marginBottom: "10px" }}>
                                {it.title}
                            </Typography>
                            <p>{it.desc}</p>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default HomeContainer