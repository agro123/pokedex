import React, { useState } from 'react';
import '../styles/buscador.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card  from './Card';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '24ch',
        }
    },
    button: {
        width: '20px',
        marginTop: '24px',
    }
}));

const Buscador = () => {
    const classes = useStyles();

    const [pokemon, setPokemon] = useState({ nombre: '', mensaje: '', pika: 'charizard'});

    const { nombre, mensaje,pika } = pokemon;

    const onChange = ({ target }) => {
        setPokemon({ ...pokemon, nombre: target.value, mensaje: '' })
    }

    const onClick = () => {
        if (nombre !== '') {
           setPokemon({...pokemon, pika: nombre})
        } else {
            setMensaje('** Empty Field!!! **')
        }
    }

    const setMensaje = mensaje => {
        setPokemon({...pokemon, mensaje: mensaje})
    }
    return (
        <div className="buscador-content">
            <div className="buscar">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField onChange={onChange} id="standard-basic" label="Search Pokémon" value={nombre} />
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={onClick}
                    >
                        <SearchIcon />
                    </Button>
                </form>
                <p className="status">{mensaje}</p>
            </div>
            <div className="mostrar">
                <Card pokemon={pika}/>
            </div>
        </div>
    )
}

export default Buscador;