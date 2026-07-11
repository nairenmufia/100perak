import { HeaderSitus } from "./components/HeaderSitus"
import { AplikasiAntrian } from "./AplikasiAntrian"
import { CaraBermain } from "./components/CaraBermain"
import { KakiSitus } from "./components/KakiSitus"

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <HeaderSitus />
      <AplikasiAntrian />
      <CaraBermain />
      <KakiSitus />
    </div>
  )
}
