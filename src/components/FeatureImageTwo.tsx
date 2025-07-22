const FeatureImageTwo = () => {
  return (
    <section id="livro" className="bg-white relative w-full">
      <div className="flex flex-col items-center">
        <div className="box-border flex flex-col items-center justify-start px-4 sm:px-14 py-0 sm:py-[70px] w-full">
          <div className="flex flex-col gap-8 items-center justify-start max-w-[820px] w-full">
            {/* Header Content */}
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <h2 className="font-bold text-2xl sm:text-[38px] leading-[40px] text-primary text-center w-full">
                Livro de reclamações
              </h2>
              <p className="text-base sm:text-[22px] text-[#5B5B5B] leading-[28px] text-center max-w-[1126px]">
                Interaja com a sua Instituição Financeira, fazendo reclamações e consultando o seu estado, pedir informações, elogiando ou sugerindo melhorias.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 w-full">
              {/* CTA Button */}
              <button className="w-full p-0">
                <a className="block w-full text-base text-[#555555] hover:text-secondary font-bold px-6 py-3 sm:px-0">
                  Fazer reclamação
                </a>
              </button>
              <button className="w-full p-0">
                <a className="block w-full text-base text-[#555555] hover:text-secondary font-bold px-6 py-3 sm:px-0">
                  Consultar reclamação
                </a>
              </button>
              <button className="w-full p-0">
                <a className="block w-full text-base text-[#555555] hover:text-secondary font-bold px-6 py-3 sm:px-0">
                  Elogiar ou sugerir
                </a>
              </button>
              <button className="w-full p-0">
                <a className="block w-full text-base text-[#555555] hover:text-secondary font-bold px-6 py-3 sm:px-0">
                  Pedir informações
                </a>
              </button>
            </div>

            {/* Dashboard Preview */}
            <img 
              src="https://i.imgur.com/j6E4dwT.jpeg"
              alt="Dashboard Preview"
              className="h-[320px] sm:h-[500px] lg:h-[723px] shadow-[0px_-4px_16px_0px_rgba(0,0,0,0.16)] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImageTwo;
