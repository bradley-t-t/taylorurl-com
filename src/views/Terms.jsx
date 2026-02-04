import { motion } from 'framer-motion'
import PageHero from '@components/PageHero'

export default function Terms() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using TaylorURL's website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.`,
    },
    {
      title: '2. Services Description',
      content: `TaylorURL provides web development, application engineering, UI/UX design, and related digital services. The specific scope, deliverables, timeline, and pricing for each project will be outlined in a separate project agreement or statement of work.`,
    },
    {
      title: '3. Client Responsibilities',
      content: `Clients are responsible for providing timely feedback, necessary content and assets, accurate information for their projects, and payment according to agreed-upon terms. Delays in providing required materials may result in project timeline adjustments.`,
    },
    {
      title: '4. Payment Terms',
      content: `Pricing includes a one-time project fee and a recurring monthly maintenance fee. Additional charges may apply for external services such as API integrations, token usage, or advertising costs. Specific pricing will be outlined in individual project agreements. Late payments may incur additional fees.`,
    },
    {
      title: '5. Intellectual Property',
      content: `Upon full payment, clients receive ownership of the final deliverables created specifically for their project. TaylorURL retains the right to use general techniques, skills, and non-confidential elements in future projects. We may display completed work in our portfolio unless otherwise agreed.`,
    },
    {
      title: '6. Confidentiality',
      content: `Both parties agree to keep confidential any proprietary information shared during the course of the project. This includes business strategies, technical specifications, and any information marked as confidential.`,
    },
    {
      title: '7. Limitation of Liability',
      content: `TaylorURL shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.`,
    },
    {
      title: '8. Warranty Disclaimer',
      content: `Services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or meet your specific requirements beyond what is outlined in the project agreement.`,
    },
    {
      title: '9. Termination',
      content: `Either party may terminate services with written notice. Upon termination, the client is responsible for payment for all work completed up to the termination date. Any deposits or advance payments may be non-refundable depending on work already performed.`,
    },
    {
      title: '10. Modifications to Terms',
      content: `We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.`,
    },
    {
      title: '11. Governing Law',
      content: `These terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Harris County, Texas.`,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHero
        title="Terms of Service"
        description="Please read these terms carefully before using our services."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-sm text-gray-500">Effective Date: February 1, 2026</p>

            <div className="prose prose-gray max-w-none">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="mb-8"
                >
                  <h2 className="mb-4 text-xl font-semibold text-gray-900">{section.title}</h2>
                  <p className="text-gray-600">{section.content}</p>
                </motion.div>
              ))}

              <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h3 className="mb-2 font-semibold text-gray-900">Contact</h3>
                <p className="text-gray-600">
                  For questions about these Terms of Service, contact us at{' '}
                  <a href="mailto:trenton@taylorurl.com" className="text-gray-900 underline">
                    trenton@taylorurl.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
