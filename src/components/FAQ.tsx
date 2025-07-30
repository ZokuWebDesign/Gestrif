import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "1. Afinal, o que é exactamente o GESTRIF?",
    answer: "O GESTRIF é um software inovador do tipo SaaS (Software as a Service), desenvolvido de raiz especificamente para lidar com todo o ciclo de gestão de reclamações em instituições financeiras angolanas. O sistema automatiza e simplifica o processo de recepção, registro, controlo, tratamento, acompanhamento e soluções tempestivas das  reclamações, permitindo que as instituições substitam o caos das planilhas e e-mails por um sistema inteligente, seguro e que garante o aumento da eficiência, eficácia e controlo no tratamento das reclamações, cumprindo com as regulamentações dos órgãos supervisores, tais como o BNA - Banco Nacional de Angola; ARSEG – Agência Angolana de Regulação e Supervisão de Seguros e CMC – Comissão de Mercado de Capitais."
  },
  {
    question: "2. Para que tipo de empresa o GESTRIF foi criado?",
    answer: "O GESTRIF foi concebido a pensar nos desafios específicos do sector financeiro angolano (bancos, seguradoras, sociedades de microcrédito, casas de câmbio, correctoras, distribuidoras  e outras instituições financeiras). No entanto, a sua estrutura de workflow e gestão de processos é flexível o suficiente para ser adaptada ao tipo de regulamentação do regulador das instituições financieras, quer bancária (BNA) como as não bancária ( ARSEG, CMC e outras)."
  },
  {
    question: "3. Porque é que a minha instituição precisa do GESTRIF se já temos um processo?",
    answer: "Porque os processos manuais, baseados em Excel e e-mail, são inerentemente arriscados, ineficientes e não geram inteligência de negócio. Eles expõem a sua instituição a multas por incumprimento de prazos, não oferecem uma visão clara para a gestão e, crucialmente, não lhe dão as ferramentas para provar ao BNA ou aos supervisores, que está a usar as reclamações para melhorar – o fator chave para um bom ranking. O GESTRIF resolve estes três problemas de uma só vez."
  },
  {
    question: "4. Como é que o GESTRIF ajuda, na prática, a melhorar a nossa posição no Ranking do BNA?",
    answer: 'O GESTRIF foi desenhado para atuar diretamente sobre os 4 indicadores de desempenho que o BNA avalia. De forma simples:<br />Automatizamos o controlo de prazos para aumentar a sua "Eficiência Operacional" e evitar multas.<br />Transformamos dados em relatórios de causa-raiz para provar as suas "Medidas Corretivas" e demonstrar inteligência de negócio.<br />Oferecemos transparência com ferramentas inovadoras que melhoram a "Percepção de Qualidade" do supervisor e dos seus clientes.<br />Em suma, damos-lhe as ferramentas exatas para transformar cada requisito do BNA numa pontuação mais alta.'
  },
  {
    question: "5. Em quanto tempo posso esperar ver resultados na minha operação e no ranking?",
    answer: "Os resultados operacionais são quase imediatos. Em poucas semanas após a implementação, a sua equipa sentirá uma enorme redução no trabalho manual e um aumento no controlo. A melhoria no ranking do BNA será visível na avaliação semestral seguinte à implementação, pois terá as ferramentas e os dados para submeter um Questionário de Avaliação de Qualidade (QAQ) muito mais robusto e com provas concretas de melhoria."
  },
  {
    question: "6. O GESTRIF é difícil de usar? A minha equipa precisará de muita formação?",
    answer: "Não. O GESTRIF foi desenhado com um foco absoluto na simplicidade e intuição. A interface é limpa e os fluxos de trabalho são lógicos, imitando os passos que a sua equipa já conhece, mas de forma automatizada. Além disso, a nossa parceria inclui um plano de formação completo e suporte contínuo para garantir uma transição suave e que todos se sintam confortáveis desde o primeiro dia."
  },
  {
    question: "7. Como é feita a implementação e quanto tempo demora?",
    answer: "A vantagem de uma solução SaaS (Software as a Service) é a agilidade. Não há servidores para instalar na sua instituição. A implementação consiste na configuração da plataforma para a sua realidade, formação da equipa e migração de dados (se aplicável). Normalmente, em poucas semanas, a sua instituição pode estar totalmente operacional, um processo drasticamente mais rápido do que softwares tradicionais."
  },
  {
    question: "8. Os nossos dados de clientes e reclamações estarão seguros?",
    answer: "Obsolutamente. A segurança é a nossa prioridade máxima e inegociável. O GESTRIF além de ter a autorização da Agência de Protecção de Dados de Angola, está hospedado na infraestrutura da Amazon Web Services (AWS), a mesma utilizada pelos maiores bancos, governos e empresas de tecnologia do mundo. Isto significa que os seus dados beneficiam de múltiplas camadas de segurança física e digital, encriptação de ponta a ponta e conformidade com os mais rigorosos padrões internacionais de proteção de dados."
  },
  {
    question: "9. O GESTRIF integra-se com os nossos outros sistemas?",
    answer: "O GESTRIF foi desenhado para funcionar de forma autónoma e poderosa, sem necessitar de integrações complexas com o seu core banking, o que garante uma implementação rápida e de baixo risco. No entanto, a plataforma é construída sobre uma arquitetura moderna que permite futuras integrações via API, caso surja uma necessidade estratégica específica."
  },
  {
    question: "10. O que acontece quando o BNA ou outro regulador muda as regras ou os relatórios?",
    answer: "Essa é uma das maiores vantagens da nossa parceria. A nossa equipa de especialistas monitoriza continuamente o ambiente regulatório angolano. Quando uma norma muda, nós assumimos a responsabilidade de actualizar o GESTRIF para garantir que a sua operação se mantenha 100% em conformidade. Esta garantia está incluída na sua subscrição, protegendo a sua istituição de custos e esforços inesperados."
  },
  {
    question: "11. Por que não mostram os preços diretamente no site?",
    answer: "Porque não acreditamos numa solução 'tamanho único'. Cada instituição financeira tem uma dimensão, volume e complexidade diferente. O nosso modelo de preços é flexível e adaptado à sua realidade específica para garantir que paga apenas pelo que precisa. Preferimos ter uma breve conversa para entender as suas necessidades e apresentar uma proposta de valor justa e transparente."
  },
  {
    question: "12. A minha equipa precisa de ter conhecimentos técnicos avançados?",
    answer: "O GESTRIF foi desenhado para ser utilizado por gestores de reclamações e equipas de atendimento, não por especialistas de TI. A interface é intuitiva, limpa e focada na facilidade de uso, garantindo uma curva de aprendizagem muito rápida."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-white px-4 sm:px-14 lg:px-[72px] pb-[60px]">
      <div className="w-full max-w-[1136px] mx-auto">
        <div className="text-center pb-14">
          <h2 className="text-[32px] font-bold text-primary">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl px-0 py-0"
            >
              <AccordionTrigger className="flex w-full items-center gap-6 px-2 py-5 hover:no-underline">
                <span className="flex-1 text-left text-xl font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pr-2 text-[#5B5B5B]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default FAQ;
