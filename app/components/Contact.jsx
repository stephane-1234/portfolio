export default function Contact() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Disponible pour des opportunités en TI. N&apos;hésitez pas à me contacter !
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://github.com/stephane-1234" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
            GitHub
          </a>
          <a href="https://linkedin.com/in/stephane-aime" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-500 transition-colors">
            LinkedIn
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=asngogang@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}