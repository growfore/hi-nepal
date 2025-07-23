import endpoints from '@/constant/endpoints';
import { TActivity } from '@/types/types';
import { get } from '@/utils/request-hander';
import React from 'react';

const Activities = async () => {
  let activities: TActivity[] = [];
  await get({
    endPoint: endpoints.ACTIVITIES,
    token: '',
    success: (message, res) => {
      activities = res.data;
    },
    failure: (message) => {
      console.log(message);
    },
  });
  return (
    <section className='activity-section'>
      <div className='container'>
        <div className='section-heading text-center'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2'>
              <h5 className='dash-style'>TRAVEL BY ACTIVITY</h5>
              <h2>ADVENTURE &amp; ACTIVITY</h2>
              <p>
                Hi Nepal Travels & Treks is a premier travel agency specializing
                in unforgettable trekking and adventure experiences across
                Nepal.
              </p>
            </div>
          </div>
        </div>
        <div className='activity-inner row'
        style={{
          width: 'fit-content',
          margin: '0 auto',
          display: 'flex',
           
          gap: '20px'
        }}>
          {activities.map((activity, index) => (
            <div className=''>
              <div className='activity-item'>
                <div className='activity-icon'>
                  <a aria-label={activity.name} href={`/${activity.slug}`}>
                    <img src={icons[index]?.icon || ''} alt='' />
                  </a>
                </div>
                <div className='activity-content'>
                  <h4>
                    <a href={`/${activity.slug}`}>{activity.name}</a>
                  </h4>
                  <p>{activity._count.destinations} Destination</p>
                </div>
              </div>
            </div>
          ))}
          {/* <div className='col-lg-2 col-md-4 col-sm-6'>
            <div className='activity-item'>
              <div className='activity-icon'>
                <a href='#'>
                  <img src='assets/images/icon10.png' alt='' />
                </a>
              </div>
              <div className='activity-content'>
                <h4>
                  <a href='#'>Trekking</a>
                </h4>
                <p>12 Destination</p>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4 col-sm-6'>
            <div className='activity-item'>
              <div className='activity-icon'>
                <a href='#'>
                  <img src='assets/images/icon9.png' alt='' />
                </a>
              </div>
              <div className='activity-content'>
                <h4>
                  <a href='#'>Camp Fire</a>
                </h4>
                <p>7 Destination</p>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4 col-sm-6'>
            <div className='activity-item'>
              <div className='activity-icon'>
                <a href='#'>
                  <img src='assets/images/icon8.png' alt='' />
                </a>
              </div>
              <div className='activity-content'>
                <h4>
                  <a href='#'>Off Road</a>
                </h4>
                <p>15 Destination</p>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4 col-sm-6'>
            <div className='activity-item'>
              <div className='activity-icon'>
                <a href='#'>
                  <img src='assets/images/icon7.png' alt='' />
                </a>
              </div>
              <div className='activity-content'>
                <h4>
                  <a href='#'>Camping</a>
                </h4>
                <p>13 Destination</p>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4 col-sm-6'>
            <div className='activity-item'>
              <div className='activity-icon'>
                <a href='#'>
                  <img src='assets/images/icon11.png' alt='' />
                </a>
              </div>
              <div className='activity-content'>
                <h4>
                  <a href='#'>Exploring</a>
                </h4>
                <p>25 Destination</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Activities;

const icons = [
  {
    icon: '/icons/icon6.png',
    name: 'Adventure',
  },
  {
    icon: '/icons/icon7.png',
    name: 'Camping',
  },
  {
    icon: '/icons/icon8.png',
    name: 'Off Road',
  },
  {
    icon: '/icons/icon9.png',
    name: 'Camp Fire',
  },
  {
    icon: '/icons/icon11.png',
    name: 'Trekking',
  },
  {
    icon: '/icons/icon10.png',
    name: 'Trekking',
  },
];
