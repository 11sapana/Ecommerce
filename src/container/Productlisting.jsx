import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setproduct } from "../redux/action/ProductAction";
import Productcomponent from "./Productcomponent";



const Productlisting = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()


  const fetchproduct = async (data) => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err,) => {
      console.log("err", err)
    }
    )
    dispatch(setproduct(response.data))
  }

  useEffect(() => {
    fetchproduct()
  }, [])

  console.log("products: ", products)

  return (
    <div className="ui grid container">
      <Productcomponent />
    </div>
  )
}

export default Productlisting;