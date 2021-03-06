import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props) {
    console.log('Panier dans Produit', props.etatPanier);
    
    /**
     * Ajouter l'article au panier
     */
    function ajouterArticle() {
        const [panier, setPanier] = props.etatPanier;
        
        if(panier[props.id]) {
            panier[props.id].qte++;
        }
        else{
            panier[props.id] = {prix : props.prix, qte:1}
        }
        // panier[props.id] ? panier[props.id].qte++ :  panier[props.id] = {prix : props.prix, qte:1}
        // Maintenant il faut changer l</tat du panier avec setPanier
        // Il faut passer a setPanier un NOUVEL objet (en clonant), car js considere le tableau selon la référence et non ses valeurs. donc étant donné que ce sont les valeurs qui ont changé et non la référence, il n'y a pas de changements selon js et c'est pour ca qu'il n'update pas le panier
        
        setPanier(JSON.parse(JSON.stringify(panier))); // {...panier} Spread operator
        console.log("Articles dans le panier", panier);
    }

    return(
        <li className="Produit">
            <div className="image">
                <img src={'images-produits/' + props.id + '.webp'} alt={props.nom}/>
            </div>
            <div className="info">
                <h3>{props.nom}</h3>
                <p className="prix">{props.prix} $CA</p>
                <BtnAjoutPanier onClick={ajouterArticle}/>
            </div>
        </li>
    );
}