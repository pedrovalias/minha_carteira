import React from "react";
import SelectInput from '../../components/SelectInput';
import { Container, TitleContainer, Controllers } from "./styles";

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

// Atribuindo a tipagem 'Functional Component' para a pagina
const ContentHeader: React.FC<IContentHeaderProps> = ({title, lineColor, children}) => { 



  return (
      <Container>

        <TitleContainer>
          <h1>{title}</h1>
        </TitleContainer>
        
        <Controllers>
          {children}
        </Controllers>
          
      </Container>
  );
}

export default ContentHeader;