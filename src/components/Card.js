import React from 'react';
import '../styles/card.css'
import PropTypes from 'prop-types';

const card = {
    nombre: 'name',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
    tipo: 'type',
    hp: '000',
    defense: '000',
    attack: '000',
    speed: '000'
}

const Card = ({ info=card }) => {
    
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

Card.propTypes = {
    info: PropTypes.object
};

export default Card;