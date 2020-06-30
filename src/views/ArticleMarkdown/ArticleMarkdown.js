import React from "react";
import ReactMde from "react-mde";
import ReactDOM from "react-dom";
import * as Showdown from "showdown";
import xss from "xss";
import xssFilter from "showdown-xss-filter";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import "react-mde/lib/styles/css/react-mde-all.css";
import styles from "@/assets/jss/material-dashboard-react/views/articleMarkdownStyle.js";

const useStyles = makeStyles(styles);

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
  extensions: [xssFilter],
});

export default function ArticleMarkdown() {
  const classes = useStyles();

  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState("write");
  const [age, setAge] = React.useState('');

  const handleSubmitArticle = () => {
    console.log(value);
    console.log(converter.makeHtml(value));
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Markdown Editor</h4>
          </CardHeader>
        </Card>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-full-width"
            variant="outlined"
            label="Title"
            placeholder="Title"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            variant="outlined"
            label="Author"
            placeholder="Author"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            variant="outlined"
            label="Description"
            placeholder="Description"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            variant="outlined"
            label="Keyword"
            placeholder="Keyword"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          label="Keyword"
          autoWidth={true}
          value={age}
          fullWidth
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
          <div className={classes.markdownContainer}>
            <ReactMde
              value={value}
              onChange={setValue}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              generateMarkdownPreview={(markdown) =>
                Promise.resolve(converter.makeHtml(markdown))
              }
            />
          </div>
        </form>

        <div className={classes.markdownSaveButton}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={handleSubmitArticle}
          >
            Submit
          </Button>
        </div>
      </GridItem>
    </GridContainer>
  );
}
