import BasketItem from '../components/BasketItem'

export default function BasketPage({BasketItems}){

  let total = 0
  const basketItemsToTotal = BasketItems.map(item => {
    total += item.price * item.quantity
  })
   
    return(
        <main>
  <section class="basket-container">
    <h2>Your Basket</h2>
    <ul>
      {BasketItems.map(item => <BasketItem basketItem={item}/> )}
      
    </ul>
    {/* <!-- Basket total is calculated using each item's total from above --> */}
    <h3>Your total: £{total.toFixed(2)}</h3>
  </section>
</main>

    )
}