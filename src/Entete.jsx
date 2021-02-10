import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import { useState } from 'react';

export default function Entete(props) {
    // const etatCacherSommairePanier = useState(true);
    // console.log("La variable etatCacherSommairePanier : ", etatCacherSommairePanier);
   
    // Ca meme truc que avec decomposition de tableau
    // const tabEtatCacher = useState(true)
    // console.log("Etat du SP : ", tabEtatCacher[0]);

    //Avec la décomposition du tableau c'est plus facile
    const [cacheSommaire, setCacheSommaire] = useState(true);
    // console.log("Etat du SP : ", cacheSommaire);

    // const basculerSommairePanier = () => setCacheSommaire(cacheSommaire ? false : true)
    return(
        <header className="Entete">
            <div>Logo</div>
            <ul className="navPrincipale">
                <li>Produits</li>
                <li>À propos de nous</li>
            </ul>
            <ul className="navUtil">
                <li>
                <Badge onClick={() => setCacheSommaire(cacheSommaire ? false : true)} badgeContent={4} color="primary">
                    <ShoppingCartIcon />
                </Badge>
                <SommairePanier cacher={cacheSommaire} etatPanier={props.etatPanier}/>
                </li>
                <li>Mon compte</li>
            </ul>
        </header>
    );
}