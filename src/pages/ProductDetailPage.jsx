
import { useParams, Link } from "react-router-dom"
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

      function productExist (){
        const findProduct = basket.find(item => item.id == id)
        
        if(findProduct){
          const updateBasket = basket.map(item => item.id == id ? {...item, quantity: item.quantity + 1} : item)
          setBasket(updateBasket)
        }
        else{
          const updatedBasket = [...basket, productToAdd]
          setBasket(updatedBasket)
        }
      
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
            <Link to="/basket" onClick={() => {
                productExist()
            }}><button>Add to basket</button></Link>
          </div>
        </section>
      </main>
      
    )
}

