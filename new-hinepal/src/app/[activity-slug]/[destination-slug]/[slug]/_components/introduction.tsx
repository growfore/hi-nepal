import React from 'react'

const Introduction = ({introduction}:{introduction:string}) => {
  return (
    <div
      className='tab-pane fade show active'
      id='overview'
      role='tabpanel'
      aria-labelledby='overview-tab'>
      <div
        dangerouslySetInnerHTML={{
          __html: introduction,
        }}
        className='overview-content'></div>
    </div>
  );
}

export default Introduction