import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function CalendarApp() {

	/* APIkey */
	const APIgetTrainings = 'https://customerrest.herokuapp.com/gettrainings';
	/* APIkey */

	/* useState definitions starts here */
	const [trainings, setTrainings] = useState([])
	useEffect(() => fetchDataTrainings(), [])
	/* useState definitions ends here */

	/* APIfetch starts here */
	const fetchDataTrainings = () => {
		fetch(APIgetTrainings)
			.then(res => res.json())
			.then(data => setTrainings(data))
	}
	/* APIfetch ends here */

	/* Iterate events for calendar */
	let events = [];
	for (let i = 0; i < trainings.length; i++) {
		events[i] = {
			title:
				trainings[i].activity +
				" / " +
				trainings[i].customer.firstname +
				" " +
				trainings[i].customer.lastname,
			start: new Date(trainings[i].date),
			end: new Date(trainings[i].date),

			allDay: false
		};
	}
	/* Iterate events for calendar */

	/* Locales and localizer */
	const locales = {
		"en-US": require("date-fns/locale/en-US")
	}
	const localizer = dateFnsLocalizer({
		format,
		parse,
		startOfWeek,
		getDay,
		locales
	})
	/* Locales and localizer */
	
	return (
		<div>
			<Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 600, margin: "50px" }} />
		</div>

	)

}