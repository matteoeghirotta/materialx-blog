/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import CaseStudyCard from "./casestudy-card"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
// import { contours, darkContours } from "./patterns"

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage1: file(relativePath: { eq: "tcta_s06_01.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      aboutImage2: file(relativePath: { eq: "drop_casting_small_2.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      aboutImage3: file(relativePath: { eq: "p3ht_sample04_05_last.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      aboutImage4: file(relativePath: { eq: "int01_anpd_sptadwt2_01.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const [mode] = useColorMode()
  const isDark = mode === "dark"

  return (
    <SectionWrapper id="case-studies">
      <SectionHeader>Case Studies</SectionHeader>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 4,
          // maxWidth: "1024px",
          margin: "0 auto",
          pt: 5,
        }}
      >
        <CaseStudyCard
          link=""
          image={data.aboutImage1.childImageSharp.fluid}
          title=""
          description="Amorphous matrix organic semiconductors."
        />
        <CaseStudyCard
          link=""
          image={data.aboutImage2.childImageSharp.fluid}
          title=""
          description="Drop-casting: evaporation of the solvent over a surface."
        />
        <CaseStudyCard
          link=""
          image={data.aboutImage3.childImageSharp.fluid}
          title=""
          description="Amorphous matrix organic semiconductors."
        />
        <CaseStudyCard
          link=""
          image={data.aboutImage4.childImageSharp.fluid}
          title=""
          description="Interface between two organic semiconductors."
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
