import { CheckCircle2 } from "lucide-react";

const FeatureImageTwo = () => {
  return (
    <section className="bg-white py-[70px] px-4 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-[50px] items-center justify-between max-w-[988px] mx-auto">
          {/* Left side - Illustration */}
          <div className="relative w-full max-w-[256px] sm:max-w-[483px] mx-auto">
            <img
              src="https://i.imgur.com/ejJTybe.png"
              alt="Woman checking WhatsApp notifications"
              className="w-full h-auto"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full mx-auto">
            <div className="flex flex-col">
                <h3 className="text-[28px] font-bold text-[#000000] leading-[42px]">
                  O Gestrif cuida de todas as <span className="text-secondary">actualizações regulamentares</span>, evitando multas e garantindo conformidade, enquanto <span className="text-secondary">transforma reclamações em oportunidades</span> de satisfação e retenção de clientes.
                </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImageTwo;