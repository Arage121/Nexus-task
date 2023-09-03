import Third from "@/components/Third";
import Homepage from "../components/Homepage";
import Second from "../components/Second";
import Forth from "@/components/Forth";
import Fifth from "@/components/Fifth";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">  
      </div> */}
      <Homepage />
      <Second />
      <Third />
      <Forth />
      <Fifth />
      <Footer />
    </main>
  )
}
