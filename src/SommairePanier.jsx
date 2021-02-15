import './SommairePanier.scss';

export default function SommairePanier(props) {
  // console.log("Etat du panier dans SommairePanier : ", props.etatPanier);
  const [panier, setPanier] = props.etatPanier;
  const infoPanier = retournerInfoPanier(panier);
  return(
    <div className={"SommairePanier" + (props.cacher?" cacher":"")}>
      <span className="nbArticles">Articles différents : {infoPanier.nbArticles}</span>
      <span className="qteArticles">Articles totaux : {infoPanier.qteArticles}</span>
      <span className="sousTotal">Sous-total: {infoPanier.st}</span>
      <span className="tps">TPS : {infoPanier.tps}</span>
      <span className="tvq">TVQ : {infoPanier.tvq}</span>
      <span className="total">Total : {infoPanier.total}</span>
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
  let sousTotal = articles.reduce((accumulateur, articleCourant) => articleCourant.prix*articleCourant.qte + accumulateur, 0);
  info.st = sousTotal.toFixed(2);

  //TPS
  let tps = (sousTotal*0.05);
  info.tps = tps.toFixed(2);

  //TVQ
  let tvq = (sousTotal*0.09975);
  info.tvq = tvq.toFixed(2);

  //Total
  info.total = (sousTotal + tps + tvq).toFixed(2);

  return info;
}