const FeatureImageTwo = () => {
  return (
    <section id="livro" className="relative w-full">
      <div className="flex flex-col items-center">
        <div className="box-border flex flex-col items-center justify-start px-4 sm:px-14 py-12 sm:py-[70px] w-full">
          <div className="flex flex-col gap-6 sm:gap-8 items-center justify-start max-w-[1090px] w-full">
            {/* Header Content */}
            <div className="flex flex-col gap-0 sm:gap-4 items-center justify-start w-full max-w-[820px]">
              <h2 className="font-bold text-2xl sm:text-[38px] leading-[40px] text-primary text-center w-full">
                Isto não é sobre um Ranking. É sobre o seu Controlo, Agora Sob os Holofotes
              </h2>
              <p className="text-base sm:text-[22px] text-[#5B5B5B] leading-[28px] text-center max-w-[1126px]">
                O novo Ranking do BNA é uma prova de fogo para a sua gestão. Sabemos que o Excel e o E-mail não são as ferramentas certas para vencer esta batalha.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-6 sm:gap-8 sm:gap-12">
              
              {/* Illustration */}
              <img 
                src="https://i.imgur.com/5DBtrKS.jpeg"
                alt="Illustration"
                className="h-[320px] sm:w-[calc(50%-1.5rem)] h-auto object-contain"
              />

              {/* Text + Image */}
              <div className="w-full sm:w-[calc(50%-1.5rem)] flex flex-col gap-2 sm:gap-4 items-center justify-start text-base text-[#5B5B5B] leading-[160%] text-start font-medium">
                <p>
                  A pressão sobre a sua área nunca foi tão grande. A troca interminável de e-mails para conseguir uma resposta, o risco de um prazo perdido numa folha de excell complexa e a dificuldade em compilar dados para provar o seu bom trabalho ao supervisor são os verdadeiros inimigos da sua eficiência.
                </p>
                <p>
                  Hoje, estas ineficiências internas reflectem-se directamente na avaliação pública da sua instituição e na posição no raking face à concorrência.
                </p>
                <p>
                  Não ter a ferramenta certa não afecta apenas a posição no ranking. Afecta a sua capacidade de liderar e de <span className="font-bold text-primary">transformar a sua área de um centro de custo numa fonte de inteligência estratégica para a sua instituição.</span>
                </p>

                <div className="flex flex-row items-center justify-center w-full">
                  <img 
                    src="https://i.imgur.com/0XhcVx1.jpeg"
                    alt="Illustration"
                    className="w-[calc(50%)] min-h-[140px] object-contain"
                  />
                  <img 
                    src="https://i.imgur.com/DBQTiYQ.jpeg"
                    alt="Illustration"
                    className="w-[calc(50%)] min-h-[140px] object-contain"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImageTwo;
