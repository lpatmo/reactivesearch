import React from 'react';
import { NumberBox, DateRange, RangeSlider } from '@appbaseio/reactivesearch';

import { leftCol } from '../styles';

export default () => (
	<div className={leftCol}>
		<NumberBox
			componentId="GuestSensor"
			dataField="accommodates"
			title="Guests"
			defaultSelected={2}
			data={{
				start: 1,
				end: 16,
			}}
		/>

		<DateRange
			dataField="date_from"
			componentId="DateRangeSensor"
			title="When"
			numberOfMonths={2}
			queryFormat="basic_date"
			initialMonth={new Date('04-01-2017')}
		/>

		<RangeSlider
			componentId="PriceSensor"
			dataField="price"
			title="Price Range"
			range={{
				start: 10,
				end: 250,
			}}
			rangeLabels={{
				start: '$10',
				end: '$250',
			}}
			defaultSelected={{
				start: 10,
				end: 50,
			}}
			stepValue={10}
			react={{
				and: ['DateRangeSensor'],
			}}
		/>
	</div>
);