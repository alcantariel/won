import React from 'react';

import Button from 'components/Button';
import Container from 'components/Container';
import Logo from 'components/Logo';
import { SectionHeroProps } from 'types/api';
import { getImageUrl } from 'utils/getImageUrl';

import * as S from './styles';

const SectionHero = ({ logo, header }: SectionHeroProps) => (
  <S.Wrapper>
    <Container>
      <Logo logo={logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={header.button.url} onClick={() => {}} wide>
              {header.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(header.image.data.attributes.url)}
          alt={header.image.data.attributes.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
);

export default SectionHero;
