import { HeaderSitus } from "./components/HeaderSitus"
import { AplikasiAntrian } from "./components/AplikasiAntrian"
import { CaraBermain } from "./components/CaraBermain"
import { KakiSitus } from "./components/KakiSitus"

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <HeaderSitus />
      <AplikasiAntrian />
      <CaraBermain />
      <KakiSitus />
    </div>
  )
}
