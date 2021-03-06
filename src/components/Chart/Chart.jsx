import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import moment from 'moment';

import styles from './Chart.module.css';

const Chart = ({ data: { TotalConfirmed, TotalRecovered, TotalDeaths, countryData }, country }) => {
    const lineChart =(
      countryData && countryData.length 
            ? (
                <Line
                    data={{
                        labels: countryData.map(({ Date }) => moment(Date).format('DD-MM-YYYY')),
                        datasets: [{
                            data: countryData.map(({ Confirmed }) => Confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: countryData.map(({ Deaths }) => Deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,0,0.5)',
                            fill: true,
                        }],
                    }}
                />
                ) : null
    )
    
    const barChart = (
        TotalConfirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [TotalConfirmed, TotalRecovered, TotalDeaths],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: "Curent state in the world" },
            }}
          />
        ) : null
      );

    return (
        <div className={styles.container}>
           {country ? lineChart : barChart}
        </div>
    )
}

export default Chart;