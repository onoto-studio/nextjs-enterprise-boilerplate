import { Metadata } from "next"
import { Button } from "components/Button/Button"

import { LP_GRID_ITEMS } from "lp-items"

export const metadata: Metadata = {
  title: "ONOTO STUDIO",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://onoto.studio/wp-content/uploads/2025/04/ONOTO.gif",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-full px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center max-w-full">
            <h1 className="text-5xl text-left font-bold text-gray-900 dark:text-white">ONOTO
            </h1>
            <h2 className="text-left text-3xl text-gray-900 dark:text-white">
            </h2>
            <p className="mb-6 max-w-3xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400 mx-auto text-left">
              Découvrez mes projets
              <br /> sur mon <a href="https://instagram.com/onoto.studio" className="text-[#d1400d]">Instagram</a>,
              <br /> sur ma page <a href="https://facebook.com/onoto.studio" className="text-[#d1400d]">Facebook</a>,
              <br /> sur mon <a href="https://onoto.studio" className="text-[#d1400d]">Site vitrine</a>,
              <br /> ou <a href="https://onoto.space" className="text-[#d1400d]">prenez rendez-vous</a>,
            </p> 
          </div>
        </div>
      </section>
    </>
  );
}
