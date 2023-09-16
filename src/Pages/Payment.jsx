import React from "react";
import PayCard from "../Components/PayCard";
import axios from "axios";
import Razorpay from "razorpay";

const Payment = () => {
    const handlePayment = async (amount) => {
        // console.log(window.Razorpay);

        // const {
        //     data: { key },
        // } = await axios.get("http://www.localhost:4500/pay/getkey");

        // const {
        //     data: { order },
        // } = await axios.post("http://localhost:4500/pay/checkout", {
        //     amount,
        // });

        // const options = {
        //     key,
        //     amount: order.amount,
        //     currency: "INR",
        //     name: "Testing Payment",
        //     description: "RazorPay Payment Integration",
        //     image: "https://dummyimage.com/460x460/e371e3/fff.png",
        //     order_id: order.id,
        //     callback_url: "http://localhost:4500/pay/paymentverification",
        //     prefill: {
        //         name: "User Name",
        //         email: "user.email@example.com",
        //         contact: "9999999999",
        //     },
        //     notes: {
        //         address: "Razorpay Corporate Office",
        //     },
        //     theme: {
        //         color: "#121212",
        //     },
        // };
        // const razor = new window.Razorpay(options);
        // razor.open();
    };
    return (
        <div>
            <PayCard
                amount={500}
                img={`https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`}
                handlePayment={handlePayment}
            />
            {/* <PayCard amount={1000} img={``} handlePayment={ } /> */}
        </div>
    );
};

export default Payment;
