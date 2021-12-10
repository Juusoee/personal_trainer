import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { BarChart, Bar,  XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function BarChartComponent() {

  /* APIkey */
  const APIgetTrainings = 'https://customerrest.herokuapp.com/gettrainings';
  /* APIkey */

  /* useState definitions starts here */
  const [trainings, setTrainings] = useState([]);
  useEffect(() => fetchDataTrainings(), [])
  /* useState definitions starts ends */


  /* APIfetch starts here */
  const fetchDataTrainings = () => {
    fetch(APIgetTrainings)
      .then(res => res.json())
      .then(data => setTrainings(data))
  }
  /* APIfetch ends here */

  /* lodash function for groupBy activitiy */
  const ans = _(trainings)
    .groupBy('activity')
    .map((platform, id) => ({
      activity: id,
      duration: _.sumBy(platform, 'duration')
    }))
    .value()
  /* lodash function for groupBy activitiy */  

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart width={150} height={40} data={ans}>
        <Bar dataKey="duration" fill="#8884d8" />
        <XAxis dataKey="activity" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
}

