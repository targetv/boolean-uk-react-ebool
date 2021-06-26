
import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import useFetch from "../hooks/useFetch"


function CategoriesResultsPage(){
    const {id} = useParams()
    const [filteredShopData] = useFetch("http://localhost:4000/products");

        if(!filteredShopData){
            return(
                <main>
                    <p>Loading Data</p>
                </main>
            )
        }
  

      const categorieFilteredData = filteredShopData.filter(item => item.categoryId == id)
    return (
        <main>
  <section className="products-container main-wrapper">
    <ul className="products-container__list">
        {categorieFilteredData.map(item => <ProductCard ProductItem={item}/>)}
    </ul>
  </section>
</main>

    )
}

export default CategoriesResultsPage