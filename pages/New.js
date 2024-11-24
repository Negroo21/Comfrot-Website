import { Fragment, useContext, useEffect } from "react"
import Section from "../components/Section"
import {products ,discoutProducts } from "../utils/products"
import { DataContainer } from "../App"
const NewArrivals = () => {
  const {addToCart} =useContext(DataContainer);
  const newArrivalData = products.filter(item => item.category ==="mobile" || item.category ==="wireless");
  const bestSales = products.filter(item => item.category ==="sofa");
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return (
    <Fragment>
      <Section title="New Arrivals" bgColor="white" productItems={newArrivalData} addToCart={addToCart}/>
    </Fragment>
  )
}

export default NewArrivals
