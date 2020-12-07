/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import Video from "./video"
// import { triangles, darkTriangles } from "./patterns"
import { Button } from "@theme-ui/components"

const RecentWriting = () => {
  const data = useStaticQuery(graphql`
    query {
      welcomeImage: file(relativePath: { eq: "materialx_icon00.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      schemeCGImage: file(relativePath: { eq: "anpd_gtoc3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <SectionWrapper id="company">
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
        <Img
          sx={{
            width: [null, null, null, null, null],
            height: [null, null, null, null, null],
          }}
          fluid={data.welcomeImage.childImageSharp.fluid}
          alt="MaterialX"
          imgStyle={{ objectFit: "contain" }}
        />{" "}
        <Styled.p>
          Material X limited is a company registered in UK with number 12476085.
          Material X offers software for molecular modelling as a service. We
          believe that science should be accessible to every human being, this
          is why we use only open-source software. This is the reason why the
          MOLC model was implemented in the open-source codes LAMMPS and
          MOLTEMPLATE.
        </Styled.p>
        <Styled.p>
          Material X provides consultancy on material science using a
          combination of molecular dynamics and electronic-structure methods.
          The scientific tools have been developed by the founders in the EU
          project EXTMOS, and already validated in several peer-reviewed
          publications.
        </Styled.p>
        <Img
          sx={{
            width: ["100%", "100%", null, null, null],
            height: ["100%", "100%", null, null, null],
          }}
          fluid={data.schemeCGImage.childImageSharp.fluid}
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
          of the cost. The MX approach is suitable to simulating molecular
          functional materials, such as organic semiconductors, liquid crystals,
          polymers, biomolecules, and multi-component systems.
        </Styled.p>
      </div>
      <div
        sx={{
          maxWidth: "maxContentWidth",
          mt: 5,
          mx: "auto",
        }}
      >
        <Video
          videoSrcURL="https://www.youtube.com/embed/VOGq9zyn9nE"
          videoTitle="MOLC"
        />
      </div>
    </SectionWrapper>
  )
}

export default RecentWriting
