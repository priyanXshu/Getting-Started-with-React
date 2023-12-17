import CategoriesCard from '../../comps/CategoriesCard'
import { categoryData } from '../../constants'
import './Categories.css'

const Categories = () => {
  return (
    <section id="catergories">
        <div className="title">
            <h2>Categories</h2>
        </div>
        <div className="categories-container container">
            {
                categoryData.map((category) => (
                    <CategoriesCard key={category.imgURL} {...category}/>
                ))
            }
        </div>
    </section>
  )
}

export default Categories