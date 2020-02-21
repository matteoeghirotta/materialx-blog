/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
// import { triangles, darkTriangles } from "./patterns"
import { Button } from "@theme-ui/components"

const RecentWriting = () => {
  const data = useStaticQuery(graphql`
    query {
      welcomeImage: file(relativePath: { eq: "molc.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <SectionWrapper
      id="company"
      // pattern={triangles}
      // darkPattern={darkTriangles}
    >
      <SectionHeader>
        Connecting mesoscopic simulations to quantum mechanics
      </SectionHeader>
      <div
        sx={{
          maxWidth: "maxContentWidth",
          mt: 5,
          mx: "auto",
        }}
      >
        <Styled.p>
          Material X provides consultancy on material science using a
          combination of molecular dynamics and electronic-structure methods.
          The scientific tools have been developed by the founders in the EU
          project EXTMOS, and already validated in several peer-reviewed
          publications.
        </Styled.p>
        <Img
          sx={{
            width: ["200px", "100%", null, null, null],
            height: ["200px", "100%", null, null, null],
          }}
          fluid={data.welcomeImage.childImageSharp.fluid}
          alt="MaterialX"
          imgStyle={{ objectFit: "contain" }}
        />{" "}
        <Styled.p>
          The MX approach is based on the MOLC coarse-grained model. In a
          nutshell, atoms are replaced with large ellipsoidal particles
          increasing the computational efficiency and hiding the molecular
          structure, adding an additional level of security while deploying the
          software. The MOLC model includes short-range dispersion interactions
          and long-range electrostatic interactions. Bonded ellipsoids interact
          via an effective potential acting on their position and orientation
          simultaneously. As a result, the MOLC model delivers molecular
          morphology as accurate as traditional all-atom models, at a fraction
          of the cost. The MX app/roach is suitable to simulating molecular
          functional materials, such as organic semiconductors, liquid crystals,
          polymers, biomolecules, nd multi-component systems.a
        </Styled.p>
      </div>
    </SectionWrapper>
  )
}

export default RecentWriting
