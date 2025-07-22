import { Button } from "@/components/ui/button";
import icon from "@/assets/icons/icon.svg";
import { useState, useRef, MouseEvent } from "react";

const features = [
  {
    feature: "Recepção e registro de reclamações"
  },
  {
    feature: "Possibilita reabrir reclamações"
  },
  {
    feature: "Extração de relatórios detalhados"
  },
  {
    feature: "Especificidade com o tipo de instituição financeira"
  },
  {
    feature: "Adicionar vários comentários"
  },
  {
    feature: "Adicionar vários comentários"
  },
  {
    feature: "Adicionar vários comentários"
  },
  {
    feature: "Adicionar vários comentários"
  },
  {
    feature: "Adicionar vários comentários"
  },
  {
    feature: "Adicionar vários comentários"
  },
  {
    feature: "Adicionar vários comentários"
  },
  {
    feature: "Adicionar vários comentários"
  }
];

const FeaturesWithCard = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="bg-[#FAFAFA] py-[66px] pb-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col gap-[37px]">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-[38px] sm:leading-[40px] font-bold text-[#555555]">
              Além de gerenciar reclamações, elogios e sugestões, o <span className="text-secondary">Gestrif</span> é um <span className="text-secondary">sistema projetado para tudo</span> que você precisa!
            </h2>
          </div>
          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
            {features.map((item, index) => (
              <div 
                key={index}
                className="bg-white backdrop-blur-[2px] rounded-[13.697px] border border-[#F3F3F3] p-[10px] pr-0 flex flex-row items-center gap-[6px] select-none"
              >
                <img src={icon} alt="check" className="w-[18px] h-[18px]" />
                <div className="space-y-1">
                  <p className="text-sm lg:text-[9px] text-[#4B5563] font-bold">
                    {item.feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Button */}
          <Button 
            className="h-auto p-0 rounded-[8px] bg-white hover:bg-white/90 border border-secondary mx-auto">
            <a
              href="#"
              className="w-full px-[18px] py-[10px] text-[18px] text-secondary font-bold"
            >
              Solicitar demonstração grátis
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesWithCard;
