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
    const basculerSommairePanier = () => setCacheSommaire(cacheSommaire ? false : true)
    
    // Accéder à l'état du panier
    const [panier, setPanier] = props.etatPanier; //décomposition de tableau

    // Calculer le nombre d'articles total du panier
    // Méthode 1: programmation imperative (moins expressive)
        // const articlesTab = Object.values(panier);
        // let nbArticles = 0;
        // for (let i = 0; i < articlesTab.length; i++) {
        //    nbArticles += articlesTab[i].qte;
        // }

    // Calculer le nombre d'articles total du panier
    // Méthode 2: programmation déclarative plus expressive
    const nbArticles = Object.values(panier).reduce((accumulateur, eltCourant) => accumulateur + eltCourant.qte, 0)

    // console.log("Le tableau des articles dans le panier", articlesTab);

    return(
        <header className="Entete">
            <div>Logo</div>
            <ul className="navPrincipale">
                <li>Produits</li>
                <li>À propos de nous</li>
            </ul>
            <ul className="navUtil">
                <li>
                <Badge onClick={basculerSommairePanier} badgeContent={nbArticles} color="primary">
                {/* <Badge onClick={() => setCacheSommaire(cacheSommaire ? false : true)} badgeContent={articlesTab.length} color="primary"> */}
                    <ShoppingCartIcon />
                </Badge>
                <SommairePanier cacher={cacheSommaire} etatPanier={props.etatPanier}/>
                </li>
                <li>Mon compte</li>
            </ul>
        </header>
    );
}