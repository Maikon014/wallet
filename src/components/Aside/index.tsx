import React, {useState} from 'react';

import Toggle from '../Toggle';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu
} from 'react-icons/md';

import {useAuth} from '../../hooks/auth';
import {useTheme} from '../../hooks/theme';
import LogoImg from '../../assets/logo.svg';


import { 
        Container, 
        Header, 
        LogImg,
        MenuContainer,
        MenuItemLink,
        Title,
        MenuItemButton,
        ToggleMenu,
        ThemeToggleFooter
} from './styles';


  

const Aside: React.FC = () => {
  const {signOut} = useAuth();
  const {toggleTheme, theme} = useTheme();

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
  

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  }

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }


  return (

    <Container menuIsOpen={toggleMenuIsOpened}>

      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose/> : <MdMenu/>}
        </ToggleMenu>

        <LogImg src={LogoImg} alt="Logo my wallet"/>
        <Title>My Wallet</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/">
          <MdDashboard />
           Dashboard
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward/>
           Entradas
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance"> 
          <MdArrowDownward />
           saídas
        </MenuItemLink>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
           Sair
        </MenuItemButton>

        <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
          <Toggle
            labelLeft='Light'
            labelRight='Dark'
            checked={darkTheme}
            onChange={handleChangeTheme}
          />
        </ThemeToggleFooter>

      </MenuContainer>
    </Container>    
  );
}


export default Aside;