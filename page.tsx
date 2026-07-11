    import { HeaderSitus } from "@/components/HeaderSitus"
    import { AplikasiAntrian } from "@/components/AplikasiAntrian"
    import { CaraBermain } from "@/components/CaraBermain"
    import { KakiSitus } from "@/components/KakiSitus"

    export default function Halaman() {
      return (
        <main className="min-h-screen bg-black">
          <HeaderSitus />
          <AplikasiAntrian />
          <CaraBermain />
          <KakiSitus />
        </main>
      )
    }
