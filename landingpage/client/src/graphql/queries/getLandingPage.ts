const GET_LANDING_PAGE = `
  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          logo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }

          header {
            title
            description
            image {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            button {
              label
              url
            }
          }
        }
      }
    }
  }
`;

export default GET_LANDING_PAGE;
