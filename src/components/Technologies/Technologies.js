import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider />
  <br />
  <SectionTitle>Tecnologia</SectionTitle>
  <SectionText>
    Lorem ipsum dolor sit amet, consectetur adip incididunt
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experiência com <br />
          React.JS e Bootstrap, 
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem"/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experiência com <br />
          JavaScript, .NET, Python e Banco de Dados
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size="3rem"/>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experiência com <br />
          Figma, Canvas
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionDivider/>
</Section>
);

export default Technologies;