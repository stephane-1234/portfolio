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
        <h2 className="text-2xl md:text-3xl font-light text-indigo-300 mb-8">DEC en informatique</h2>
        <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
         Diplômé en informatique avec une formation complète couvrant les réseaux, la sécurité informatique, la programmation et les systèmes embarqués, je cherche à évoluer vers une carrière en TI et cybersécurité.
 
Mon parcours combine une expérience concrète en appui à la recherche en intelligence artificielle et deux postes au sein du gouvernement fédéral canadien (Société du patrimoine Canada et Statistique Canada), ce qui me donne une double perspective rare : je comprends à la fois les environnements gouvernementaux sécurisés et les technologies qui les transforment.
 
Je me spécialise activement en cybersécurité - domaine dans lequel je prépare actuellement la certification CompTIA Security+ - avec l'objectif de contribuer à des environnements sécurisés et résilients.
 
Ce que j'apporte :
 
Solide base technique : réseaux, sécurité, bases de données, programmation
Expérience en environnement gouvernemental fédéral et gestion de données sensibles
Expérience pratique en recherche appliquée en IA
Bilinguisme français/anglais
Capacité d'apprentissage rapide dans des environnements en constante évolution
 
Ouvert aux opportunités en support TI, administration réseau et analyse de sécurité junior - secteur public ou privé.
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