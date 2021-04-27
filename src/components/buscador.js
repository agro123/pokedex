import React from 'react';
import '../styles/buscador.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '20ch',
        },
    },
    button: {
        width: '40px',
        marginTop: '24px',
    }

}));

export const Buscador = () => {
    const classes = useStyles();

    const mensaje = "Aqui se deberia mostrar un error";
    return (
        <div className="buscador-content">
            <div className="buscar">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Buscar Pokemon" />
                    <Button className={classes.button} variant="contained" color="primary" size="small">
                        <SearchIcon />
                    </Button>
                </form>
                <p className="status">{mensaje}</p>
            </div>
            <div className="mostrar">
            </div>
        </div>
    )
}
