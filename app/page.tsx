import { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "ONOTO STUDIO - QR Code",
  twitter: { card: "summary_large_image" },
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
};

export default function Web() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center space-y-6 text-white"
      >
        <motion.img
          src="https://onoto.studio/wp-content/uploads/2025/04/qr-code-onoto.png"
          alt="QR Code ONOTO"
          className="w-64 h-64 rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        <motion.h1
          className="text-3xl font-semibold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Scannnez pour découvrir ONOTO
        </motion.h1>
      </motion.div>
    </main>
  );
}
