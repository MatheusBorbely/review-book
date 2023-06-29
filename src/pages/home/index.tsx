import Image from "next/image";

import { BannerHero, LoginOptions, MainContainer } from "./styles";
import SocialButton from "../components/SocialButton";
import Logo from '../../../public/Logo.svg';
import BannerLogin from '../../../public/banner-login.png';
import Google from '../../../public/google.svg';
import GitHub from '../../../public/github.svg';
import Guest from '../../../public/guest.svg';

const socialOptions = [
    {
        name: 'Google',
        src:  Google
    },
    {
        name: 'GitHub',
        src:  GitHub
    },
    {
        name: 'visitante',
        src:  Guest
    }
];
export default function Home() {  
    return (
      <>
        <MainContainer>
            <BannerHero>
                <Image src={Logo} alt="logo livro" quality={100}/>
                <Image src={BannerLogin} alt="Mulher lendo livro" quality={100}/>
            </BannerHero>
            <LoginOptions>
                <article>
                    <header>
                        <h1>
                            Boas vindas!
                        </h1>
                        <span>
                            Faça seu login ou acesse como visitante.
                        </span>
                    </header>
                    <section>
                        {socialOptions.map(({ name, src }) => (
                            <SocialButton src={src} alt={name}>
                                Entrar como {name}
                            </SocialButton>
                        ))} 
                    </section>
                </article>
            </LoginOptions>
        </MainContainer>
      </>
    )
  }
  