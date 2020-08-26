import React from 'react';

import "./lucas.css";
import Home from '../Home';
import Navigation from '../Navigation';
import OtherJobs from '../OtherJobs';
import TaskCategories from '../TaskCategories';

export const Lucas = () => (
    <h1 className='lucas'>
			<Navigation />
			<Home />
			<TaskCategories />
			<OtherJobs />
    </h1>
)