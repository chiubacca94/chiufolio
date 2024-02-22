import { React } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import workData from "./workExperienceData.json";
import './Experiences.css';
// "Led a team of engineers to develop a logistics tracking system that will streamline the process to request, purchase, and track requisition order",
export default function Experiences() {
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
                         {Object.values(workData)[0].content.map((i)=> <li key={i}>{i}</li>)}
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
                         {Object.values(workData)[1].content.map((i)=> <li key={i}>{i}</li>)}
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
                        <h2>{Object.keys(workData)[2]}</h2>
                        <p>{Object.values(workData)[2].location}</p>
                    </div>
                    <div className='jobBody'>
                        <p>{Object.values(workData)[2].title}</p>
                        <ol className='bullets'>
                         {Object.values(workData)[2].content.map((i)=> <li key={i}>{i}</li>)}
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
                        <p>B.S. Computer Science</p>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
