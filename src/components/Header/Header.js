import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
<Container>
  <Div1>
    <Link href="/">
      <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
      <img src='images/rf-static.png' style={{ width: "8rem", height: "5rem" }} /> <Span>Portfólio</Span>
      </a>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="#projects">
        <NavLink>Projetos</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>Tecnologias</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>Sobre</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href='https://github.com/RenanSzFreitas'>
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href='https://linkedin.com/renan-s-freitas'>
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href='https://instagram.com'>
      <AiFillInstagram size="3rem" />
    </SocialIcons>
  </Div3>
</Container>
);

export default Header;
