import Header from "./components/Header"
import WelcomeSection from "./components/WelcomeSection"
import SectionTabs from "./components/SectionTabs"

const App = () => {
  return (
    <div className="bg-[#1C2231]">

      <Header />

      <main className="bg-gradient-to-t from-[#435171] to-[#1C2231]">
        <WelcomeSection />
        <SectionTabs />
      </main>

    </div>
  )
}
export default App