import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Bem Vindo <br />
      Ao meu Portifólio
    </SectionTitle>
    <SectionText>
      Prazer! Me chamo Renan de Souza Freitas e sou Dev Full-Stack focado em Front-End e Banco de Dados.
    </SectionText>
    <Button onClick={() => window.location = "https://github.com/RenanSzFreitas"}>Saiba Mais</Button>
  </LeftSection>
</Section>
);

export default Hero;