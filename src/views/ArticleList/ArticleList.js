import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";

import styles from "assets/jss/material-dashboard-react/views/articleStyle.js";

const useStyles = makeStyles(styles);

export default function Article () {
  const classes = useStyles();
  return (
    <div>
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="warning" stats>
              <Icon>content_copy</Icon>
            <h4 className={classes.cardTitleWhite}>Article Lists</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="warning"
              tableHead={["ID", "Name", "Salary", "Country"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                ["4", "Philip Chaney", "$38,735", "Korea, South"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  </div>
  )
}

