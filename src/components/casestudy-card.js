/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Img from "gatsby-image"

const Card = props => {
  return (
    <div
      sx={{
        gridColumn: ["1 / -1", null, null, "auto", null],
        minWidth: "300px",
        maxWidth: "1050px",
        boxShadow: "0 6px 25px rgba(0,0,0,.3)",
        transition: "all .15s ease-in-out",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "background",
        margin: "0 auto",

        ":hover": {
          boxShadow: "0 12px 45px rgba(0,0,0,.25)",
          transform: "translateY(-6px)",
          backgroundColor: "muted",
        },
      }}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 2,
          height: ["auto", null, null, "150px", null],
        }}
      >
        <Styled.p sx={{ flex: ["0", null, null, "1", null] }}>
          {props.description}
        </Styled.p>
      </div>
      <Img
        sx={{
          width: "auto",
          margin: "20% 20px 0 20px",
          flex: ["0", null, null, "1", null],
        }}
        fluid={props.image}
        alt=""
      />
    </div>
  )
}

export default Card
