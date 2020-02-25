import React from "react"
import { jsx, Styled } from "theme-ui"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "t6_map_2models.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundolor={`#eee`}
        >
          <Styled.h2
            sx={{
              textAlign: "center",
              // backgroundImage: "t6_map_2models.png",
              textTransform: "uppercase",
              "::after": {
                display: "block",
                content: '""',
                width: "80px",
                margin: "0 auto",
                borderBottomStyle: "solid",
                borderBottomWidth: "4px",
                borderBottomColor: "primary",
              },
            }}
          >
            MATERIAL X
          </Styled.h2>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
