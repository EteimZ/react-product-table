import FilterableProductTable from "./components/FilterableProductTable";
import "./App.css";

const PRODUCTS = [
  { category: "Fruits", price: "₦250", stocked: true, name: "Apple" },
  { category: "Fruits", price: "₦200", stocked: true, name: "Banana" },
  { category: "Fruits", price: "₦400", stocked: false, name: "Strawberry" },
  { category: "Vegetables", price: "₦350", stocked: true, name: "Garbage" },
  { category: "Vegetables", price: "₦100", stocked: false, name: "Tomato" },
  { category: "Vegetables", price: "₦50", stocked: true, name: "Okra" },
];

function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
