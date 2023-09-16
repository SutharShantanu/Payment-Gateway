import React from "react";
import PayCard from "../Components/PayCard";
import axios from "axios";

const Payment = () => {
    const handlePayment = async (amount) => {
        try {
            const KeyData = await axios.get(`http://localhost:4500/pay/getkey`);
            console.log(KeyData.data.key);
            // const key = KeyData.data.key;
            // key = JSON.stringify(key);

            const OrderData = await axios.post(
                `http://localhost:4500/pay/checkout`,
                { amount }
            );

            console.log(OrderData);

            // const order = OrderData.data;
            // console.log(order);
            // order = JSON.stringify(order);

            // const {
            //     data: { order },
            // } = await axios.post("http://localhost:4500/pay/checkout", {
            //     amount,
            // });
            // console.log(order, key);

            // const options = {
            //     key,
            //     amount: order.amount,
            //     currency: "INR",
            //     name: "6 Pack Programmer",
            //     description: "Tutorial of RazorPay",
            //     image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            //     order_id: order.id,
            //     callback_url: "http://localhost:4500/pay/paymentverification",
            //     prefill: {
            //         name: "Gaurav Kumar",
            //         email: "gaurav.kumar@example.com",
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
        } catch (error) {
            console.log(error.message);
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
