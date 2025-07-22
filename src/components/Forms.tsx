import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

interface FormData {
  name: string;
  institution: string;
  email: string;
  phone: string;
}

const INITIAL_FORM_STATE: FormData = {
  name: "",
  institution: "",
  email: "",
  phone: ""
};

// EmailJS configuration
const EMAIL_CONFIG = {
  serviceId: 'service_7lnuuu9',
  templateId: 'template_jbf5jfk',
  publicKey: '7xLhsOou1xwr37tb9',
  toName: 'Gestrif'
} as const;

const Forms = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
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

      toast.success('Mensagem enviada com sucesso!');
      setFormData(INITIAL_FORM_STATE);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Erro ao solicitar contato. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="w-full">
      <div className="w-full max-w-[1062px] mx-auto py-16 lg:py-20 px-4 lg:px-14">
        <div className="grid lg:grid-cols-2 items-center rounded-[10px] overflow-hidden">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://i.imgur.com/pKkORYt.jpeg"
              alt="Escritório"
              className="w-full h-[340px] sm:h-[484px] object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="flex flex-col p-6 gap-6 bg-[#F3F3F3]">
            <div className="flex flex-col">
              <h2 className="text-[30px] text-[#555555] font-bold leading-[40px]">
                Solicite uma demonstração
              </h2>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-2">
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
                    placeholder="Insira aqui"
                    className="h-12"
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
                    placeholder="Insira aqui"
                    className="h-12"
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
                    placeholder="+244 00000-0000"
                    className="h-12"
                    required
                    aria-label="Número de telefone"
                    autoComplete="tel"
                    pattern="^\+?[1-9]\d{1,14}$"
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
                    placeholder="Insira aqui"
                    className="h-12"
                    required
                    aria-label="Email profissional"
                    autoComplete="email"
                  />
                </div>
                <div className="pt-2 w-full flex justify-end">
                  <Button 
                    type="submit" 
                    className="w-[216px] h-auto p-2 bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Solicitar contato'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
