import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css'
import { useFetch } from '../hooks/useFetch';
import CircularProgress from '@material-ui/core/CircularProgress';
const card = {
    nombre: 'Not found',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/104.png',
    tipo: 'Not found',
    hp: '000',
    defense: '000',
    attack: '000',
    speed: '000'
}
const convertir = (data) => {
    const info = {
        nombre: data.forms[0].name || 'no tiene',
        imagen: data.sprites.front_default || 'no tiene',
        tipo: data.types[0].type.name || 'no tiene',
        hp: data.stats[0].base_stat || 'no tiene',
        defense: data.stats[2].base_stat || 'no tiene',
        attack: data.stats[1].base_stat || 'no tiene',
        speed: data.stats[5].base_stat || 'no tiene',
    }
    return info
}
const Card = ({ pokemon = 'charizard' }) => {

    const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    const carta = data => {
        let info = card;
        if (data) {
            info = convertir(data);
        }
        const { nombre, imagen, tipo, hp, defense, attack, speed } = info;

        return (
            <div className="card">
                <div className='imagen'>
                    <h2>{nombre.toUpperCase()}</h2>
                    <img src={imagen}
                        alt='pokemon'
                        width='96' height='96'
                    />
                    <h2>{tipo.toUpperCase()}</h2>
                    <div className="descripcion">
                        <p>HP:      <span>{hp}</span></p>
                        <p>Defense: <span>{defense}</span></p>
                        <p>Attack:  <span>{attack}</span></p>
                        <p>Speed:   <span>{speed}</span></p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {loading ? <CircularProgress size={72} /> : carta(data)}
        </>
    )
}

Card.propTypes = {
    pokemon: PropTypes.string
};

export default Card;