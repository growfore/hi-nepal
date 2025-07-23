import React from 'react'

const Includes = ({includes}:{includes:string}) => {
  return (
    <div
      className='tab-pane'
      id='includes'
      role='tabpanel'
      aria-labelledby='includes-tab'>
      <div
        dangerouslySetInnerHTML={{ __html: includes }}
        className=''></div>
    </div>
  );
}

export default Includes