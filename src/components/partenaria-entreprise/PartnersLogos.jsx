import { LogosComp } from '..' 

export default function PartnersLogos() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="font-extrabold text-4xl mb-4">Trusted by over <span className=' text-orange-500'>20,000</span> <span className=' text-violet-500'>companies</span> all over the world</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">We are thankful to each and every company sponsored our plugin which helped us to continue working on it.</p>
          </div>
          <LogosComp />
        </div>
      </div>
    </section>
  )
}