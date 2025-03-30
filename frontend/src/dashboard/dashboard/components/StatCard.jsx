import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { areaElementClasses } from '@mui/x-charts/LineChart';
import MenuButton from "./MenuButton";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';


function getDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
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

function AreaGradient({ color, id }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.3} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

AreaGradient.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

function StatCard({ title, accuracy, description ,image , setOpen, setPopup}) {
  const theme = useTheme();
  const daysInWeek = getDaysInMonth(4, 2024);

  // const trendColors = {
  //   up:
  //     theme.palette.mode === 'light'
  //       ? theme.palette.success.main
  //       : theme.palette.success.dark,
  //   down:
  //     theme.palette.mode === 'light'
  //       ? theme.palette.error.main
  //       : theme.palette.error.dark,
  //   neutral:
  //     theme.palette.mode === 'light'
  //       ? theme.palette.grey[400]
  //       : theme.palette.grey[700],
  // };

  // const labelColors = {
  //   up: 'success',
  //   down: 'error',
  //   neutral: 'default',
  // };

  // const color = labelColors[trend];
  // const chartColor = trendColors[trend];
  // const trendValues = { up: '+25%', down: '-25%', neutral: '+5%' };


  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {title}
        </Typography>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Accuracy : {accuracy}
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          endIcon={<ChevronRightRoundedIcon />}
          fullWidth={isSmallScreen}
          onClick={() => {setOpen(true)
            setPopup({title:title,description:description,image:image})
          }}
        >
          Get insights
        </Button>
      </CardContent>
    </Card>
  );
}

// StatCard.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.number).isRequired,
//   interval: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   trend: PropTypes.oneOf(['down', 'neutral', 'up']).isRequired,
//   value: PropTypes.string.isRequired,
// };

export default StatCard;
