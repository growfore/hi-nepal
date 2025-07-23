'use client';
import React from 'react';

const Itenary = ({ itenary }: { itenary: string }) => {
  const data = extractSections(itenary || '');

  return (
    <div
      className='tab-pane'
      id='itinerary'
      role='tabpanel'
      aria-labelledby='itinerary-tab'>
      <div
        // dangerouslySetInnerHTML={{ __html: itenary }}
        className='itinerary-content'>
        <div>
          <div className='itinerary-content'>
            <h3>
              Itenary <span>( {data?.length}Days)</span>
            </h3>
          </div>
          <div className='itinerary-timeline-wrap'>
            <ul>
              {data?.map((item, index) => (
                <li>
                  <div className='timeline-content w-100'>
                    <div
                      className='day-count'
                      style={{
                        fontSize: '20px',
                        fontWeight: '600',
                      }}>
                      {index + 1}
                      {/* Day <span>{index + 1}</span> */}
                    </div>
                    <h4>{item.title}</h4>
                    <p>
                      {item?.descriptions?.map((description, index) => (
                        <p key={index}>{description}</p>
                      ))}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itenary;

// ignore all warnings
//@ts-ignore
function extractSections(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const elements = doc.body.children;

  let sections = [];
  let currentSection = null;
  //@ts-ignore
  for (let el of elements) {
    if (
      (el.tagName === 'P' && el.querySelector('strong')) ||
      el.querySelector('h3')
    ) {
      // If <p> contains <strong>, treat it as a title
      currentSection = {
        title: el.querySelector('strong').textContent.trim(),
        descriptions: [],
      };
      sections.push(currentSection);
      // } else if (currentSection && el.tagName === 'P') {
    } else {
      // If it's a <p> (without <strong>), treat it as a description
      //@ts-ignore
      currentSection?.descriptions.push(el.textContent.trim());
    }
  }

  return sections;
}
