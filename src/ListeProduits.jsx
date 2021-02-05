import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/Produits.json';

export default function ListeProduits(props) {
    return(
        <div className="ListeProduits">
            <h2>Produits disponibles</h2>
            <ul>
                {
                    tabProduits.map(prd => 
                        <Produit id={prd.id} nom={prd.nom} prix={prd.prix} />
                    )
                }
            </ul>
        </div>
    );
}