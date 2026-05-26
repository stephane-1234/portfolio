export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 flex items-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="bg-indigo-500/20 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full border border-indigo-500/30">
            👋 Disponible pour de nouvelles opportunités
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Stéphane Aimé</h1>
        <h2 className="text-2xl md:text-3xl font-light text-indigo-300 mb-8">Développeur Full-Stack</h2>
        <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
          Passionné par la création d&apos;applications web modernes. Spécialisé en JavaScript, React, Node.js et Next.js. DEC en informatique — Gatineau, Québec.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-500 transition-colors">
            Voir mes projets
          </a>
          <a href="https://github.com/stephane-1234" target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}