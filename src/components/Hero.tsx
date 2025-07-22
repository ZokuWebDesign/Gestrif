import { Button } from "@/components/ui/button";
import divisor from "@/assets/illustrations/divisor.svg";

const Hero = () => {
  return (
    <section className="bg-white relative">
      <div
        className="relative w-full z-0"
        style={{
          backgroundImage: `url('https://i.imgur.com/KYdRDyJ.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex flex-col items-center pt-[90px]">
            {/* Text Content */}
            <div className="max-w-[1015px] w-full text-center space-y-4">
              <h1 className="text-[24px] md:text-[48px] leading-[32px] md:leading-[60px] font-extrabold text-white">
                Gestão eficiente de Reclamações para as instituições Financeiras
              </h1>
              <p className="text-white text-base leading-[24px] max-w-[836px] mx-auto">
                Transforme reclamações em oportunidades. Nosso sistema ajuda instituições financeiras a gerenciar e responder reclamações de forma rápida, organizada e eficaz.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-10">
              <Button 
                className="h-auto p-0 rounded-2xl bg-white hover:bg-white/90 border border-secondary"
              >
                <a
                  href="#"
                  className="w-full px-6 py-[12px] text-[18px] text-primary font-bold"
                >
                  Solicitar demonstração grátis
                </a>
              </Button>
            </div>
            {/* Dashboard Preview */}
            <div className="w-full">
              <img
                src={'https://i.imgur.com/kHTduRV.png'}
                alt="Dashboard Preview"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Divisor */}
      <div className="w-full -mt-12 relative z-10">
        <img
          src={divisor}
          alt="Divisor"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
