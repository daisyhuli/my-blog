import {
  whiteColor,
  grayColor,
} from "assets/jss/material-dashboard-react.js";


const articleMarkdownStyle = {
  
  markdownContainer: {
    height: "auto",
  },
  cardTitleWhite: {
    display: "inline-block",
    position: "relative",
    top: "-10px",
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  markdownSaveButton: {
    margin: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

};

export default articleMarkdownStyle;
