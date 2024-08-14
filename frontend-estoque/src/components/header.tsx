export default function Header() {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="poppins text-8xl pb-6 font-bold">Boutique</h1>
      <nav className="flex gap-14">
        <a href="#" className="hover:font-bold font-bold">Todos</a>
        <a href="#" className="hover:font-bold">Perfumaria</a>
        <a href="#" className="hover:font-bold">Roupas</a>
        <a href="#" className="hover:font-bold">Utensílios</a>
      </nav>
    </div>
  )
}