import { HeaderSitus } from "./aplikasi/components/HeaderSitus"
import { AplikasiAntrian } from "./aplikasi/components/AplikasiAntrian"
import { CaraBermain } from "./aplikasi/components/CaraBermain"
import { KakiSitus } from "./aplikasi/components/KakiSitus"

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
