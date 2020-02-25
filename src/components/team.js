/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import WorkCard from "./team-card"
// import { rain, darkRain } from "./patterns"

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      projectImage1: file(relativePath: { eq: "otello_profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      projectImage2: file(relativePath: { eq: "matteo_profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      projectImage3: file(relativePath: { eq: "francesco_profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      projectImage4: file(relativePath: { eq: "andres_profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <SectionWrapper id="team" bg="accent">
      <SectionHeader>Team</SectionHeader>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 4,
          maxWidth: "maxPageWidth",
          margin: "0 auto",
          pt: 5,
        }}
      >
        <WorkCard
          link=""
          image={data.projectImage1.childImageSharp.fluid}
          title="Otello Maria Roscioni"
          description="CTO, founder"
        />
        <WorkCard
          link=""
          image={data.projectImage2.childImageSharp.fluid}
          title="Matteo Ricci"
          description="CTO"
        />
        <WorkCard
          link=""
          image={data.projectImage3.childImageSharp.fluid}
          title="Francesco Fiorini"
          description="Business Development"
        />
        <WorkCard
          link=""
          image={data.projectImage4.childImageSharp.fluid}
          title="Andrés Rendón"
          description="Business Development"
        />
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: ["100px", null, "200px", null, null],
          margin: "0 auto",
          pt: 5,
        }}
      ></div>
    </SectionWrapper>
  )
}
export default SiteSection
