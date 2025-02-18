import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
<SectionDivider/>
<SectionTitle main>Projetos</SectionTitle>
<GridContainer>
  {projects.map(({id, image, title, description, tags, source, visit}) =>(
    <BlogCard key = {id}>
      <Img src={image}/>
      <TitleContent>
        <HeaderThree title>{title}</HeaderThree>
        <Hr/>
      </TitleContent>
      <CardInfo>{description}</CardInfo>
      <div>
        <TitleContent>Ferramentas</TitleContent>
        <TagList>
          {tags.map((tag, i) => (
              <Tag key ={i}>{tag}</Tag>
          ))}
        </TagList>
      </div>
      <UtilityList>
      {/* <ExternalLinks href={visit}>Código</ExternalLinks>
      <ExternalLinks href={source}>Sobre</ExternalLinks> */}
      </UtilityList>
    </BlogCard>
  ))}
</GridContainer>
  <br/>
  </Section>

);

export default Projects;