
import { useParams } from "react-router-dom"
import  useFetch from "../hooks/useFetch"

export default function ProductDetailPage({setBasket, basket}){
    const {id} = useParams()

    const [product] = useFetch(`http://localhost:4000/products/${id}`)
    
        const productToAdd = {
            categoryId: product.categoryId,
            image: product.image,
            id: product.id,
            price: product.price,
            title: product.title,
            quantity: 1
        }



    return(
        <main>
        <section className="product-detail main-wrapper">
          <img
            src={product.image}
            alt={product.title}
          />
          <div className="product-detail__side" >
            <h3></h3>
            <h2>{product.title}</h2>
            <p>
              {product.description}
            </p>
            <p>{`£${product.price}`}</p>
            {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
            <button onClick={() => {
                
                const updatedBasket = [...basket, productToAdd]
                setBasket(updatedBasket)
            }}>Add to basket</button>
          </div>
        </section>
      </main>
      
    )
}

