import { getDictionary } from "../../../lib/dictionary";
import { Big_card_donate } from "@/components";

export default async function page({ params: { lang } }) {
  const { donationPage } =
    await getDictionary(lang);
    return (
      <main>
        <Big_card_donate donationPage ={donationPage}/>
      </main>
    )
  }
  