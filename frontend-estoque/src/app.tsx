import Header from "./components/header";
import ProductList from "./components/product-list";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'

export function App() {
  return (
    <div className="max-w-[1850px] mx-auto py-5">
      <div className="mx-20">
        <Header/>
        <div className="flex items-center justify-between px-10 py-2">
          <div className="flex items-center gap-5">
            <h1 className="text-2xl">Produtos</h1>
            <div className="px-3 py-1.5 border border-black/90 flex items-center rounded-lg gap-3">
              <Search />
              <input className=" bg-transparent  text-sm placeholder:text-black/50 flex-1 outline-none" placeholder="Buscar Produto..."/>
            </div>
            
          </div>
          <div>
            <p className="text-2xl">Filtro</p>
          </div>
        </div>
        <ProductList/>
        <div className="flex justify-between items-center px-10 py-2">
          <p>Mostrando 1 de 7</p>
          <div className="flex items-center gap-6">
            <span>Pagina 1 de 10</span>
            <div className="flex gap-2">
              <button className="bg-black/30 border border-black/10 rounded-md p-1.5">
                <ChevronsLeft />
              </button>
              <button className="bg-black/30 border border-black/10 rounded-md p-1.5">
                <ChevronLeft />
              </button>
              <button className="bg-black/30 border border-black/10 rounded-md p-1.5">
                <ChevronRight />
              </button>
              <button className="bg-black/30 border border-black/10 rounded-md p-1.5">
                <ChevronsRight />
              </button>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
