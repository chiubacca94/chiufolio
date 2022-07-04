import {React, useEffect, useState} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work'
import Axios from 'axios';
import "react-vertical-timeline-component/style.min.css"

export default function Experiences() {


    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3c005a'>
                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    // contentStyle={{background: '#3c005a', colo: '#fff'}}
                    date='2021-Current'
                    iconStyle={{background: '#3c005a', color: '#fff'}}
                    icon={<WorkIcon />}>
                    <h3>CACI International, Sterling, VA</h3>
                    <p>Stuff i didsdasd</p>
                    <div>
                  
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
