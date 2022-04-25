import React from 'react';
import { LogoProps } from 'types/api';
import { getImageUrl } from 'utils/getImageUrl';

import * as S from './styles';

type Props = {
  logo: LogoProps;
};

const Logo = ({ logo }: Props) => (
  <S.LogoWrapper src={getImageUrl(logo?.url)} alt={logo?.alternativeText} />
);

export default Logo;
