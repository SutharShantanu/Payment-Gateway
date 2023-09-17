import React from "react";
import PayCard from "../Components/PayCard";
import axios from "axios";

const Payment = () => {
    const handlePayment = async (amount) => {
        console.log(amount);
        try {
            const data = await axios.get("http://localhost:4500/pay/getkey");
            console.log(data.data.key);

            const orderResponse = await axios
                .post("http://localhost:4500/pay/checkout", { amount })
                .then((res) => {
                    return res.data.order;
                    // console.log(res.data.order);
                })
                .catch((err) => {
                    console.log(err);
                });

            console.log(orderResponse);

            const options = {
                key: data.data.key,
                amount: orderResponse.amount,
                currency: "INR",
                name: "RazorPay Payment Gateway",
                description: "Tutorial of RazorPay",
                image: "https://avatars.githubusercontent.com/u/110021464?v=4",
                order_id: orderResponse.id,
                callback_url: "http://localhost:4500/pay/paymentverification",
                prefill: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#121212",
                },
            };

            const razor = new window.Razorpay(options);
            razor.open();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <PayCard
                amount={5000}
                img={`https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`}
                handlePayment={handlePayment}
            />
            {/* <PayCard amount={1000} img={``} handlePayment={ } /> */}
        </div>
    );
};

export default Payment;
