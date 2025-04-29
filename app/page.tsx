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
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              ONOTO
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Je vous accompagne dans la mise en forme graphique et numérique de votre idée, en alliant créativité et structure. 
              <br />Conception d’identités visuelles, création de logos, élaboration de chartes graphiques, design de sites vitrines, flyers, cartes de visite et bien plus encore.
            </p>
            <Button href="https://instagram.com/onoto.studio" className="mr-3">
              Instagram
            </Button>
            <Button
              href="https://facebook.com/onoto.studio"
              intent="secondary"
            >
              Facebook
            </Button>
                        <Button
              href="https://onoto.studio"
              intent="secondary"
            >
              Site web
            </Button>
            <Button href="https://onoto.space" className="mr-3">
              Prendre RDV
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
