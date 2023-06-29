import React, { ReactNode } from 'react';
import { ButtonContainer } from './styles';
import Image from 'next/image';

interface SocialButtonProps {
    src: string;
    alt: string;
    children: ReactNode;
}
export default function SocialButton({src, alt, children}: SocialButtonProps) {
  return (
    <ButtonContainer>
      <Image src={src} alt={alt} /> {children}
    </ButtonContainer>
  )
}
