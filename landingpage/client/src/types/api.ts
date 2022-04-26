export type ImageProps = {
  data: {
    attributes: {
      alternativeText: string;
      url: string;
    };
  };
};

export type TechIcon = {
  icon: ImageProps;
  title: string;
};

export type LogoProps = ImageProps;

export type HeaderProps = {
  title: string;
  description: string;
  image: ImageProps;
  button: {
    label: string;
    url: string;
  };
};

export type SectionHeroProps = {
  logo: LogoProps;
  header: HeaderProps;
};

export type SectionAboutProps = {
  title: string;
  description: string;
  image: ImageProps;
};

export type SectionTechProps = {
  title: string;
  techIcon: TechIcon[];
};

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  about: SectionAboutProps;
  techs: SectionTechProps;
};
