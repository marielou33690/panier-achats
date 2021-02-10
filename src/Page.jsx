import './Page.scss';
import Entete from './Entete';
import Pied2Page from './Pied2Page';
import ListeProduits from './ListeProduits';
import {useState} from 'react';

export default function Page() {

  // Exemple de comment je vais stocker les articles dans le panier
  // const panier = ({
  //   prd0001: {"prix": 10.99, "qte": 1},
  //   prd0002: {"prix": 24.99, "qte": 1}
  // })

  const etatPanier = useState({});
  return (
    <div className="Page">
      <Entete etatPanier={etatPanier}/>
      <section className="contenuPrincipal">
        <ListeProduits etatPanier={etatPanier}/>
      </section>
      <Pied2Page />
    </div>
  );
}
