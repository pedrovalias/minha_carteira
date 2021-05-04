import React from "react";
import ContentHeader from '../../components/ContentHeader';
import SelectInput from "../../components/SelectInput";
import { Container } from './styles';


// Atribuindo a tipagem 'Functional Component' para a pagina
const Dashboard: React.FC = () => {

  const options = [
    {value: 'Pedro', label: 'Pedro'}, 
    {value: 'Mayara', label: 'Mayara'},
    {value: 'Juca', label: 'Juca'}
  ]

  return (
      <Container>
        <ContentHeader title="Dashboard" lineColor="#fff">
          <SelectInput options={options}/>
        </ContentHeader>
      </Container>
  );
}

export default Dashboard;