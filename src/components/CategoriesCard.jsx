
import {Link} from "react-router-dom"

function CategoriesCard({cat: {id, name}}){
    return (
        <li>
       
       {<Link to={`/categories/${id}`}>{name}</Link>}
      </li>
    )
}

export default CategoriesCard


