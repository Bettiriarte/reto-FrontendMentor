import imgWelcome from "../assets/images/illustration-intro.png"
import OndasDesktop from "./icons/OndasDesktop"

const WelcomeSection = () => {
  return (
    <div className="bg-gradient-to-t from-[#435171] to-[#1C2231] my-6">


      <div className="px-20 flex flex-col container mx-20 mt-8">

        <img className="flex flex-col items-center md:h-auto md:w-auto" src={imgWelcome} />

        <h1 className="text-center text-white font-sans font-extrabold text-2xl p-3">
          Lorem ipsum dolor sit amet consectetur, adipiscing elit non.
        </h1>

        <p className=" text-center text-white font-sans font-light text-sm p-3">
          Lorem ipsum dolor sit amet consectetur adipiscing, elit ac pretium risus sem ligula per, ridiculus euismod nec imperdiet sodales Lorem ipsum dolor sit amet consectetur adipiscing.</p>

        <div className=" text-center mb-3">
          <button className="p2 bg-cyan-400 rounded-full px-12 py-3">Get Started</button>
        </div>
  

      </div>

    </div>

  )
}
export default WelcomeSection;