import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  ArrowRight,
  Zap,
  Code,
  TrendingUp,
  Search,
  Clock,
  DollarSign,
  Users,
  Smartphone,
  Shield,
  MessageSquare,
  Check,
  Star,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

export default function Home() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = e => {
    e.preventDefault()
    window.location.href = `mailto:trenton@taylorurl.com?subject=Newsletter Signup&body=Please add me to your newsletter: ${email}`
    setEmail('')
  }

  return (
    <div className="pt-20">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600"
            >
              <MapPin className="h-4 w-4" />
              Serving local businesses in the Houston area
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl"
            >
              Your Business Deserves
              <br />
              <span className="logo-wave-dark">A Professional Website</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12 max-w-2xl text-xl leading-relaxed text-gray-600"
            >
              Stop losing customers to competitors with better websites. Get a fast, mobile-friendly
              site that turns visitors into paying customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-gray-900 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"
              >
                Get Your Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-900 px-8 py-4 text-lg font-medium text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
              >
                See Pricing
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex items-center gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-700" />
                No contracts
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-700" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-700" />
                Free consultation
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Is Your Business <span className="logo-wave-dark">Invisible Online?</span>
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                97% of consumers search online for local businesses. Without a website, you're
                invisible to potential customers actively looking for your services.
              </p>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  How Customers Find Local Businesses
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart
                    data={[
                      { name: 'Google Search', value: 46 },
                      { name: 'Social Media', value: 24 },
                      { name: 'Word of Mouth', value: 18 },
                      { name: 'Direct Visit', value: 8 },
                      { name: 'Other', value: 4 },
                    ]}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 90, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                    <XAxis
                      type="number"
                      domain={[0, 50]}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                      axisLine={false}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{ fill: '#374151', fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      formatter={value => [`${value}%`, 'Percentage']}
                      contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                    />
                    <Bar dataKey="value" fill="#111827" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="mb-8 text-center">
                <div className="text-7xl font-bold text-gray-900">46%</div>
                <div className="mt-2 text-lg text-gray-600">of all searches have local intent</div>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900">97%</div>
                  <div className="text-sm text-gray-500">search online first</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">72%</div>
                  <div className="text-sm text-gray-500">visit within 5 miles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">88%</div>
                  <div className="text-sm text-gray-500">trust online reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-gray-200 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
                Service Area
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Serving the <span className="logo-wave-dark">Greater Houston Area</span>
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                From downtown Houston to the surrounding suburbs, we help local businesses establish
                their online presence across the entire metro area.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="rounded-lg bg-gray-100 p-4 text-center">
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Square Miles</div>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 text-center">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Cities Served</div>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 text-center">
                  <div className="text-3xl font-bold text-gray-900">7M+</div>
                  <div className="text-sm text-gray-600">Population</div>
                </div>
              </div>
            </div>
            <div className="relative z-0 overflow-hidden rounded-xl border border-gray-200">
              <MapContainer
                center={[29.7604, -95.3698]}
                zoom={9}
                style={{ height: '400px', width: '100%', zIndex: 0 }}
                scrollWheelZoom={false}
                zoomControl={false}
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap"
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <Circle
                  center={[29.7604, -95.3698]}
                  radius={80467}
                  pathOptions={{
                    color: '#374151',
                    fillColor: '#6b7280',
                    fillOpacity: 0.2,
                    weight: 2,
                  }}
                />
                <Marker position={[29.7604, -95.3698]}>
                  <Popup>
                    <strong>TaylorURL</strong>
                    <br />
                    Houston, TX
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Local Businesses <span className="logo-wave-dark">Need a Website</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A professional website is no longer optional. It's how customers find you, trust you,
              and choose you over the competition.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Get Found on Google',
                desc: 'Show up when customers search for services like yours in your area. No website means no visibility.',
                icon: Search,
              },
              {
                title: 'Open 24/7',
                desc: 'Your website works while you sleep. Customers can learn about you, see your work, and contact you anytime.',
                icon: Clock,
              },
              {
                title: 'Build Trust Instantly',
                desc: "75% of consumers judge a business's credibility based on their website design.",
                icon: Shield,
              },
              {
                title: 'Reach More Customers',
                desc: 'Expand beyond word-of-mouth. A website lets you reach customers across your entire service area.',
                icon: Users,
              },
              {
                title: 'Mobile-First Design',
                desc: '60% of searches happen on phones. Your site will look perfect on every device.',
                icon: Smartphone,
              },
              {
                title: 'Affordable Investment',
                desc: 'For less than a cup of coffee per day, get a professional online presence that pays for itself.',
                icon: DollarSign,
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-gray-200 bg-white p-8"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <Icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="leading-relaxed text-gray-600">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-900">
                Growth Data
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Websites Drive <span className="logo-wave-dark">Real Business Growth</span>
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Businesses that invest in professional websites see consistent revenue growth
                compared to those relying solely on word-of-mouth and social media.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <div className="text-3xl font-bold text-gray-900">+110%</div>
                  <div className="text-sm text-gray-600">Average revenue increase with website</div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <div className="text-3xl font-bold text-gray-400">+10%</div>
                  <div className="text-sm text-gray-600">Without website (same period)</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Revenue Growth Comparison (12 Months)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={[
                    { month: 'Jan', withSite: 100, withoutSite: 100 },
                    { month: 'Mar', withSite: 118, withoutSite: 102 },
                    { month: 'May', withSite: 140, withoutSite: 104 },
                    { month: 'Jul', withSite: 165, withoutSite: 106 },
                    { month: 'Sep', withSite: 188, withoutSite: 108 },
                    { month: 'Nov', withSite: 210, withoutSite: 110 },
                  ]}
                  margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    domain={[90, 220]}
                  />
                  <Tooltip
                    formatter={(value, name) => [
                      `${value}%`,
                      name === 'withSite' ? 'With Website' : 'Without Website',
                    ]}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="withSite"
                    stroke="#111827"
                    strokeWidth={3}
                    dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                    name="withSite"
                  />
                  <Line
                    type="monotone"
                    dataKey="withoutSite"
                    stroke="#d1d5db"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: '#d1d5db', strokeWidth: 2, r: 3 }}
                    name="withoutSite"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 flex justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-8 rounded-full bg-blue-600" />
                  <span className="text-gray-600">With Website</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-8 border-t-2 border-dashed border-gray-300" />
                  <span className="text-gray-600">Without Website</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 rounded-xl border border-gray-200 bg-white p-6 lg:order-1">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Mobile Search Share by Year
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={[
                    { year: '2022', mobile: 58, desktop: 42 },
                    { year: '2024', mobile: 64, desktop: 36 },
                    { year: '2026', mobile: 70, desktop: 30 },
                  ]}
                  margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    formatter={value => [`${value}%`, 'Share']}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                  />
                  <Bar
                    dataKey="mobile"
                    fill="#111827"
                    name="Mobile"
                    radius={[4, 4, 0, 0]}
                    barSize={40}
                  />
                  <Bar
                    dataKey="desktop"
                    fill="#e5e7eb"
                    name="Desktop"
                    radius={[4, 4, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 flex justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-gray-900" />
                  <span className="text-gray-600">Mobile</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-gray-200" />
                  <span className="text-gray-600">Desktop</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-900">
                Mobile First
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                70% of Searches Are <span className="logo-wave-dark">Mobile</span>
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Your customers are searching on their phones. If your website doesn't look great on
                mobile, you're losing business to competitors who do.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Smartphone className="h-5 w-5 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mobile-First Design</div>
                    <div className="text-sm text-gray-600">
                      Every site built for phone-first experience
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Zap className="h-5 w-5 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Fast Load Times</div>
                    <div className="text-sm text-gray-600">
                      Optimized for slow mobile connections
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Simple, <span className="logo-wave-dark">Transparent Pricing</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              No hidden fees. No long-term contracts. Just a professional website for your business
              at a price you can afford.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                One-Time
              </div>
              <div className="mb-4 text-5xl font-bold text-gray-900">$500+</div>
              <p className="mb-6 text-gray-600">Setup fee based on your needs</p>
              <ul className="space-y-3">
                {[
                  'Custom design',
                  'Mobile responsive',
                  'SEO optimized',
                  'Contact forms',
                  'Fast hosting',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="h-5 w-5 text-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border-2 border-gray-900 bg-white p-8">
              <div className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                Monthly
              </div>
              <div className="mb-4 text-5xl font-bold text-gray-900">$49.99</div>
              <p className="mb-6 text-gray-600">Everything to keep your site running</p>
              <ul className="space-y-3">
                {[
                  'Hosting included',
                  'Security updates',
                  'Content changes',
                  'Technical support',
                  'Monthly backups',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="h-5 w-5 text-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"
            >
              View Full Pricing Details
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              <span className="logo-wave-dark">How It Works</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Getting your business online is easier than you think. Here's the simple process.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Free Consultation',
                  desc: "Tell me about your business and what you need. I'll give you honest advice and a clear quote.",
                },
                {
                  step: '2',
                  title: 'Design & Build',
                  desc: "I create your custom website. You'll see progress and can request changes along the way.",
                },
                {
                  step: '3',
                  title: 'Launch & Grow',
                  desc: 'Your site goes live. I handle all the technical stuff so you can focus on your business.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-900 text-2xl font-bold text-gray-900">
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              What Business Owners <span className="logo-wave-dark">Say</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  'Our new website has brought in more customers in 3 months than we got all last year from our old one.',
                name: 'Mike R.',
                business: 'Local Plumbing Co.',
                stars: 5,
              },
              {
                quote:
                  'I was nervous about the tech stuff, but Trenton made it so easy. Now I actually have customers finding me on Google!',
                name: 'Sarah T.',
                business: 'Sweet Treats Bakery',
                stars: 5,
              },
              {
                quote:
                  "Best investment I've made for my business. The monthly fee is nothing compared to what I'd pay someone else.",
                name: 'James K.',
                business: 'JK Landscaping',
                stars: 5,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-8"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(item.stars)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-gray-900 text-gray-900" />
                  ))}
                </div>
                <p className="mb-6 text-gray-700">"{item.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.business}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              <span className="logo-wave-dark">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                q: 'How long does it take to build my website?',
                a: "Most websites are completed within 1-2 weeks. Complex projects may take 3-4 weeks. I'll give you a timeline during our consultation.",
              },
              {
                q: 'Do I need to provide content and images?',
                a: "It helps if you have photos of your work, but I can guide you on what's needed. I'll write the content based on information you provide about your business.",
              },
              {
                q: 'What if I need changes after the site is live?',
                a: "Content updates are included in your monthly fee. Need to add a new service or change your hours? Just let me know and I'll update it.",
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. There are no long-term contracts. If you decide to cancel, just give 30 days notice. Your site files are always yours.',
              },
              {
                q: 'Will my site work on phones?',
                a: 'Absolutely. Every site I build is mobile-responsive, meaning it looks great and works perfectly on phones, tablets, and computers.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">Have more questions?</p>
            <Link to="/contact" className="font-medium text-gray-900 hover:underline">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 text-center md:p-12">
            <MessageSquare className="mx-auto mb-6 h-12 w-12 text-gray-400" />
            <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
              Get Tips for <span className="logo-wave-dark">Your Local Business</span>
            </h2>
            <p className="mb-8 text-gray-600">
              Subscribe to get free tips on marketing your local business online. No spam, just
              practical advice you can use.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
              <button
                type="submit"
                className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">Free. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-100 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Ready to Get <span className="logo-wave-dark">More Customers?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Stop letting competitors with better websites steal your customers. Let's build
            something that works for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-900 px-8 py-4 text-lg font-medium text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-gray-200"
            >
              <Phone className="h-5 w-5" />
              Call Me
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
