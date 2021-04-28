import React, { useState } from 'react';
import '../styles/buscador.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card  from './Card';
import { useFetch } from '../hooks/useFetch';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import convertir from './convertir';

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

    const [pokemon, setPokemon] = useState({ nombre: '', mensaje: '', render: null });

    const { nombre, mensaje, render } = pokemon;

    const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);

    const onChange = ({ target }) => {
        setPokemon({ ...pokemon, nombre: target.value })
    }

    const onClick = () => {
        if (nombre !== '') {
            if (data) {
                const info = convertir(data)
                setPokemon({ ...pokemon, mensaje: '** We found it! **', render: <Card info={info} key='buscador'/> })
            } else {
                setPokemon({ ...pokemon, mensaje: "** We can't find it :c **", render: null })
            }
        } else {
            setPokemon({ ...pokemon, mensaje: '** Empty field **', render: null })
        }
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
                {loading ? <CircularProgress size={72} /> : render}
            </div>
        </div>
    )
}

export default Buscador;