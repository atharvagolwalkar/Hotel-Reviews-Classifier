import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

function getDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString("en-US", {
    month: "short",
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function renderSparklineCell(params) {
  const data = getDaysInMonth(4, 2024);
  const { value, colDef } = params;

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <SparkLineChart
        data={value}
        width={colDef.computedWidth || 100}
        height={32}
        plotType="bar"
        showHighlight
        showTooltip
        colors={["hsl(210, 98%, 42%)"]}
        xAxis={{
          scaleType: "band",
          data,
        }}
      />
    </div>
  );
}

function renderactual(actual) {
  const colors = {
    Online: "success",
    Offline: "default",
  };

  return <Chip label={actual} color={colors[actual]} size="small" />;
}

export function renderAvatar(params) {
  if (params.value == null) {
    return "";
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: "24px",
        height: "24px",
        fontSize: "0.85rem",
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

export const columns = [
  { field: "reviews", headerName: "Reviews", flex: 1.5, minWidth: 200 },
  {
    field: "actual",
    headerName: "Actual sentiment",
    flex: 1,
    minWidth: 60,
    // renderCell: (params) => renderactual(params.value),
  },
  {
    field: "predicted",
    headerName: "Predicted Sentiment",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 120,
  },

  {
    field: "multinomial",
    headerName: "Multinomial Sentiment",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "complement",
    headerName: "Complement Sentiment",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "gaussian",
    headerName: "Gaussian Sentiment",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "bernoulli",
    headerName: "Bernoulli Sentiment",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 120,
  },

  // {
  //   field: 'predicted',
  //   headerName: 'Predicted Sentiment',
  //   headerAlign: 'right',
  //   align: 'right',
  //   flex: 1,
  //   minWidth: 120,
  // },
  // {
  //   field: 'predicted',
  //   headerName: 'Event Count',
  //   headerAlign: 'right',
  //   align: 'right',
  //   flex: 1,
  //   minWidth: 100,
  // },
  // {
  //   field: 'viewsPerUser',
  //   headerName: 'Views per User',
  //   headerAlign: 'right',
  //   align: 'right',
  //   flex: 1,
  //   minWidth: 120,
  // },
  // {
  //   field: 'averageTime',
  //   headerName: 'Average Time',
  //   headerAlign: 'right',
  //   align: 'right',
  //   flex: 1,
  //   minWidth: 100,
  // },
  // {
  //   field: 'conversions',
  //   headerName: 'Daily Conversions',
  //   flex: 1,
  //   minWidth: 150,
  //   renderCell: renderSparklineCell,
  // },
];
export const rows = [
  {
    id: 1,
    reviews: "The hotel was fantastic and the staff were very friendly.",
    actual: "Positive",
    predicted: "Positive",
    multinomial: "Positive",
    complement: "Positive",
    gaussian: "Positive",
    bernoulli: "Positive",
  },
  {
    id: 2,
    reviews: "I had a terrible experience, and I won't be returning.",
    actual: "Negative",
    predicted: "Negative",
    multinomial: "Negative",
    complement: "Negative",
    gaussian: "Negative",
    bernoulli: "Negative",
  },
  {
    id: 3,
    reviews: "The room was clean but a bit noisy at night.",
    actual: "Neutral",
    predicted: "Positive",
    multinomial: "Neutral",
    complement: "Positive",
    gaussian: "Neutral",
    bernoulli: "Neutral",
  },
  {
    id: 4,
    reviews: "Great location, close to everything!",
    actual: "Positive",
    predicted: "Positive",
    multinomial: "Positive",
    complement: "Positive",
    gaussian: "Neutral",
    bernoulli: "Neutral",
  },
  {
    id: 5,
    reviews: "The service was slow and unprofessional.",
    actual: "Negative",
    predicted: "Negative",
    multinomial: "Negative",
    complement: "Negative",
    gaussian: "Neutral",
    bernoulli: "Neutral",
  },
  {
    id: 6,
    reviews: "Lovely atmosphere and cozy rooms.",
    actual: "Positive",
    predicted: "Positive",
    multinomial: "Positive",
    complement: "Positive",
    gaussian: "Neutral",
    bernoulli: "Neutral",
  },
  {
    id: 7,
    reviews: "I found a cockroach in my room.",
    actual: "Negative",
    predicted: "Negative",
    multinomial: "Negative",
    complement: "Negative",
    gaussian: "Neutral",
    bernoulli: "Neutral",
  },
  {
    id: 8,
    reviews: "The breakfast was delicious and varied.",
    actual: "Positive",
    predicted: "Positive",
    multinomial: "Positive",
    complement: "Positive",
    gaussian: "Positive",
    bernoulli: "Neutral",
  },
  {
    id: 9,
    reviews: "Staff were rude and unhelpful.",
    actual: "Negative",
    predicted: "Negative",
    multinomial: "Negative",
    complement: "Negative",
    gaussian: "Positive",
    bernoulli: "Neutral",
  },
  {
    id: 10,
    reviews: "Overall, it was an enjoyable stay.",
    actual: "Positive",
    predicted: "Positive",
    multinomial: "Positive",
    complement: "Positive",
    gaussian: "Negative",
    bernoulli: "Neutral",
  },
  {
    id: 11,
    reviews: "The Wi-Fi was terrible and kept dropping.",
    actual: "Negative",
    predicted: "Positive",
    multinomial: "Negative",
    complement: "Positive",
    gaussian: "Negative",
    bernoulli: "Neutral",
  },
  {
    id: 12,
    reviews: "I would definitely recommend this hotel.",
    actual: "Positive",
    predicted: "Positive",
    multinomial: "Positive",
    complement: "Positive",
    gaussian: "Positive",
    bernoulli: "Neutral",
  },
  {
    id: 13,
    reviews: "The heating system didn't work properly.",
    actual: "Negative",
    predicted: "Positive",
    multinomial: "Negative",
    complement: "Positive",
    gaussian: "Negative",
    bernoulli: "Neutral",
  },
  {
    id: 14,
    reviews: "Amazing views from the room!",
    actual: "Positive",
    predicted: "Positive",
    multinomial: "Positive",
    complement: "Positive",
    gaussian: "Neutral",
    bernoulli: "Neutral",
  },
  {
    id: 15,
    reviews: "The bathroom was dirty upon arrival.",
    actual: "Negative",
    predicted: "Negative",
    multinomial: "Negative",
    complement: "Negative",
    gaussian: "Neutral",
    bernoulli: "Neutral",
  },
  {
    id: 16,
    reviews: "Very comfortable bed and quiet nights.",
    actual: "Positive",
    predicted: "Positive",
    multinomial: "Positive",
    complement: "Positive",
    gaussian: "Neutral",
    bernoulli: "Neutral",
  },
  {
    id: 17,
    reviews: "Check-in was a hassle and took too long.",
    actual: "Negative",
    predicted: "Positive",
    multinomial: "Positive",
    complement: "Positive",
    gaussian: "Positive",
    bernoulli: "Neutral",
  },
  {
    id: 18,
    reviews: "The hotel was outdated and in need of renovation.",
    actual: "Negative",
    predicted: "Neutral",
    multinomial: "Neutral",
    complement: "Neutral",
    gaussian: "Neutral",
    bernoulli: "Neutral",
  },
  {
    id: 19,
    reviews: "I loved the spa and wellness facilities.",
    actual: "Positive",
    predicted: "Positive",
    multinomial: "Positive",
    complement: "Positive",
    gaussian: "Neutral",
    bernoulli: "Neutral",
  },
  {
    id: 20,
    reviews: "It was hard to find parking nearby.",
    actual: "Neutral",
    predicted: "Neutral",
    multinomial: "Neutral",
    complement: "Neutral",
    gaussian: "Neutral",
    bernoulli: "Neutral",
  },
  {
    id: 21,
    reviews: "I can't wait to come back again!",
    actual: "Positive",
    predicted: "Negative",
    multinomial: "Negative",
    complement: "Negative",
    gaussian: "Neutral",
    bernoulli: "Neutral",
  },
];
