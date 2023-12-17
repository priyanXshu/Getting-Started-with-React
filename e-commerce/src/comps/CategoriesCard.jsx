const CategoriesCard = ({imgURL, title}) => {
  return (
    <div className="categories-card">
        <img src={imgURL} alt="" />
        <h4>{title}</h4>
    </div>
  )
}

export default CategoriesCard