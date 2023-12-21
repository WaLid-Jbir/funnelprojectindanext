
import { getDictionary } from "@/lib/dictionary"
import { Footer } from "."


export default async function Footerlang({ lang }) {
  const { footer } = await getDictionary(lang)

  return (
    <header>
        <Footer footer={footer} />
    </header>
  )
}
