
import { getDictionary } from "@/lib/dictionary"
import { Navbar } from "."


export default async function Header({ lang }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header>
        <Navbar nav={navigation} lng={lang}/>
    </header>
  )
}
