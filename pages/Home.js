import { Fragment, useContext, useEffect } from "react"
import Section from "../components/Section"
import {products ,discoutProducts } from "../utils/products"
import { DataContainer } from "../App"
import SliderHome from "../components/Slider"
import Form from '../pages/Form'

const Home = () => {
  const {addToCart} =useContext(DataContainer);
  const newArrivalData = products.filter(item => item.category ==="mobile" || item.category ==="wireless");
  const bestSales = products.filter(item => item.category ==="sofa");
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return (
    <Fragment>
      <SliderHome/>
      <Section title="Big Discount" bgColor="#f6f9fc" productItems={discoutProducts} addToCart={addToCart}/>
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} addToCart={addToCart}/>
      <Section title="New Arrivals" bgColor="white" productItems={newArrivalData} addToCart={addToCart}/>
    </Fragment>
  )
}

export default Home
