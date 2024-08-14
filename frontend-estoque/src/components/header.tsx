export default function Header() {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-8xl pb-6 font-bold">Boutique</h1>
      <nav className="flex gap-14">
        <a href="#" className="hover:bg-blue-500 font-bold">Todos</a>
        <a href="#" className="hover:bg-blue-500">Perfumaria</a>
        <a href="#" className="hover:bg-blue-500">Roupas</a>
        <a href="#" className="hover:bg-blue-500">Utensílios</a>
      </nav>
    </div>
  )
}