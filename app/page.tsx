import { SiteHeader } from "@/components/site-header"
import { QueueApp } from "@/components/queue-app"
import { HowToPlay } from "@/components/how-to-play"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background pb-6">
      <SiteHeader />
      <QueueApp />
      <HowToPlay />
      <SiteFooter />
    </main>
  )
}
