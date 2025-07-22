const FeatureImageTwo = () => {
  const services = [
    "Recuperação de reclamação/reclamante eliminado",
    "Carregamento em massa das agências/balcões",
    "Adicionar acesso a outras direcções / gabinetes (limite de três)",
    "Adicionar acesso a outras agências / balcões (limite de três)",
    "Carregamento em massa da lista das direcções / gabinetes",
    "Carregamento em massa da lista de produtos / subprodutos",
    "Inserção da base de dados de reclamações por ano (sem anexos)",
    "Desenvolvimento de funcionalidades adicionais sob orçamento",
    "Acesso a recursos adicionais da plataforma (sob análise)",
    "Carregamento da lista dos motivos da Reclamação"
  ];

  return (
    <section className="bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-0 sm:gap-8 lg:gap-[35px] items-center justify-between mx-auto">
          {/* Left side - Illustration */}
          <div className="max-w-[256px] sm:max-w-[364px] ml-4">
            <img
              src="https://i.imgur.com/3LabLwy.png"
              alt="Homem segurando lapis"
              className="w-full h-auto"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full mx-auto max-w-[744px]">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/80 to-[#F9F9FA]/80 shadow-[0px_4px_16px_0px_rgba(107,107,107,0.16)]">
              <div className="flex flex-col pb-4 sm:pb-8">
                  <h3 className="text-[18px] font-semibold text-[#111827] leading-[21px]">
                    Funcionalidades e serviços extras
                  </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {services.map((service, index) => (
                  <li key={index} className="flex flex-col sm:flex-row gap-0 sm:gap-2 text-base sm:text-[18px]">
                    <p className="text-[#039855] font-bold">
                      Kz 25.000
                    </p>
                    <p className="text-[#202020] font-medium">
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImageTwo;