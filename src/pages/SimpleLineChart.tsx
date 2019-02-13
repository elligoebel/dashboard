import React from "react";
import { VictoryBar, VictoryChart } from "victory";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  withStyles
} from "@material-ui/core";

const styles = {
  card: {
    maxWidth: 600
  }
};

const sampleData = [
  { x: 0, y: 0, y0: 0 },
  { x: 1, y: 2, y0: 0 },
  { x: 2, y: 3, y0: 0 },
  { x: 3, y: 5, y0: 0 },
  { x: 4, y: 4, y0: 0 },
  { x: 5, y: 6, y0: 0 }
];

function VictoryCard(props: any) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Victory Chart!
          </Typography>
          <VictoryChart domainPadding={10}>
            <VictoryBar
              style={{ data: { fill: "#c43a31" }, alignment: "start" }}
              data={sampleData}
            />
          </VictoryChart>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(VictoryCard);
