import Logo from 'components/Logo';
import client from 'graphql/client';
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage';
import { GetStaticProps } from 'next';
import { LandingPageProps } from 'types/api';

const Home = ({ logo }: LandingPageProps) => {
  return (
    <>
      <Logo logo={logo} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE);

  return {
    props: {
      logo: landingPage?.data?.attributes?.logo?.data?.[0]?.attributes
    }
  };
};

export default Home;
