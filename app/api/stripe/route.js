import {NextResponse} from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function POST(req) {
    const supabase = createServerComponentClient({ cookies })

    try {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) throw Error()

        const body = await req.json()

        const stripe_sk_key = process.env.STRIPE_SK_KEY
        if (typeof stripe_sk_key === 'undefined') {
            throw new Error("Env var `stripe_sk_key` is not defined")
        }

        const stripe = require("stripe")(stripe_sk_key);

        const res = await stripe.paymentIntents.create({
            amount: Number(body.amount),
            currency: 'cad',
            automatic_payment_methods: { enabled: true }
        });
        
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return new NextResponse('Something went wrong', { status: 400 })
    }
}