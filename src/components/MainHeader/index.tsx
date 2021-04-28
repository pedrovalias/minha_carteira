// useMemo: hook utilizado para memorizar valores
import React, { useMemo } from "react";
import Toggle from '../Toggle';
import emojis from '../../utils/emojis';
import { Container, Profile, Welcome, Username } from "./styles";


// Atribuindo a tipagem 'Functional Component' para a pagina
const MainHeader: React.FC = () => {

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice];
  },[]);

  return (
      <Container>
          <Toggle />

          <Profile>
            <Welcome>Olá, {emoji}</Welcome>
            <Username>Pedro Valias</Username>
          </Profile>
      </Container>
  );
}

export default MainHeader;