import IconFylo from "./icons/IconFylo";
import Menu from "./Menu"

const Header = () => {
  return (
    <header className="bg-[#1C2231]">
      <div className=" flex justify-between mx-auto p-4 px-4">
        <div className="">
          <IconFylo />
        </div>

        <div className="font-sans text-white font-light gap-4 inline-flex">
          <button> dark mode </button>
        <Menu/>

        </div>

      </div>

    </header>

  )
}
export default Header;