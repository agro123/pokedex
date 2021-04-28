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
export default convertir