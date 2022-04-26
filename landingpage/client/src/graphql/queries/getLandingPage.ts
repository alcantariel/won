const GET_LANDING_PAGE = `
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  fragment logo on LandingPage {
    logo {
      data {
        attributes {
          ...imageData
        }
      }
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      image {
        data {
          attributes {
            ...imageData
          }
        }
      }
      button {
        label
        url
      }
    }
  }

  fragment about on LandingPage {
    about {
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
    }
  }

  fragment techs on LandingPage {
    tech {
      title
      techIcon {
        icon {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
        title
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...logo
          ...header
          ...about
          ...techs
        }
      }
    }
  }
`;

export default GET_LANDING_PAGE;
