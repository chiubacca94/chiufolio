import {React, useEffect, useState} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work'
import Axios from 'axios';
import "react-vertical-timeline-component/style.min.css"

import './Experiences.css'

export default function Experiences() {
    const [workData, populateWork] = useState(null);

    useEffect( () => {
        Axios.get('./assets/workExperienceData.json').then((response) => {
            populateWork(response.data);
            // console.log(response.data)
        })
    }, []);

    if(!workData) return;


    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3c005a'>
                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    // contentStyle={{background: '#3c005a', colo: '#fff'}}
                    date='2022-Current'
                    iconStyle={{background: '#3c005a', color: '#fff'}}
                    icon={<WorkIcon />}>
                    <div className='jobHeader'>
                        <h2>{Object.keys(workData)[0]}</h2>
                        <p>{Object.values(workData)[0].location}</p>
                    </div>
                    <div className='jobBody'>
                        <p>{Object.values(workData)[0].title}</p>
                        <ol className='bullets'>
                         {Object.values(workData)[0].content.map((i)=> <li>{i}</li>)}
                        </ol>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    // contentStyle={{background: '#3c005a', colo: '#fff'}}
                    date='2017-2020'
                    iconStyle={{background: '#3c005a', color: '#fff'}}
                    icon={<WorkIcon />}>
                    <div className='jobHeader'>
                        <h2>{Object.keys(workData)[1]}</h2>
                        <p>{Object.values(workData)[1].location}</p>
                    </div>
                    <div className='jobBody'>
                        <p>{Object.values(workData)[1].title}</p>
                        <ol className='bullets'>
                         {Object.values(workData)[1].content.map((i)=> <li>{i}</li>)}
                        </ol>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    // contentStyle={{background: '#3c005a', colo: '#fff'}}
                    date='2012-2016'
                    iconStyle={{background: '#3c005a', color: '#fff'}}
                    icon={<SchoolIcon />}>
                    <div className='jobHeader'>
                        <h2>Penn State University</h2>
                        <p>University Park, PA</p>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
