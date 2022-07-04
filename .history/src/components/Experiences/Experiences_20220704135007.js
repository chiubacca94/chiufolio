import {React, useEffect, useState} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work'
import "react-vertical-timeline-component/style.min.css"

export default function Experiences() {

    const [data,setData]=useState([]);

    const getData=()=>{
        fetch('./assets/workExperienceData.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
        });
      }
      useEffect(()=>{
        getData()
      },[])


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
                    <p>Stuff i did</p>
                    <div>
                        {
                            data && data.length>0 && data.map((item)=><p>{item}</p>)
                        }
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
