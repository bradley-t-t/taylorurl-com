import { motion } from 'framer-motion'

export default function PageHero({ title, description }) {
  return (
    <section className="border-b border-gray-200 bg-white pb-12 pt-24 sm:pb-16 sm:pt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="logo-wave-dark mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-base text-gray-600 sm:text-lg">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
