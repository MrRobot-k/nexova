import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const WHATSAPP_NUMBER = '528342550555';

export default function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [negocio, setNegocio] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [problema, setProblema] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let mensaje = `Hola, soy ${nombre}.`;

    if (negocio.trim()) {
      mensaje += ` Tengo un negocio llamado "${negocio}".`;
    }

    if (domicilio.trim()) {
      mensaje += ` Está ubicado en: ${domicilio}.`;
    }

    mensaje += `\n\nTe cuento mi situación:\n${problema}`;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setNombre('');
      setNegocio('');
      setDomicilio('');
      setProblema('');
      setIsSubmitting(false);
    }, 1000);
  };

  const inputClasses = "bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-[--color-accent] focus-visible:border-[--color-accent] transition-all duration-300";

  return (
    <section id="contacto" className="py-24 md:py-32 px-6 relative">
      {/* Background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-3xl h-64 bg-emerald-900/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[--color-accent] animate-pulse"></span>
              <span className="font-mono text-xs text-zinc-300 uppercase tracking-widest">Inicia tu proyecto</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              ¿Listo para <span className="text-gradient-accent">modernizar</span> tu negocio?
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Cuéntame tus cuellos de botella. Agendaremos una asesoría gratuita de 30 minutos para analizar si la tecnología puede ayudarte a facturar más trabajando menos.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[--color-accent]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Llamada directa</p>
                  <p className="text-white">+52 834 255 0555</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[--color-accent]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Ubicación</p>
                  <p className="text-white">Ciudad Victoria, Tam.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal" style={{ transitionDelay: '150ms' }}>
            <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              {/* Highlight effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-zinc-300 font-medium">Tu nombre <span className="text-[--color-accent]">*</span></Label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Ej: Juan Pérez"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="negocio" className="text-zinc-300 font-medium">Nombre de tu negocio <span className="text-zinc-500 font-normal">(Opcional)</span></Label>
                  <Input
                    id="negocio"
                    type="text"
                    placeholder="Ej: Taquería El Compa"
                    value={negocio}
                    onChange={(e) => setNegocio(e.target.value)}
                    className={inputClasses}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="problema" className="text-zinc-300 font-medium">¿En qué podemos ayudarte? <span className="text-[--color-accent]">*</span></Label>
                  <Textarea
                    id="problema"
                    placeholder="Describe los procesos que te quitan más tiempo o el sistema que tienes en mente..."
                    value={problema}
                    onChange={(e) => setProblema(e.target.value)}
                    required
                    rows={4}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-zinc-950 hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-300 h-12 rounded-full font-semibold mt-4"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Conectando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Enviar mensaje por WhatsApp
                    </span>
                  )}
                </Button>
                
                <p className="text-center text-zinc-500 text-xs mt-4 font-medium">
                  Información 100% confidencial. No spam, garantizado.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
