"use client"

import ProductComp from "./Product"
import {BiLoader} from 'react-icons/bi'

export default function SimilarItems() {
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
        <div>
            <div className="border-b py-1 max-w[1200px] mx-auto" />

            <div className="max-w-[1200px] mx-auto">
                <div className="font-bold text-2xl py-2 mt-4">Similar items</div>

                {products.length > 0?
                    <div className="grid grid-cols-5 gap-4">
                        {products.map(product =>(
                            <ProductComp key={product.id} product={product} />
                        ))}
                    </div>
                : <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center gap-4 font-semibold"> 
                        <BiLoader size={30} className="text-blue-400 animate-spin"/>
                        Loading Items...
                    </div>
                </div>
                }
            </div>
        </div>
    )
}