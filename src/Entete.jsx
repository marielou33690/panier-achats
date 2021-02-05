import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

export default function Entete(props) {
    return(
        <header className="Entete">
            <div>Logo</div>
            <ul className="navPrincipale">
                <li>Produits</li>
                <li>À propos de nous</li>
            </ul>
            <ul className="navUtil">
                <li>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon />
                </Badge>
                </li>
                <li>Mon compte</li>
            </ul>
        </header>
    );
}