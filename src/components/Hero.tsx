import { Button } from "@/components/ui/button";
import divisor from "@/assets/illustrations/divisor.svg";
import CrawlingBanner from "@/components/CrawlingBanner";

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
                Eleve a satisfação do cliente e melhore a classificação no Ranking do BNA.
              </h1>
              <p className="text-white text-base leading-[24px] max-w-[836px] mx-auto">
                A plataforma que transforma a gestão de reclamações numa poderosa oportunidade para melhorar a experiência do cliente, otimizar processos, garantir a conformidade regulatória e criar uma vantagem competitiva.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col text-center gap-4 mt-6 mb-10">
              <Button 
                className="h-auto p-0 rounded-2xl bg-white hover:bg-white/90 border border-secondary"
              >
                <a
                  href="#"
                  className="w-full px-6 py-[12px] text-[18px] text-primary font-bold"
                >
                  Agendar Demonstração Gratuita
                </a>
              </Button>
              <span className="text-white/60 text-sm">Sem compromisso.</span>
            </div>
            {/* Dashboard Preview */}
            <div className="w-full">
              <img
                src={'https://i.imgur.com/vAju1Bo.png'} /* https://i.imgur.com/kHTduRV.png */
                alt="Dashboard Preview"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Banner at the top */}
      <CrawlingBanner />
      
      {/*
      ### Divisor
      <div className="w-full -mt-12 relative z-10">
        <img
          src={divisor}
          alt="Divisor"
          className="w-full h-auto object-contain"
        />
      </div>
      */}
    </section>
  );
};

export default Hero;
