const skills = [
  { category: 'Front-end', items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'] },
  { category: 'Back-end', items: ['Node.js', 'Express', 'PHP', 'Python'] },
  { category: 'Base de données', items: ['MySQL', 'MongoDB', 'Prisma ORM'] },
  { category: 'Outils', items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
]

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Technologies</h2>
        <p className="text-gray-400 mb-12">Les outils que j&apos;utilise au quotidien.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-indigo-400 font-semibold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills && skill.items.map((item, j) => (
                  <span key={j} className="bg-slate-700 text-gray-300 text-sm px-3 py-1 rounded-lg">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}