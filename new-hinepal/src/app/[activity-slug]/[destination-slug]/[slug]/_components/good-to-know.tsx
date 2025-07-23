import React from 'react';

const GoodToKnow = ({goodtoknow}:{goodtoknow:string}) => {
  return (
    <div
      className='tab-pane'
      id='good-to-know'
      role='tabpanel'
      aria-labelledby='good-to-know-tab'>
      <div
        dangerouslySetInnerHTML={{
          __html: goodtoknow,
        }}
        className='good-to-know-area'></div>
    </div>
  );
};

export default GoodToKnow;
