import './SommairePanier.scss';

export default function SommairePanier(props) {
  // console.log("Etat du panier dans SommairePanier : ", props.etatPanier);
  const [panier, setPanier] = props.etatPanier;
  const infoPanier = retournerInfoPanier(panier);
  return(
    <div className={"SommairePanier" + (props.cacher?" cacher":"")}>
      <span className="nbArticles">Articles différents : </span>
      <span className="qteArticles">Articles totaux : </span>
      <span className="sousTotal">Sous-total: </span>
      <span className="tps">TPS : </span>
      <span className="tvq">TVQ : </span>
      <span className="total">Total : </span>
    </div>
  );
}

function retournerInfoPanier(pan) {
  let info = {}; //{nbArticles: 2, qteArticle: 18, sousTotal: 1234.87}

  // Sortir les articles et les mettre dans un tableau 
  let articles = Object.values(pan);
  console.log(articles);

  // Nombre d'articles differents
  info.nbArticles = articles.length

  // Quantite d'articles totale
  info.qteArticles = articles.reduce((valInit, valCourante) => valCourante.qte + valInit, 0); //valInit = 0 pour la premiere fois

  // Sous-total
  let sousTotal = articles.reduce((i, c) => c.prix*c.qte + i, 0);

}