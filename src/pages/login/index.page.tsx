import Image from "next/image";
import Head from "next/head";
import { BannerHero, LoginOptions, MainContainer } from "./styles";
import SocialButton from "../components/SocialButton";
import Logo from '../../assets/Logo.svg';
import BannerLogin from '../../assets/banner-login.png';
import Google from '../../assets/google.svg';
import GitHub from '../../assets/github.svg';
import Guest from '../../assets/guest.svg';
import { ReactElement } from "react";

const social = [
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
export default function Login() {  
    const socialOptions = social.map(({ name, src }) => (
        <SocialButton src={src} alt={name}>
            Entrar como {name}
        </SocialButton>
    ))
    return (
      <>
        <Head>
            <title>Login</title>
        </Head>
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
                        {socialOptions}
                    </section>
                </article>
            </LoginOptions>
        </MainContainer>
      </>
    )
  }

  Login.getLayout = function getLayout(page: ReactElement) {
    return (
      <>
        {page}
      </>
    )
  }
  