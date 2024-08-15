export default function Header() {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-8xl pb-6 font-bold">Boutique</h1>
      <nav className="flex gap-12 text-lg">
        <a href="#" className="font-medium">Todos</a>
        <a href="#" >Perfumaria</a>
        <a href="#" >Roupas</a>
        <a href="#" >Utensílios</a>
      </nav>
    </div>
  )
}