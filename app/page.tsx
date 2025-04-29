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
            <img 
              src="https://onoto.studio/wp-content/uploads/2025/04/ONOTO.gif" 
              alt="ONOTO" 
              className="mb-4 w-1/2 max-w-xs mx-auto"  // Utilisation de max-w-xl et w-full pour une taille d'image plus appropriée
            />
            <h1 className="text-5xl text-gray-900 dark:text-white">ONOTO
            </h1>
            <p className="mb-6 max-w-3xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400 mx-auto">
              From ideas to shape
            </p>
            <Button href="https://instagram.com/onoto.studio" className="m-3">
              Instagram
            </Button>
            <Button href="https://facebook.com/onoto.studio" className="m-3">
              Facebook
            </Button>
            <Button href="https://onoto.studio" className="m-3">
              Site web
            </Button>
            <Button href="https://onoto.space" className="m-3">
              Prendre RDV
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
