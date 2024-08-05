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
      Lorem ipsum dolor sit amet
    </SectionText>
    <Button onClick={() => window.location = "https://google.com"}>Saiba Mais</Button>
  </LeftSection>
</Section>
);

export default Hero;