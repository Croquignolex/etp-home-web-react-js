import React from 'react';
import {Link} from "react-router-dom";

import '../assets/scss/error.scss';

const NotFoundPage = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404"/>
                <h1>404</h1>
                <h2>Oops! Page introuvable</h2>
                <p>
                    Désolé mais la page que vous recherchez n'esiste pas,
                    a été rétirée, a changée de nom ou est
                    temporairement indisponible
                </p>
                <Link to='/'>Retour</Link>
            </div>
        </div>
    );
};

export default React.memo(NotFoundPage)