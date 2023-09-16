import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentSuccess from "../Pages/PaymentSucess";
import Payment from "../Pages/Payment";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Payment />} />
                <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            </Routes>
        </Router>
    );
}

export default App;
