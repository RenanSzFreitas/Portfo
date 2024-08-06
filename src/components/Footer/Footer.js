import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+55(14)99778-9111">+55 (14) 99778-9111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:renan.s.freitas22@gmail.com">renan.s.freitas22@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"Success is going from failure to failure without losing your enthusiasm." - Winston Churchill</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/RenanSzFreitas'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/renan-s-freitas/'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
