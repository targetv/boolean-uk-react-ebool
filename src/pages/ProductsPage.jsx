
import ProductCard from "../components/ProductCard"
import useFetch from '../hooks/useFetch'

function ProductsPage(){
    const [shopData] = useFetch("http://localhost:4000/products")
        if(!shopData){
            return(
                <main>
                    <p>Loading Data</p>
                </main>
            )
        }
    return (
        <main>
  <section className="products-container main-wrapper">
    <ul className="products-container__list">
        {shopData.map(item => <ProductCard ProductItem={item} key={item.id}/>)}
     
      
    </ul>
  </section>
</main>

    )
}

export default ProductsPage