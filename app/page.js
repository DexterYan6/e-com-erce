"use client"

import MainLayout from './layouts/MainLayout'
import Product from './components/Product'
import CarouselComp from "./components/CarouselComp"
import { useState, useEffect } from 'react'

export default function Home() {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch("/api/products")
    const prods = await response.json()

    setProducts([])
    setProducts(prods)
  }

  useEffect(() => {getProducts()}, [])

  return (
    <MainLayout>
      <CarouselComp />

      <div className="max-w-[1200px] mx-auto">
        <div className="text-3xl font-bold mt-4 mb-6 px-4">
          Products
        </div>

        <div className="grid grid-cols-5 gap-4">
          {products.map(product => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
