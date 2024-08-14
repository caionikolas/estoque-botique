import Header from "./components/header";
import ProductList from "./components/product-list";

export function App() {
  return (
    <div className="bg-zinc-800">
      <div className="bg-white mx-60">
        <Header/>
        <ProductList/>
      </div>
    </div>
  )
}
