function BasketItem({basketItem: {image, title, price, quantity}}){
    const quantities = Array(quantity + 1).fill().map((item, index) => index)
    return (
        <li>
        <article className="basket-container__item">
          <img
            src={image}
            alt={title}
            width="90"
          />
          <p>{title}</p>
          <p>
            Qty:
            <select
             value={quantity}>{quantities.map(itemQuantity => (
                <option>{itemQuantity}</option>
             ))}
            </select>
          </p>
          {/* <!-- The item total is calculated using the Qty selected value --> */}
          <p>Item total: £{price * quantity}</p>
        </article>
      </li>
    )
}

export default BasketItem

