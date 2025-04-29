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
          <div className="mx-auto place-self-center max-w-full pl-[10px] pt-[10px] text-left">
            {/* Optionnel : réactive l’image si tu veux */}
            {/* <img 
              src="https://onoto.studio/wp-content/uploads/2025/04/ONOTO.gif" 
              alt="ONOTO" 
              className="mb-4 w-1/2 max-w-xs mx-auto"
            /> */}
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              ONOTO
            </h1>

            <h2 className="text-3xl text-gray-900 dark:text-white mb-6">
              Studio de design graphique
            </h2>

            <p className="mb-6 max-w-3xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Découvrez mes projets
              <br /> sur mon <a href="https://instagram.com/onoto.studio" className="text-[#d1400d]">Instagram</a>,
              <br /> sur ma page <a href="https://facebook.com/onoto.studio" className="text-[#d1400d]">Facebook</a>,
              <br /> sur mon <a href="https://onoto.studio" className="text-[#d1400d]">Site vitrine</a>,
              <br /> ou <a href="https://onoto.space" className="text-[#d1400d]">prenez rendez-vous</a>.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <Button href="https://instagram.com/onoto.studio">Instagram</Button>
              <Button href="https://facebook.com/onoto.studio">Facebook</Button>
              <Button href="https://onoto.studio">Site web</Button>
              <Button href="https://onoto.space">Prendre RDV</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
