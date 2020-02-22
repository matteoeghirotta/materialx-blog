/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
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
      aboutImage2: file(relativePath: { eq: "bph_s05_01_last.png" }) {
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
    }
  `)
  const [mode] = useColorMode()
  const isDark = mode === "dark"

  return (
    // <SectionWrapper id="me" pattern={contours} darkPattern={darkContours}>
    <SectionWrapper id="case-studies">
      <SectionHeader>Case Studies</SectionHeader>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 4,
          maxWidth: "1024px",
          margin: "0 auto",
          pt: 5,
        }}
      >
        <div
          sx={{
            gridColumn: ["1 / -1", null, "1 / 3", null, null],
            gridRow: ["2 / 3", null, "1 / 2", null, null],
          }}
        >
          <Styled.h3 sx={{ mt: 0 }}>BPH</Styled.h3>
          <Styled.p>Amorphous matrix organic semiconductors</Styled.p>
        </div>
        <Img
          sx={{
            width: ["250px", "300px", "100%", null, null],
            height: "100%",
            justifySelf: "center",
            gridColumn: ["1 / -1", null, "3 / -1", null, null],
            gridRow: ["1 / 2", null, "1 / 2", null, null],
            filter: isDark ? "invert(1)" : "none",
          }}
          fluid={data.aboutImage1.childImageSharp.fluid}
          alt=""
          imgStyle={{ objectFit: "contain" }}
        />

        <div
          sx={{
            gridColumn: ["1 / -1", null, "2 / -1", null, null],
            gridRow: ["4 / 5", null, "3 / 4", null, null],
          }}
        >
          <Styled.h3 sx={{ mt: 0 }}>TCTA</Styled.h3>
          <Styled.p>Layers and Interfaces</Styled.p>
        </div>
        <Img
          sx={{
            width: ["250px", "300px", "100%", null, null],
            height: "100%",
            justifySelf: "center",
            gridColumn: ["1 / -1", null, "1 / 2", null, null],
            gridRow: ["3 / 4", null, "3 / 4", null, null],
            filter: isDark ? "invert(1)" : "none",
          }}
          fluid={data.aboutImage2.childImageSharp.fluid}
          alt=""
          imgStyle={{ objectFit: "contain" }}
        />

        <div
          sx={{
            gridColumn: ["1 / -1", null, "1 / 3", null, null],
            gridRow: ["6 / 7", null, "4 / 5", null, null],
          }}
        >
          <Styled.h3 sx={{ mt: 0 }}>P3HT</Styled.h3>
          <Styled.p>Semi-crystalline conducting polymers</Styled.p>
        </div>
        <Img
          sx={{
            width: ["250px", "300px", "100%", null, null],
            justifySelf: "center",
            gridColumn: ["1 / -1", null, "3 / -1", null, null],
            gridRow: ["5 / 6", null, "4 / 5", null, null],
            filter: isDark ? "invert(1)" : "none",
          }}
          fluid={data.aboutImage3.childImageSharp.fluid}
          alt=""
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
    </SectionWrapper>
  )
}

export default SiteSection
