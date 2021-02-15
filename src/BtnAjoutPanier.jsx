import "./BtnAjoutPanier.scss";
import Badge from '@material-ui/core/Badge';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useState } from "react";

export default function BtnAjoutPanier(props) {
    // console.log("Proprietes du bouton: ", props);

    // etat du badge du bouton
    const [btnQte, setBtnQte] = useState(0);
    const [btnTexte, setBtnTexte] = useState('Ajouter au panier');
    return (
        <Badge badgeContent={btnQte} color="secondary">
            <button 
            onClick={(event) => { 
                props.onClick();
                setBtnQte(btnQte+1);
                setBtnTexte(<AddCircleIcon/>);
                event.target.classList.add('rouge');
            }} 
                className="BtnAjoutPanier">
                {btnTexte}
            </button>
        </Badge >
    );
}