import { getDictionary } from "../../lib/dictionary";
import {
  Banner,
  Ourmission,
  Donators,
  Testimonials,
  Carddonation,
  Accordion,
  Form,
  Footer,
  Bloglist
} from "@/components";

export default async function Home({ params: { lang } }) {
  const { banner, missions, donators, goals, faq ,blogList, contact} =
    await getDictionary(lang);

  return (
    <main className="w-full content-center min-h-screen max-w-screen items-center px-4 md:px-24 bg-white">
      <Banner contentBanner={banner} />
      <Ourmission misssions={missions} />
      <Donators donators={donators} />
      <Carddonation goals={goals} />
      <Testimonials />
      <Accordion faq={faq} />
      <Bloglist blogList={blogList} />
      <Form contact={contact}/>
    </main>
  );
}
