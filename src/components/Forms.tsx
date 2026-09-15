import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import { CheckCircle2, Loader2, Send } from "lucide-react";

interface FormData {
  name: string;
  institution: string;
  email: string;
  phone: string;
  website?: string; // Honeypot field for bot protection
}

const INITIAL_FORM_STATE: FormData = {
  name: "",
  institution: "",
  email: "",
  phone: "",
  website: ""
};

// Configuration via environment variables with battle-tested fallbacks
const FORM_ENDPOINT = import.meta.env.VITE_WEBHOOK_URL || import.meta.env.VITE_FORM_ENDPOINT;
const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_7lnuuu9',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_jbf5jfk',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '7xLhsOou1xwr37tb9',
  toName: 'Gestrif'
} as const;

const Forms = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setIsSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Bot trap / Honeypot: silently succeed if hidden website field is filled
    if (formData.website && formData.website.trim().length > 0) {
      await new Promise(resolve => setTimeout(resolve, 600));
      setIsSuccess(true);
      setIsSubmitting(false);
      toast.success('Mensagem enviada com sucesso!');
      return;
    }

    try {
      if (FORM_ENDPOINT) {
        // Submit to custom webhook (e.g. n8n workflow or cPanel API)
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            institution: formData.institution.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            source: 'gestrif_site_demo',
            submittedAt: new Date().toISOString()
          })
        });

        if (!response.ok) {
          throw new Error(`Endpoint retornou status HTTP ${response.status}`);
        }
      } else {
        // Default: Client-side dispatch via EmailJS
        await emailjs.send(
          EMAIL_CONFIG.serviceId,
          EMAIL_CONFIG.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            institution: formData.institution,
            to_name: EMAIL_CONFIG.toName,
          },
          EMAIL_CONFIG.publicKey
        );
      }

      toast.success('Mensagem enviada com sucesso!');
      setIsSuccess(true);
      setFormData(INITIAL_FORM_STATE);
    } catch (error) {
      console.error('Error sending contact request:', error);
      toast.error('Erro ao solicitar contacto. Por favor, tente novamente ou fale connosco pelo email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="w-full">
      <div className="w-full max-w-[1062px] mx-auto py-16 lg:py-20 px-4 lg:px-14">
        <div className="grid lg:grid-cols-2 items-center rounded-[10px] overflow-hidden shadow-sm">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://cdn.sydapp.com.br/gestrif.com/pKkORYt.webp"
              alt="Escritório"
              className="w-full h-[340px] sm:h-[484px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Form Section */}
          <div className="flex flex-col p-6 sm:p-8 gap-6 bg-[#F3F3F3] min-h-[484px] justify-center">
            <div className="flex flex-col">
              <h2 className="text-[28px] sm:text-[30px] text-[#555555] font-bold leading-[38px] sm:leading-[40px]">
                Solicite uma demonstração
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Preencha os dados abaixo para entrarmos em contacto com a sua instituição.
              </p>
            </div>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-8 px-4 gap-4 bg-white rounded-lg border border-gray-200 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    Solicitação enviada com sucesso!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-sm">
                    Agradecemos pelo interesse. A nossa equipa entrará em contacto muito em breve.
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={handleReset}
                  variant="outline"
                  className="mt-2 text-sm border-gray-300 hover:bg-gray-50 font-medium"
                >
                  Enviar nova solicitação
                </Button>
              </div>
            ) : (
              <div>
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Honeypot field for bot protection */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <Label htmlFor="name" className="text-[12px] font-medium text-gray-700">
                      Seu nome completo
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Insira seu nome"
                      className="h-11 bg-white"
                      required
                      aria-label="Nome completo"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="institution" className="text-[12px] font-medium text-gray-700">
                      Instituição
                    </Label>
                    <Input
                      id="institution"
                      name="institution"
                      type="text"
                      value={formData.institution}
                      onChange={handleInputChange}
                      placeholder="Nome da instituição ou empresa"
                      className="h-11 bg-white"
                      required
                      aria-label="Nome da instituição"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[12px] font-medium text-gray-700">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+244 923 000 000"
                      className="h-11 bg-white"
                      required
                      aria-label="Número de telefone"
                      autoComplete="tel"
                      pattern="^[\+]?[0-9\s\-\(\)\.]{7,25}$"
                      title="Informe um número válido (ex: +244 923 207 304 ou +55 11 99999-9999)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[12px] font-medium text-gray-700">
                      Seu e-mail profissional
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="exemplo@instituicao.com"
                      className="h-11 bg-white"
                      required
                      aria-label="Email profissional"
                      autoComplete="email"
                    />
                  </div>

                  <div className="pt-2 w-full flex justify-end">
                    <Button 
                      type="submit" 
                      className="w-full sm:w-[216px] h-12 p-2 bg-secondary hover:bg-secondary/90 text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Solicitar contacto</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
