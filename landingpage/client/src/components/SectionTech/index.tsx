import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';

import * as S from './styles';
import { getImageUrl } from 'utils/getImageUrl';
import { SectionTechProps } from 'types/api';

const SectionTech = ({ techIcon = [], title }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcon.map(({ title, icon }) => (
          <S.Icon key={title}>
            <S.Icons
              src={getImageUrl(icon.data.attributes.url)}
              alt={icon.data.attributes.alternativeText}
              loading="lazy"
            />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
);

export default SectionTech;
