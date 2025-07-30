import logo from "@/assets/logos/logo-icon.svg";
import linkedIn from "@/assets/icons/linkedin.svg";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import youtube from "@/assets/icons/youtube.svg";

const Footer = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Main Footer */}
      <div className="w-full bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-[70px]">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-[42px] sm:gap-8">
            {/* Company Info */}
            <div className="w-full lg:w-[356px]">
              <div className="flex flex-col gap-6 items-center sm:items-start">
                <div className="flex">
                  <img src={logo} alt="Gestrif Logo" className="w-[66px] h-[66px]" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-base text-white leading-[21px] font-bold">Luanda, Município de Belas<br/>Cidade do Kilamba<br/>Rua Mbula Matadi, Edifício R-21<br/>10º andar, apt 103</p>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-14">
              {/* Mapa do site */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[#FEFBFA] text-base leading-[28px] font-normal">Site map</h3>
                <div className="flex flex-col text-[#D5D0D7] text-sm leading-[38px] font-normal">
                  <a href="#inicio">Início</a>
                  <a href="#desafios">Desafios</a>
                  <a href="#perfis">Perfis</a>
                  <a href="#sistema">Sistema</a>
                  <a href="#contato">Contacto</a>
                  <a href="#faq">FAQs</a>
                </div>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[#FEFBFA] text-base leading-[28px] font-normal">Legal</h3>
                <div className="flex flex-col text-[#D5D0D7] text-sm leading-[38px] font-normal">
                  <a href="/termos">Termos de uso</a>
                  <a href="/privacidade">Política de privacidade</a>
                </div>
              </div>

              {/* Atendimento */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[#FEFBFA] text-base leading-[28px] font-normal">Contacto</h3>
                <div className="flex flex-col text-[#D5D0D7] text-sm leading-[38px] font-normal">
                  <a href="tel:08000029210">+244 953597249</a>
                  <a href="tel:08000029210">+244 923207304</a>
                  <a href="mailto:info@russyna.com">info@russyna.com</a>
                  <a href="https://www.russyna.com">www.russyna.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-[29px]">
          <p className="text-[#8A8A8A] text-[16px] text-center sm:hidden">
            GRussyna Business Net@2025<br />NIF: 5000696250<br />todos os direitos reservados
          </p>
          <p className="text-[#8A8A8A] text-[16px] text-center hidden sm:block">
            Russyna Business Net@2025 | NIF: 5000696250 - todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
