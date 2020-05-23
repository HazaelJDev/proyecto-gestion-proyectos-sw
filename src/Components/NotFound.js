import React from 'react';
import '../css/not-found.css';
import imgNotFound from '../img/notfound.png'

function NotFound(){
    return( 
        <section class="notfound">
            <figure><img className="imgnotfound" src={imgNotFound} alt="Not Found" /></figure>
            <h1 id="PrimerText">Lo sentimos, el servidor no pudo encontrar esta ruta :(</h1>
            <h3 id="SegundoText">¡Revisa que este bien escrita tu petición!</h3>
        </section>
    );
}

export default NotFound;