import SectionAbout from 'components/SectionAbout';
import SectionHero from 'components/SectionHero';
import SectionTech from 'components/SectionTech';
import client from 'graphql/client';
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage';
import { GetStaticProps } from 'next';
import { LandingPageProps } from 'types/api';

const Home = ({ logo, header, about, techs }: LandingPageProps) => {
  console.log(about);
  return (
    <>
      <SectionHero logo={logo} header={header} />
      <SectionAbout {...about} />
      <SectionTech {...techs} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE);

  return {
    props: {
      logo: landingPage?.data?.attributes?.logo?.data?.[0]?.attributes,
      header: landingPage?.data?.attributes?.header,
      about: landingPage?.data?.attributes?.about,
      techs: landingPage?.data?.attributes?.tech
    }
  };
};

export default Home;
