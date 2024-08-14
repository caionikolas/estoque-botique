import Header from "./components/header";
import ProductList from "./components/product-list";

export function App() {
  return (
    <div className="bg-zinc-300 font-Pop">
      <div className="mx-20">
        <Header/>
        <div className="flex items-center justify-between pr-20 pl-6 pb-2 pt-10">
          <div className="flex items-center gap-4">
            <p>procurar</p>
            <input type="search"/>
          </div>
          <div>
            <p>Filtro</p>
          </div>
        </div>
        <ProductList/>
      </div>
    </div>
  )
}
