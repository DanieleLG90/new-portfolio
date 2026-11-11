

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-yellow-300 selection:text-purple-950">
      
      <div className="flex-1 max-w-4xl mx-auto px-6 py-20 w-full flex flex-col justify-center items-center text-center">
        <span className="px-4 py-1.5 mb-6 text-xs font-bold tracking-wider uppercase bg-yellow-300 text-purple-950 rounded-full shadow-md">
          Disponibile per collaborazioni
        </span>
        
        <h1 className="text-4xl md:text-6xl font-black text-yellow-300 mb-6 tracking-tight">
          Mettiamoci in contatto.
        </h1>
        
        <p className="text-purple-100 text-lg mb-10 max-w-xl leading-relaxed">
          Hai un progetto interessante, una startup in crescita o un ruolo stimolante da proporre? Scrivimi direttamente.
        </p>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <a 
            href="mailto:tua-email@example.com" 
            className="px-8 py-4 font-bold bg-yellow-300 text-purple-950 rounded-xl shadow-lg hover:bg-yellow-400 transition-all text-lg"
          >
            Invia un'Email Diretta
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-4 font-bold bg-purple-950/40 text-yellow-300 border-2 border-yellow-300 rounded-xl hover:bg-purple-950/60 transition-all text-lg"
          >
            Profilo LinkedIn
          </a>
        </div>
      </div>

    </main>
  );
}