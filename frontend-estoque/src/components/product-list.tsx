import { useEffect, useState } from "react"

interface Product {
  name: string
  description: string | null
  image: string | null
  expirationDate: string | null
  tag: number
  quantidade: number
}

export default function ProductList(){
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const url = new URL('http://localhost:3333/products') 

    fetch('http://localhost:3333/products')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProducts(data.products)
      })
  }, [page])

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 p-4">
      {
        products.map((product) => {
          return (
            <div className="min-w-96 h-[26rem] bg-zinc-200 flex flex-col items-center p-2 gap-2 rounded-lg">
              <div className="w-72 h-64 flex justify-center bg-white rounded-lg">
                <img src={product.image ?? ''} alt="" className="max-h-64" />
              </div>
              <h2>{product.name}</h2>  
              <p className="text-wrap w-72 text-center">{product.description}</p>
              <p>{product.quantidade}</p>
              <p>{product.expirationDate}</p>
            </div> 
          )
        })
      }

    </div>
  )
}