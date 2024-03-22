// définition du composant Section qui prend en argument les données d'une catégorie
const Section = ({ elem }) => {
  // récupération des props passées depuis App.js au composant Section
  return (
    <>
      <h2 className="title"> {elem.category}</h2>
      <div className="movies-list" key={elem.category}>
        {/* affiche le titre de la catégorie */}
        {/* itération sur les URL des images des films de la catégorie */}
        {elem.images.map((url) => {
          // affiche une image
          return <img key={url} src={url} alt="" />;
        })}
      </div>
    </>
    // Crée un élément contenant la liste des films d'une catégorie
  );
};
export default Section;
