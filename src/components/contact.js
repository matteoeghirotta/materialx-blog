/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
// import { plus, darkPlus } from "./patterns"
import { Button } from "@theme-ui/components"

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      contactImage1: file(relativePath: { eq: "absurd-fish-talking.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const [mode] = useColorMode()
  const isDark = mode === "dark"

  return (
    <SectionWrapper id="contact">
      <SectionHeader>Let's Talk</SectionHeader>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 4,
          maxWidth: "1024px",
          margin: "0 auto",
        }}
      >
        <div
          sx={{
            gridColumn: ["1 / 2"],
            gridRow: "1 / 2",
            zIndex: 2,
            display: ["block"],
            background: isDark
              ? "linear-gradient(270deg, transparent, #1a202c 60%)"
              : "linear-gradient(270deg, transparent, #ffffff 60%)",
            backgroundSize: "cover",
          }}
        >
          <Styled.p>
            The best way to begin the conversation is via{" "}
            <Styled.a href="mailto:customerservice@materialx.co.uk">
              email
            </Styled.a>{" "}
            to discuss your ideas in more detail.
          </Styled.p>
          <Button
            variant="primary"
            as="a"
            href="mailto:customerservice@materialx.co.uk"
          >
            Email Us
          </Button>
        </div>
        <div
          sx={{
            gridColumn: "2 / 2",
            gridRow: "1 / 2",
            zIndex: "1",
            display: ["block"],
            background: isDark
              ? "linear-gradient(90deg, transparent, #1a202c 60%)"
              : "linear-gradient(90deg, transparent, #ffffff 60%)",
            backgroundSize: "cover",
          }}
        >
          <Styled.p>
            Or if you prefer we can have a direct call over the phone.
          </Styled.p>
          <Button variant="primary" as="a" href="tel:+44-7513-309608">
            Call us
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default SiteSection
