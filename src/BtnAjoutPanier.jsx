import "./BtnAjoutPanier.scss";
import Badge from '@material-ui/core/Badge';
import { useState } from "react";

export default function BtnAjoutPanier(props) {
    // console.log("Proprietes du bouton: ", props);

    // etat du badge du bouton
    const [btnQte, setBtnQte] = useState(0);
    return (
        <Badge badgeContent={0} color="secondary">
            <button 
            onClick={() => { 
                props.onClick();
                setBtnQte(btnQte+1);}
            } 
                className="BtnAjoutPanier">
                Ajouter au panier
            </button>
        </Badge >
    );
}