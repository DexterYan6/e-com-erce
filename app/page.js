"use client"

import MainLayout from './layouts/MainLayout'
import Product from './components/Product'
import CarouselComp from "./components/CarouselComp"

export default function Home() {

  const products = [
    {
      id: 1,
      title: "Brown Leather Bag",
      description: "Random stuff",
      url: "https://picsum.photos/id/7",
      price: 6969
    },
    {
      id: 2,
      title: "School Books",
      description: "Random stuff again",
      url: "https://picsum.photos/id/20",
      price:7000
    }
  ]
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
