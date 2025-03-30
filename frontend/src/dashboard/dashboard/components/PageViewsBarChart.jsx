import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

function AreaGradient({ color, id }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.5} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

AreaGradient.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};



export default function PageViewsBarChart() {
  const theme = useTheme();
  const [screen,setScreen] = React.useState('precision')
  const data = ['Advanced','Multinomial','Complement','Gaussian','Bernoulli']
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const colorPalette = [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
  ];
  const data1 = {
    precision: [ 
      { label: 'Positive', data: [0.90, 0.90, 0.90,0.99,0.88] },
      { label: 'Neutral', data: [0.91, 0.85, 0.88,0.58,0.52] },
      { label: 'Negative', data: [0.96, 0.91, 0.87,0.85,0.93] },
    ],
    recall: [
      { label: 'Positive', data: [0.93, 0.87, 0.87,0.61,0.59] },
      { label: 'Neutral', data: [0.91, 0.88, 0.83,0.99,0.91] },
      { label: 'Negative', data: [0.93, 0.92, 0.94,0.61,0.54] },
    ],
    'f1-score': [
      { label: 'Positive', data: [0.92, 0.92, 0.89,0.72,0.71] },
      { label: 'Neutral', data: [0.87, 0.84, 0.85,0.73,0.66] },
      { label: 'Negative', data: [0.92, 0.87, 0.90,0.71,0.68] },
    ],
  };
  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
      
      <Typography component="h2" variant="subtitle2" gutterBottom>
          Other Metrics Bar Graph
        </Typography>  
      
      <Button
          variant="contained"
          size="small"
          color="primary"
          fullWidth={isSmallScreen}
          sx={{ marginLeft: 7, margin:2 }}
          onClick={()=>{
            setScreen('precision')
          }}
        >
          Precision
        </Button>
      <Button
          variant="contained"
          size="small"
          color="primary"
          fullWidth={isSmallScreen}
          sx={{ margin: 2 }}
          onClick={()=>{
            setScreen('recall')
          }}
        >
          Recall
        </Button>
      <Button
          variant="contained"
          size="small"
          color="primary"
          fullWidth={isSmallScreen}
          sx={{ margin: 2 }}
          onClick={()=>{
            setScreen('f1-score')
          }}
        >
          F1-Score
        </Button>
        <LineChart
          colors={colorPalette}
          xAxis={[
            {
              data: ['Advancement', 'Multinomial', 'Complement', 'Gaussian', 'Bernoulli'],
              scaleType: 'point',
              
              // tickInterval: (index, i) => (i + 1) % 5 === 0,
            },
          ]}
          yAxis={
          [
            {
              min: 0.5,
              max: 3
            }
          ]
          }
          series={data1[screen].map((item) => ({
            id: item.label.toLowerCase(),
            label: item.label,
            showMark: false,
            stack: 'total',
            stackOrder: 'ascending',
            curve: 'linear',
            area: true,
            data: item.data,
          }))}
          height={250}
          margin={{ left: 50, right: 20, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          sx={{
            '& .MuiAreaElement-series-organic': {
              fill: "url('#positive')",
            },
            '& .MuiAreaElement-series-referral': {
              fill: "url('#neutral')",
            },
            '& .MuiAreaElement-series-direct': {
              fill: "url('#negative')",
            },
          }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        >
          <AreaGradient color={theme.palette.primary.dark} id="positive" />
          <AreaGradient color={theme.palette.primary.main} id="neutral" />
          <AreaGradient color={theme.palette.primary.light} id="negative" />
        </LineChart>
      </CardContent>
    </Card>
  );
}

