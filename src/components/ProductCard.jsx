import { Link } from "react-router-dom"

export default function ProductCard({ProductItem: {title, image, id}}){
 
    return(  <li>
        <Link to={`/products/${id}`}
          ><article className="product-item">
            <img
              src={image}
              alt={title}
            />
            <h3>{title}</h3>
          </article></Link>
      </li>
)
}

