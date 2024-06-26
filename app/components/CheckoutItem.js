"use client"

import {usePathname} from "next/navigation"

export default function CheckoutItem({product}) {

    const pathname = usePathname()

    return (
        <div className="flex justify-start rounded-lg mb-2 border p-4">
            <img className="rounded-md w-[150px] h-[150px]" src={product.url+'/150'}/>

            <div className="overflow-hidden pl-2">
                <div className="font-semibold">
                    {product.title}
                </div>

                <div className="font-semibold">
                    <span className="font-bold">
                        ${(product.price / 100).toFixed(2)}
                    </span>
                </div>
                
                <div className="text-sm mt-2">
                    {product?.description.substring(0, 150)}...
                </div>

                {pathname=='/cart' ?
                    <div className="text-sm mt-2 w-full flex justify-end underline text-blue-500 cursor-pointer">
                        Remove
                    </div>
                : null
                } 
            </div>
        </div>
    )
}