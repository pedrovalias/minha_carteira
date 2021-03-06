import React from "react";
import logoimg from '../../assets/logo.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';
import { Container, Header, Title, LogImg, MenuContainer, MenuItemLink } from './styles';

// Atribuindo a tipagem 'Functional Component' para a pagina
const Aside: React.FC = () => {
  return (
      <Container>
          <Header>
            <LogImg src={logoimg} alt="Logo Minha Carteira" />
            <Title>Minha Carteira</Title>
          </Header>

          <MenuContainer>
            <MenuItemLink href="#">
              <MdDashboard />
              Dashboard
            </MenuItemLink>

            <MenuItemLink href="#">
              <MdArrowUpward />
              Entradas
            </MenuItemLink>

            <MenuItemLink href="#">
              <MdArrowDownward />
              Saídas
            </MenuItemLink>

            <MenuItemLink href="#">
              <MdExitToApp />
              Sair
            </MenuItemLink>

          </MenuContainer>
      </Container>
  );
}

export default Aside;