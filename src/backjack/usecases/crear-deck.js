import _ from 'underscore';

/**
 * Crea un nuevo deck
 * @param   {Array<String>} tiposDecartas Ejemplo : ['C', 'D', 'H', 'S']
 * @param   {Array<String>} tiposEspeciales Ejmeplo : ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna un arreglo de cartas
 */

export const crearDeck = (tiposDecartas, tiposEspeciales) => {

    if (!tiposDecartas || tiposDecartas.length == 0) throw new Error('TiposDeCarta es obligartorio como un arreglo de string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDecartas) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDecartas) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
}


// export default crearDeck;