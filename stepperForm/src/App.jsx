import "./App.css";
import CheckoutStepper from "./components/CheckoutStepper";

const CHECKOUTSTEPS = [
  {
    name: "Customer Info",
    Component: () => <h1>Provider Your Contact details</h1>,
  },
  {
    name: "Shipping Info",
    Component: () => <h1>Provider Your Shipping details</h1>,
  },
  {
    name: "Payment Info",
    Component: () => <h1>Provider Your Payment details</h1>,
  },
  {
    name: "Deliverd",
    Component: () => <h1>Thank you!</h1>,
  },
];

function App() {
  return (
    <>
      <h1>
        <CheckoutStepper stepConfig={CHECKOUTSTEPS} />
      </h1>
    </>
  );
}

export default App;
