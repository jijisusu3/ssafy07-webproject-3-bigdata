import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const createChartData = (N, color) => {
  const data = [N, 0, 100 - N];
  const angle = 120;
  return {
    datasets: [
      {
        data,
        backgroundColor: [color, 'transparent', 'rgba(0, 0, 0, .1)'],
        cutout: '80%',
      },
    ],
    options: {
      animation: { duration: 0 },
      plugins: {
        tooltip: { enabled: false },
      },
      hover: { mode: null },
      legend: { display: false },
      rotation: -angle,
      circumference: angle * 2,
      borderWidth: 13,
    },
  };
};
const createChartDataA = (N, color) => {
  const data = [N, 0, 100 - N];
  const angle = 120;
  return {
    datasets: [
      {
        data,
        backgroundColor: [color, 'transparent', 'rgba(0, 0, 0, .1)'],
        cutout: '80%',
      },
    ],
    options: {
      animation: { duration: 0 },
      plugins: {
        tooltip: { enabled: false },
      },
      hover: { mode: null },
      legend: { display: false },
      rotation: -angle,
      circumference: angle * 2,
      borderWidth: 5,
    },
  };
};
export const SureScore = ({ value }) => {
  const color = value > 90 ? '#50b840' : value < 50 ? '#eb5757' : '#F0B622';
  const data = createChartData(value, color);
  return (
    <div style={{ width: '320px', padding: '0', position: 'relative' }}>
      <Doughnut height="120px" data={data} options={data.options} />
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: 0,
          width: '100%',
          fontSize: '60px',
          fontWeight: 'bold',
          textAlign: 'center',
          color,
        }}
      >
        {value}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '70%',
          left: 0,
          width: '100%',
          fontSize: '35px',
          fontWeight: '600',
          textAlign: 'center',
          color: '#BBB7B7',
        }}
      >
        평균: 84.7점
      </div>
    </div>
  );
};
export const SureScoreA = ({ value }) => {
  const color = value > 90 ? '#50b840' : value < 30 ? '#eb5757' : '#F0B622';
  const data = createChartDataA(value, color);
  return (
    <div style={{ width: '220px', padding: '2rem', position: 'relative' }}>
      <Doughnut height="120px" data={data} options={data.options} />
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: 0,
          width: '100%',
          fontSize: '22px',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#7A8982',
        }}
      >
        SURE 지수
      </div>
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: 0,
          width: '100%',
          fontSize: '34px',
          fontWeight: 'bold',
          textAlign: 'center',
          color,
        }}
      >
        {value}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '65%',
          left: 0,
          width: '100%',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'center',
          color: '#BBB7B7',
        }}
      >
        평균: 84.7점
      </div>
    </div>
  );
};
