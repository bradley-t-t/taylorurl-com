import { motion } from 'framer-motion'
import PageHero from '@components/PageHero'

export default function License() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHero
        title="License"
        description="Terms governing the use of our software and deliverables."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm font-medium text-gray-900">
                MIT License with Additional Restrictions
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Copyright (c) 2026 TaylorURL / Trenton Taylor
              </p>
            </div>

            <div className="prose prose-gray max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                  Proprietary Software License
                </h2>
                <p className="mb-6 text-gray-600">
                  This software and associated documentation files (the &quot;Software&quot;) are
                  the exclusive property of TaylorURL and Trenton Taylor. The Software is protected
                  by copyright laws and international treaty provisions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="mb-4 text-xl font-semibold text-gray-900">Restrictions</h2>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h3 className="font-medium text-gray-900">1. No Copying or Distribution</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      You may not copy, distribute, publish, or transfer the Software or any portion
                      thereof to any third party without prior written consent from the copyright
                      holder.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h3 className="font-medium text-gray-900">2. No Modification</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      You may not modify, adapt, translate, reverse engineer, decompile,
                      disassemble, or create derivative works based on the Software.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h3 className="font-medium text-gray-900">3. No Commercial Use</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      You may not use the Software for commercial purposes without explicit written
                      permission from the copyright holder.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h3 className="font-medium text-gray-900">4. No Sublicensing</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      You may not sublicense, rent, lease, or lend the Software to any third party.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h3 className="font-medium text-gray-900">5. Confidentiality</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      The Software contains trade secrets and proprietary information. You agree to
                      maintain the confidentiality of the Software and not disclose it to any third
                      party.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8"
              >
                <h2 className="mb-4 text-xl font-semibold text-gray-900">Authorized Use</h2>
                <p className="text-gray-600">
                  Access to this Software is granted only to authorized clients who have entered
                  into a service agreement with TaylorURL. Unauthorized access, use, or distribution
                  is strictly prohibited and may result in civil and criminal penalties.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <h2 className="mb-4 text-xl font-semibold text-gray-900">Disclaimer</h2>
                <p className="text-gray-600">
                  THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS
                  OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
                  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <h2 className="mb-4 text-xl font-semibold text-gray-900">Enforcement</h2>
                <p className="text-gray-600">
                  Any violation of this license will result in immediate termination of your right
                  to use the Software and may result in legal action to recover damages and seek
                  injunctive relief.
                </p>
              </motion.div>

              <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h3 className="mb-2 font-semibold text-gray-900">Licensing Inquiries</h3>
                <p className="text-gray-600">
                  For licensing questions or permissions, contact us at{' '}
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
