"use client"

import Link from "next/link"
import { CiDeliveryTruck} from "react-icons/ci"
import MainLayout from "../layouts/MainLayout"
import { toast } from "react-toastify"
import { useState, useEffect } from "react"
import { useUser } from "../context/user"
import useIsLoading from "../context/useIsLoading"
import moment from "moment";

export default function Orders() {

    const {user} = useUser()
    const [orders, setOrders] = useState([])

    const getOrders = async() => {
        try {
            if (!user && !user?.id) return
            const response = await fetch("/api/orders")
            const result = await response.json()
            setOrders(result)
            useIsLoading(false)
        }catch (error) {
            toast.error("Something went wrong", {autoClose: 3500})
            useIsLoading(false)
        }
    }

    useEffect(() => {
        useIsLoading(true)
        getOrders()
    }, [user])

    return (
        <MainLayout>
            <div id="OrdersPage" className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
                <div className="bg-white w-full p-6 min-h-[150px]">
                    <div className="flex items-center text-xl">
                        <CiDeliveryTruck className="text-green-500" size={35}/>
                        <span className="pl-4">Your Orders</span>
                    </div>

                    {orders.length < 1 ?
                        <div className="flex items-center justify-center">
                            You have no order history
                        </div>
                    : null}

                    {orders.map(order => (
                        <div className="text-sm pl-[50px]">
                            <div className="border border-gray-300 p-4 rounded-lg">
                                <div className="pt-2 flex justify-between">
                                    <span className="font-bold mr-2">Order ID:</span>
                                    <span className="text-right">{order?.stripe_id}</span>
                                </div>

                                <div className="pt-2 flex justify-between">
                                    <span className="font-bold mr-2">Delivery Address:</span>
                                    <span className="text-right">{order?.name}, {order?.address}, {order?.zipcode}, {order?.city}, {order?.country}</span>
                                </div>

                                <div className="pt-2 flex justify-between">
                                    <span className="font-bold mr-2">Order Total:</span>
                                    <span className="text-right">${((order?.total / 100) * 1.13).toFixed(2)}</span>
                                </div>

                                <div className="pt-2 flex justify-between">
                                    <span className="font-bold mr-2">Delivery Time:</span>
                                    <span className="text-right">{moment(order?.created_at).add(3, "days").calendar()}</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    {order?.orderItem.map(item => (
                                        <div key={item.id} className="flex items-center">
                                            <Link href={`/product/${item.product_id}`} className="py-1 hover:underline text-blue-500 font-bold">
                                                <img className="rounded" width="120" src={item.product.url + '/120'}/>
                                                {item.product.title}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}