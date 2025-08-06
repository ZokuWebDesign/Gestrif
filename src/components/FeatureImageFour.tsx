const FeatureImageTwo = () => {
  return (
    <section id="livro" className="relative w-full">
      <div className="flex flex-col items-center">
        <div className="box-border flex flex-col items-center justify-start px-4 sm:px-14 py-0 sm:py-[70px] w-full">
          <div className="flex flex-col gap-8 items-center justify-start max-w-[820px] w-full">
            {/* Header Content */}
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <h2 className="font-bold text-2xl sm:text-[38px] leading-[40px] text-primary text-center w-full">
                Isto não é sobre um Ranking. É sobre o seu Controlo, Agora Sob os Holofotes
              </h2>
              <p className="text-base sm:text-[22px] text-[#5B5B5B] leading-[28px] text-center max-w-[1126px]">
                O novo Ranking do BNA é uma prova de fogo para a sua gestão. Sabemos que o Excel e o E-mail não são as ferramentas certas para vencer esta batalha.
              </p>
            </div>

            {/* Dashboard Preview */}
            <img 
              src="https://i.imgur.com/j6E4dwT.jpeg"
              alt="Dashboard Preview"
              className="h-[320px] sm:h-[500px] lg:h-[723px] shadow-[0px_-4px_16px_0px_rgba(0,0,0,0.16)] object-contain"
            />

            {/* Header Content */}
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <h2 className="font-bold text-2xl sm:text-[38px] leading-[40px] text-primary text-center w-full">
                Isto não é sobre um Ranking. É sobre o seu Controlo, Agora Sob os Holofotes
              </h2>
              <p className="text-base sm:text-[22px] text-[#5B5B5B] leading-[28px] text-center max-w-[1126px]">
                O novo Ranking do BNA é uma prova de fogo para a sua gestão. Sabemos que o Excel e o E-mail não são as ferramentas certas para vencer esta batalha.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImageTwo;
