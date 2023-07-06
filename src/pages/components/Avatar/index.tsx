import Image from 'next/image'
import React from 'react'
import { AvatarContainer } from './styles'

interface AvatarProps {
    src: string,
    alt: string,
}

export default function Avatar({src, alt}: AvatarProps) {
  return (
    <AvatarContainer>
        <Image src={src} alt={alt} quality={100} width={40} height={40}/>
    </AvatarContainer>
    
  )
}
