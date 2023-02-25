import {Stripe, loadStripe} from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

const _validateAngGetEnv =
    (): string =>
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?
            process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY :
            ""


const getStripe = () => {
    const key = _validateAngGetEnv()
    if (key.length < 1) {
        return Promise.reject('Stripe env key not set')
    }
    if (!stripePromise) {
        stripePromise = loadStripe(key);
    }
    return stripePromise;
};

export default getStripe;