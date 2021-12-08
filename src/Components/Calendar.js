import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import Training from "./Training";
import moment from 'moment';


export default function CalendarApp() {

	const APIgetTrainings = 'https://customerrest.herokuapp.com/gettrainings';

	useEffect(() => fetchDataTrainings(), [])
	const [trainings, setTrainings] = useState([])


	const fetchDataTrainings = () => {
		fetch(APIgetTrainings)
			.then(res => res.json())
			.then(data => setTrainings(data))
	}

	const locales = {
		"fi-FI": require("date-fns/locale/fi")
	}
	const localizer = dateFnsLocalizer({
		format,
		parse,
		startOfWeek,
		getDay,
		locales
	})

	const events = [
		{
			title: 'huge event',
			start: new Date(2021, 12, 12),
			end: new Date(2021, 12 , 16)
		},
		{
			title: 'huge event',
			start: new Date(2021, 12, 19),
			end: new Date(2021, 12, 28)
		}
	]

	return (
		<div>
			<Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
		</div>

	)

}