import { motion } from 'framer-motion'

export default function PageHero({ title, description }) {
  return (
    <section className="border-b border-gray-200 bg-white pb-16 pt-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">{title}</h1>
          {description && <p className="max-w-2xl text-lg text-gray-600">{description}</p>}
        </motion.div>
      </div>
    </section>
  )
}
