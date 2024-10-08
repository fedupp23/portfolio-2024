export const Header = () => {
  return (
  <div className="flex justify-center items-center relative top-3 z-50 sticky ">
      <nav className="flex gap-1 p-0.5  border border-white/20 rounded-full bg-white/10 backdrop-blur">
        <a href="#"className="nav-item">Home</a>
        <a href="#"className="nav-item">Projects</a>
        <a href="#"className="nav-item">About</a>
        <a href="#"className="nav-item bg-white text-gray-900 hover:bg-white/90 hover:text-black">Contact</a>
      </nav>
  </div>
  )
};
