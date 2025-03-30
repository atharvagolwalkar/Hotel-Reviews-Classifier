import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTheme } from "@mui/material/styles";

export default function SessionsChart() {
  const theme = useTheme();
  const colorPalette = [
    // (theme.vars || theme).palette.primary.dark,
    // (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.primary.light,
  ];

  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Accuracy Bar Graph
        </Typography>
        <Stack sx={{ justifyContent: "space-between" }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: "center", sm: "flex-start" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* <Typography variant="h4" component="p">
              1.3M
            </Typography> */}
            {/* <Chip size="small" color="success" label="+92.05%" /> */}
          </Stack>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Accuracy of different algorithms compared.
          </Typography>
        </Stack>
        <BarChart
          borderRadius={8}
          colors={colorPalette}
          xAxis={[
            {
              scaleType: "band",
              categoryGapRatio: 0.5,
              data: [
                "Advancement",
                "Multinomial",
                "Complement",
                "Gaussian",
                "Bernoulli",
              ],
              label: "Naive Bayes Classifier", // X-axis label text
            },
          ]}
          yAxis={[
            {
              scaleType: "linear",
              label: "Accuracy (%)",
              min: 60,
              max: 100,
            },
          ]}
          series={[
            {
              id: "accuracy",
              label: "Accuracy",
              data: [92.05, 88.94, 88.11, 72.36, 68.1],
              stack: "A",
            },
            // {
            //   id: 'downloads',
            //   label: 'Downloads',
            //   data: [3098, 4215, 2384, 2101, 4752],
            //   stack: 'A',
            // },
            // {
            //   id: 'conversions',
            //   label: 'Conversions',
            //   data: [4051, 2275, 3129, 4693, 3904],
            //   stack: 'A',
            // },
          ]}
          height={250}
          margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
