import { getDictionary } from "../../../lib/dictionary";
import { PeBanner, Partnership, CallToAction, PartnersLogos, ContactComp } from "@/components";

export default async function page({ params: { lang } }) {
  // const { donationPage } =await getDictionary(lang);
    return (
      <main className="bg-white ">
        <PeBanner />
        <CallToAction />
        <Partnership />
        <PartnersLogos />
        <ContactComp />
      </main>
    )
  }
  