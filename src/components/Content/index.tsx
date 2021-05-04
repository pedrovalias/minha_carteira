import React from "react";
import { Container } from "./styles";

// Atribuindo a tipagem 'Functional Component' para a pagina
const Content: React.FC = ( { children }  ) => {
  return (
      <Container>
          { children }
      </Container>
  );
}

export default Content;