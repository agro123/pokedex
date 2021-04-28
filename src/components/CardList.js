import React, { useState } from 'react';
import Card from './Card';
import { useFetch } from '../hooks/useFetch';
import CircularProgress from '@material-ui/core/CircularProgress';
import convertir from './convertir';

const CardList = () => {
    const [card, setCard] = useState({ cards: [], indice: 1 })

    const { cards, indice } = card;

    const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${indice}`);

    while (indice <= 20) {
        /* console.log(data) */
        /* const info = data;
        setCard({ ...card, cards: [...cards, <Card info={convertir(info)}  key={indice}/>], indice: indice++ }) */
    }

    return (
        <>
            {loading ? <CircularProgress size={72} /> : cards}
        </>
    )
}
export default CardList;