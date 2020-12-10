/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundSection from './section-background'
import SectionWrapper from './section-wrapper'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      welcomeImage: file(
        relativePath: { eq: "materialx_icon01.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      backgroundImage: file(
        relativePath: { eq: "materialx_icon00.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <SectionWrapper bg="accent">
      <div
        sx={{
          display: 'grid',
          width: 'auto',
          height: '200px',
          backgroundImage:
            data.backgroundImage.childImageSharp.fluid,
          // gridTemplateColumns: [
          //   "1fr",
          //   "180px minmax(auto, 400px)",
          //   "200px minmax(400px, 600px)",
          //   "220px 720px",
          //   null,
          // ],
          // gridGap: 4,
          alignItems: 'center',
          justifyItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Styled.h1
          sx={{
            fontSize: [4, null, null, 5, null],
            display: 'inline'
          }}
        >
          Molecular Modelling As A Service
        </Styled.h1>
      </div>
    </SectionWrapper>
    // <BackgroundSection />
    // <div
    //   sx={{
    //     display: "grid",
    //     gridTemplateColumns: [
    //       "1fr",
    //       "180px minmax(auto, 400px)",
    //       "200px minmax(400px, 600px)",
    //       "220px 720px",
    //       null,
    //     ],
    //     gridGap: 4,
    //     alignItems: "center",
    //     justifyItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <Img
    //     sx={{
    //       width: ["200px", "100%", null, null, null],
    //       height: ["200px", "100%", null, null, null],
    //     }}
    //     fluid={data.welcomeImage.childImageSharp.fluid}
    //     alt="MaterialX"
    //     imgStyle={{ objectFit: "contain" }}
    //   />
    //   <div>
    //     <Styled.h1
    //       sx={{
    //         fontSize: [4, null, null, 5, null],
    //         display: "inline",
    //       }}
    //     >
    //       Molecular Modelling As A Service
    //     </Styled.h1>
    //   </div>
    // </div>
  )
}

export default Hero
