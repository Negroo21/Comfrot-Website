import { Fragment, useContext, useEffect } from "react"
import Section from "../components/Section"
import {products ,discoutProducts } from "../utils/products"
import { DataContainer } from "../App"

const BigDiscount = () => {
  const {addToCart} =useContext(DataContainer);
  const newArrivalData = products.filter(item => item.category ==="mobile" || item.category ==="wireless");
  const bestSales = products.filter(item => item.category ==="sofa");
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return (
    <Fragment>
      <Section title="Big Discount" bgColor="#f6f9fc" productItems={discoutProducts} addToCart={addToCart}/>
      </Fragment>
  )
}

export default BigDiscount