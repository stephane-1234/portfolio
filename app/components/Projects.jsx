const projects = [
  {
    title: 'Blog API',
    description: 'API REST CRUD complète pour un blog avec Express, Prisma et MySQL.',
    tags: ['Node.js', 'Express', 'Prisma', 'MySQL'],
    github: 'https://github.com/stephane-1234/blog-api',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Auth Module',
    description: 'Module JWT réutilisable avec bcrypt, register, login et protection des routes.',
    tags: ['Node.js', 'JWT', 'bcrypt', 'Express'],
    github: 'https://github.com/stephane-1234/auth-module',
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Birthday Worker',
    description: 'Worker d\'automatisation pour l\'envoi d\'emails via node-cron et Brevo.',
    tags: ['Node.js', 'node-cron', 'Brevo', 'MySQL'],
    github: 'https://github.com/stephane-1234/birthday-worker',
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Blog React',
    description: 'Interface front-end d\'un blog avec filtres par catégorie et navigation dynamique.',
    tags: ['React', 'React Router', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/stephane-1234/blog-react',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'TaskFlow',
    description: 'Landing page Next.js avec SSR, SEO complet, sitemap et robots.txt.',
    tags: ['Next.js', 'SSR', 'SEO', 'Tailwind CSS'],
    github: 'https://github.com/stephane-1234/taskflow',
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'API Dashboard',
    description: 'Dashboard React avec météo, crypto et actualités en temps réel.',
    tags: ['React', 'APIs REST', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/stephane-1234/api-dashboard',
    color: 'from-yellow-500 to-orange-600',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Projets</h2>
        <p className="text-gray-400 mb-12">Une sélection de mes réalisations récentes.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-600 transition-all">
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="bg-slate-800 text-gray-300 text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors">
                  Voir sur GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}