import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from '@material-ui/icons/School'
import "react-vertical-timeline-component/style.min.css"

export default function Experiences() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3c005a'>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                contentStyle={{background: '#3c005a', colo: '#fff'}}
                date='2021-Current'
                iconStyle={{background: '#3c005a', colo: '#fff'}}
                icon={<SchoolIcon />}>
                <h3>CACI International, Sterling, VA</h3>
                <p>Stuff i did</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}
