import * as React from "react";
import PropTypes from "prop-types";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Button } from "@mui/material";

const data = {
  advancement: [
    { label: "Correct Predictions", value: 17 },
    { label: "Wrong Predictions", value: 4 },
  ],
  multinomial: [
    { label: "Correct Predictions", value: 15 },
    { label: "Wrong Predictions", value: 6 },
  ],
  complement: [
    { label: "Correct Predictions", value: 12 },
    { label: "Wrong Predictions", value: 9 },
  ],
  bernoulli: [
    { label: "Correct Predictions", value: 10 },
    { label: "Wrong Predictions", value: 11 },
  ],
  gaussian: [
    { label: "Correct Predictions", value: 9 },
    { label: "Wrong Predictions", value: 12 },
  ],
};

const countriesData = {
  advancement: [
    {
      name: "Correct Predictions",
      value: 80.9,
      color: "#91EF9F",
    },
    {
      name: "Wrong Predictions",
      value: 19.1,
      color: "#EF919F",
    },
  ],
  multinomial: [
    {
      name: "Correct Predictions",
      value: 71.4,
      color: "#91EF9F",
    },
    {
      name: "Wrong Predictions",
      value: 28.6,
      color: "#EF919F",
    },
  ],
  complement: [
    {
      name: "Correct Predictions",
      value: 57.1,
      color: "#91EF9F",
    },
    {
      name: "Wrong Predictions",
      value: 42.9,
      color: "#EF919F",
    },
  ],
  bernoulli: [
    {
      name: "Correct Predictions",
      value: 47.6,
      color: "#91EF9F",
    },
    {
      name: "Wrong Predictions",
      value: 52.4,
      color: "#EF919F",
    },
  ],
  gaussian: [
    {
      name: "Correct Predictions",
      value: 42.8,
      color: "#91EF9F",
    },
    {
      name: "Wrong Predictions",
      value: 57.2,
      color: "#EF919F",
    },
  ],
};

// Define your colors here
const colors = ["#91EF9F", "#EF919F"];

const StyledText = styled("text", {
  shouldForwardProp: (prop) => prop !== "variant",
})(({ theme }) => ({
  textAnchor: "middle",
  dominantBaseline: "central",
  fill: (theme.vars || theme).palette.text.secondary,
  variants: [
    {
      props: {
        variant: "primary",
      },
      style: {
        fontSize: theme.typography.h5.fontSize,
      },
    },
    {
      props: ({ variant }) => variant !== "primary",
      style: {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    {
      props: {
        variant: "primary",
      },
      style: {
        fontWeight: theme.typography.h5.fontWeight,
      },
    },
    {
      props: ({ variant }) => variant !== "primary",
      style: {
        fontWeight: theme.typography.body2.fontWeight,
      },
    },
  ],
}));

function PieCenterLabel({ primaryText, secondaryText }) {
  const { width, height, left, top } = useDrawingArea();
  const primaryY = top + height / 2 - 10;
  const secondaryY = primaryY + 24;

  return (
    <React.Fragment>
      <StyledText variant="primary" x={left + width / 2} y={primaryY}>
        {primaryText}
      </StyledText>
      <StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
        {secondaryText}
      </StyledText>
    </React.Fragment>
  );
}

PieCenterLabel.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

export default function ChartUserByCountry() {
  const [graph, setGraph] = React.useState("advancement");

  // Retrieve the relevant data and countries based on the selected graph
  const chartData = data[graph];
  const countries = countriesData[graph];

  return (
    <Card
      variant="outlined"
      sx={{ display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 }}
    >
      <CardContent>
        <Typography component="h2" variant="subtitle2">
          {graph.charAt(0).toUpperCase() + graph.slice(1)} Algorithm Predictions
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{ margin: 2, padding: "8px 16px" }}
          onClick={() => setGraph("advancement")}
        >
          Advancement
        </Button>

        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{ margin: 2, padding: "8px 16px" }}
          onClick={() => setGraph("multinomial")}
        >
          Multinomial
        </Button>

        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{ margin: 2, padding: "8px 16px" }}
          onClick={() => setGraph("complement")}
        >
          Complement
        </Button>

        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{ margin: 2, padding: "8px 16px" }}
          onClick={() => setGraph("bernoulli")}
        >
          Bernoulli
        </Button>

        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{ margin: 2, padding: "8px 16px" }}
          onClick={() => setGraph("gaussian")}
        >
          Gaussian
        </Button>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PieChart
            colors={colors}
            margin={{
              left: 80,
              right: 80,
              top: 80,
              bottom: 80,
            }}
            series={[
              {
                data: chartData, // Use the chart data based on the state
                innerRadius: 75,
                outerRadius: 100,
                paddingAngle: 0,
                highlightScope: { faded: "global", highlighted: "item" },
              },
            ]}
            height={260}
            width={260}
            slotProps={{
              legend: { hidden: true },
            }}
          >
            <PieCenterLabel
              primaryText={chartData.reduce((acc, cur) => acc + cur.value, 0)}
              secondaryText="Total"
            />
          </PieChart>
        </Box>

        {countries.map((country, index) => (
          <Stack
            key={index}
            direction="row"
            sx={{ alignItems: "center", gap: 2, pb: 2 }}
          >
            <Stack sx={{ gap: 1, flexGrow: 1 }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: "500" }}>
                  {country.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {country.value}%
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                aria-label="Number of users by country"
                value={country.value}
                sx={{
                  [`& .${linearProgressClasses.bar}`]: {
                    backgroundColor: country.color,
                  },
                }}
              />
            </Stack>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}
