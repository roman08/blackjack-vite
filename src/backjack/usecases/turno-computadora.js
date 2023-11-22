import {pedirCarta, valorCarta, crearCartaHTML} from './';
/**
 * 
 * @param {Number} puntosMinimos puntos minimos para que gane la computadora
 * @param {HTMLElement } puntosHTML elemento HTML para mostar los puntos
 * @param {HTMLElement } divCartasComputadora elemento HTML para mostar las cartas
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosMinimos, puntosHtml, divCartasComputadora, deck = []) => {
    if (!puntosMinimos) throw new Error('puntosMinimos son necesarios');
    if (!puntosHtml) throw new Error('Argumento puntosHTML es necesario');
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHtml.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}