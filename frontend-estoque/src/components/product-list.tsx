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
    <div className="flex flex-wrap justify-start gap-10 p-4">
      {
        products.map((product) => {
          return (
            <div className="min-w-96 h-[26rem] bg-white flex flex-col items-center p-2 rounded-lg">
              <div className="w-72 h-64 flex justify-center bg-white rounded-lg mb-3">
                <img src={product.image ?? ''} alt="" className="max-h-64" />
              </div>
              <h2 className="font-bold">{product.name}</h2>  
              <p className="text-wrap w-72 h-16 text-center pb-4">{product.description}</p>
              <p>Quant: {product.quantidade}</p>
              <p>Data Val.:{product.expirationDate}</p>
            </div> 
          )
        })
      }

    </div>
  )
}