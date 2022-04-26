import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';

import * as S from './styles';
import { SectionAboutProps } from 'types/api';
import { getImageUrl } from 'utils/getImageUrl';

const SectionAbout = ({ title, description, image }: SectionAboutProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          loading="lazy"
          src={getImageUrl(image.data.attributes.url)}
          alt={image.data.attributes.alternativeText}
        />
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
);

export default SectionAbout;
