import React from 'react'
import { SideBarContainer, MenuContainer, MenuItem, SideBarHeader } from './styles'
import Image from 'next/image'
import Logo from '../../../assets/Logo.svg'
import { ChartLineUp, Binoculars, User, SignIn } from 'phosphor-react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menu = [
  {
    name: 'Início',
    icon: <ChartLineUp  size={24} />,
    path: '/'
  },
  {
    name: 'Explorar',
    icon: <Binoculars size={24} />,
    path: '/explorer'
  },
  {
    name: 'Perfil',
    icon: <User size={24} />,
    path: '/profile'
  },

]
export function SideBar() {

  const router = useRouter();
  const currentRoute = router.pathname;
  const menuItems = menu.map(({name, icon, path}) => (
    <MenuItem key={path}>
      <Link href={path} className={`${currentRoute === path && 'active'}`}>
        {icon} {name} 
      </Link>        
    </MenuItem>
  ))

  return (
    <SideBarContainer>
      <SideBarHeader>
        <Image src={Logo} alt="logo" quality={100} width={128}/>
        <nav>
          <MenuContainer>
            {menuItems}
          </MenuContainer>
        </nav>
      </SideBarHeader>
      <footer>
        <span>
          Fazer login <SignIn size={20} />
        </span>
      </footer>
    </SideBarContainer>
  )
}
