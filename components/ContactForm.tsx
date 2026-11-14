"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Simulazione invio (in seguito collegheremo Server Actions o API di invio email)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border-2 border-current bg-black/5 light:bg-white/5 shadow-xl transition-colors duration-300">
      <h3 className="text-2xl font-black mb-6 tracking-tight">Invia un messaggio</h3>

      {status === "success" ? (
        <div className="p-8 rounded-xl bg-green-500/10 border-2 border-green-500 text-center space-y-3">
          <p className="text-2xl">🎉</p>
          <p className="text-lg font-bold">Messaggio inviato con successo!</p>
          <p className="text-xs sm:text-sm opacity-90 font-medium">
            Grazie per avermi contattato. Ti risponderò il prima possibile.
          </p>
          <button 
            onClick={() => setStatus("idle")} 
            className="mt-4 px-5 py-2.5 text-xs font-bold underline hover:opacity-80 transition-opacity"
          >
            Invia un altro messaggio
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                Nome *
              </label>
              <input 
                type="text" 
                name="name"
                required 
                value={formData.name}
                onChange={handleChange}
                placeholder="Il tuo nome" 
                className="w-full p-3 rounded-xl border-2 border-current bg-transparent text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all placeholder:opacity-50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                Email *
              </label>
              <input 
                type="email" 
                name="email"
                required 
                value={formData.email}
                onChange={handleChange}
                placeholder="nome@esempio.com" 
                className="w-full p-3 rounded-xl border-2 border-current bg-transparent text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all placeholder:opacity-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1">
              Oggetto
            </label>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Es. Richiesta collaborazione / Progetto" 
              className="w-full p-3 rounded-xl border-2 border-current bg-transparent text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all placeholder:opacity-50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1">
              Messaggio *
            </label>
            <textarea 
              name="message"
              rows={5} 
              required 
              value={formData.message}
              onChange={handleChange}
              placeholder="Raccontami del tuo progetto o della tua idea..." 
              className="w-full p-3 rounded-xl border-2 border-current bg-transparent text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none transition-all placeholder:opacity-50"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full py-4 font-black bg-[#13032b] text-yellow-300 light:bg-yellow-300 light:text-[#13032b] rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all text-sm uppercase tracking-wider disabled:opacity-50 cursor-pointer"
          >
            {status === "loading" ? "Invio in corso..." : "Invia Messaggio 🚀"}
          </button>
        </form>
      )}
    </div>
  );
}