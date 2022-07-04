import {React, useEffect, useState} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work'
import Axios from 'axios';
import "react-vertical-timeline-component/style.min.css"

export default function Experiences() {
    const [workData, populateWork] = useState(null);

    useEffect( () => {
        Axios.get('./assets/workExperienceData.json').then((response) => {
            populateWork(response.data);
            // console.log(response.data)
        })
    }, []);

    if(!workData) return;

    for(const element of Object.keys(workData)){
        console.log(element)
        console.log(workData[element])
        // console.log(companies)
    }

    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3c005a'>
                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    // contentStyle={{background: '#3c005a', colo: '#fff'}}
                    date='2021-Current'
                    iconStyle={{background: '#3c005a', color: '#fff'}}
                    icon={<WorkIcon />}>
                    <div className='jobHeader'>
                        <p>{Object.keys(workData)[0]}</p>
                        <p>{Object.values(workData)[0].location}</p>
                    </div>
                    <div className='jobBody'>
                        <p>{Object.values(workData)[0].title}</p>
                        <ol>
                         {{Object.values(Object.values(workData)[0]}}
                        </ol>
                    </div>
                    <></>
                    <div>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
