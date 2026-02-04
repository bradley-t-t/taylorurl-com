const CLIENTS = [
  { logo: '/clients-logos/SRM-Logo.png', alt: 'Smyrna Ready Mix', label: 'Smyrna Ready Mix' },
  {
    logo: '/clients-logos/DBF-Logo.png',
    alt: 'Dickinson Bayou Fleeting',
    label: 'Dickinson Bayou Fleeting',
  },
  { logo: '/clients-logos/CT-Logo.png', alt: "Charlie T's", label: "Charlie T's" },
  { logo: '/clients-logos/Mineplex-Logo.png', alt: 'Mineplex', label: 'Mineplex' },
  { logo: '/clients-logos/Hypixel-Logo.png', alt: 'Hypixel', label: 'Hypixel' },
  { logo: '/clients-logos/Speedway146-Logo.png', alt: 'Speedway 146', label: 'Speedway 146' },
]

function Clients() {
  function logoError(e) {
    const s = e.target.closest('.client-brand')
    e.target.remove()
    if (s) {
      s.classList.add('bg-gray-200')
      s.textContent = 'Logo'
    }
  }

  return (
    <section className="bg-gray-50 py-20" id="clients">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Who I've Worked With</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6" role="list">
          {CLIENTS.map(c => (
            <div className="flex flex-col items-center gap-4" role="listitem" key={c.label}>
              <div className="client-brand flex h-16 w-full items-center justify-center grayscale transition-all hover:grayscale-0">
                <img
                  src={c.logo}
                  alt={c.alt}
                  onError={logoError}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="text-center text-sm text-gray-600">{c.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-gray-500">
          Additional references available on request
        </div>
      </div>
    </section>
  )
}

export default Clients
