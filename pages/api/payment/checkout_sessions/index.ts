import type {NextRequest, NextResponse} from "next/server";
import Stripe from 'stripe';
import type {NextApiRequest, NextApiResponse} from "next";
import {useSession} from "next-auth/react";
import {getServerSession} from "next-auth";
import {authOptions} from "../../auth/[...nextauth]"


const _validateAngGetEnv =
    (): string =>
        process.env.STRIPE_SECRET_KEY ?
            process.env.STRIPE_SECRET_KEY :
            ""

const stripe = new Stripe(_validateAngGetEnv(), {
    apiVersion: "2022-11-15"
})

const handler = async (req: NextApiRequest,
                       res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405)
            .setHeader('Allow', 'POST')
            .end('Method Not Allowed');
    }
    // const session = await getServerSession(req, res, authOptions)
    //
    // if (!session) {
    //     return res.status(401).json({statusCode: 401, message: 'your identity cannot be validated please reconnect'})
    // }

    // TODO the request body should contain a list af "TAP" product and for each as qty the number of day rent
    try {
        const origin = req.headers.origin;
        const sessionParam: Stripe.Checkout.SessionCreateParams = {
            line_items: [
                {
                    //TODO get the backend Mapping for device -> price ID
                    //TODO change the price id vor a real value
                    price: 'price_1MnCVKI8Qg1rn3okakZiU4aV',
                    quantity: 1, // the quantity act as the rental days number
                },
                {
                    //TODO get the backend Mapping for device -> price ID
                    //TODO change the price id vor a real value
                    price: 'price_1MnCYpI8Qg1rn3okpgLesvNF',
                    // quantity: 1, // the quantity act as the rental days number
                },
                {
                    //TODO get the backend Mapping for device -> price ID
                    //TODO change the price id vor a real value
                    price: 'price_1MnCxhI8Qg1rn3okPWCPNOki',
                    quantity: 2, // the quantity act as the rental days number
                },
                {
                    //TODO get the backend Mapping for device -> price ID
                    //TODO change the price id vor a real value
                    price: 'price_1MnCy3I8Qg1rn3okYKiHsbbc',
                    quantity: 1, // the quantity act as the rental days number
                }, {
                    //TODO get the backend Mapping for device -> price ID
                    //TODO change the price id vor a real value
                    price: 'price_1MnCzEI8Qg1rn3okui1evfbm',
                    quantity: 1, // the quantity act as the rental days number
                },
            ],
            // shipping_options: [
            //     {
            //         shipping_rate: 'shr_1MfX0eI8Qg1rn3ok9tzYo67o',
            //     }
            // ],
            subscription_data: {
                default_tax_rates: ['txr_1MnDc2I8Qg1rn3okwEHgKvyb', 'txr_1MnDelI8Qg1rn3oka1r4H8bt', 'txr_1MnDfMI8Qg1rn3okTZuTqStB'],
            },
            mode: "subscription",
            success_url: `${origin}/booking/?success=true`,
            cancel_url: `${origin}/booking/?canceled=true`,
        }

        const checkoutSession: Stripe.Checkout.Session =
            await stripe.checkout.sessions.create(sessionParam);

        if (checkoutSession.url === null) {
            return res.status(500).json({statusCode: 500, message: 'checkoutSession url is null'})
        }
        return res.status(200).json(checkoutSession);
    } catch (err) {
        const errorMessage =
            err instanceof Error ? err.message : 'Internal server error'
        return res.status(500).json({statusCode: 500, message: errorMessage})
    }

}

export default handler;