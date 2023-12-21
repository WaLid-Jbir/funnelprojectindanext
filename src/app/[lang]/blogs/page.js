import { getDictionary } from "../../../lib/dictionary";
import BlogLang from "./BlogLang";

export default async function page({ params: { lang } }) {
  const { BlogPL, blogList } = await getDictionary(lang);
    return (
      <main>
        <BlogLang blogList ={blogList} BlogPL={BlogPL}/>
      </main>
    )
  }
  