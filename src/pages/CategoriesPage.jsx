
import CategoriesCard from '../components/CategoriesCard'
import useFetch from '../hooks/useFetch'

function CatagoriesPage(){
    const [categories] = useFetch("http://localhost:4000/categories")
    return(

        <main>
  <section class="categories-container main-wrapper">
    <ul class="categories-container__list">
        {categories.map(item => <CategoriesCard cat={item}/>)}
      
    </ul>
  </section>
</main>
    )
}

export default CatagoriesPage