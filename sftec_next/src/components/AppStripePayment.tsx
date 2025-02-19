"use client";

import AppStripePaymentForm from "@/components/AppStripePaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import appHelper from '@/helper/apphelper';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function AppStripePayment({ orderid, amount }: { orderid: string, amount: number }) {


  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-2">Make Payment</h1>
        <h2 className="text-2xl">
          of
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: appHelper.convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <AppStripePaymentForm orderid={orderid} amount={amount} />
      </Elements>
    </main>
  );
}
