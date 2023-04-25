import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewss}) {
console.log(reviewss);

    const [open, setOpen] = useState(false);
    
  return (
    <>
    
<Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='ps-0 my-3' variant='dark'
      >
        Click Here to See The Reviews
      </Button>
      
      <Collapse in={open}>
      <div className='my-2' id="example-collapse-text">
        {
 reviewss.map(item=>(
  <div>
<h6><span className='text-info'>{item.name} : </span><span className='text-warning'>({item.date})</span></h6>
<p><span className='text-info'>Rating :</span> <span className='text-warning'>{item.rating}</span></p>
<p><span className='text-info'>Comments :</span> <span className='text-warning'>{item.comments}</span></p>
  </div>

 ))
        }
</div>
      </Collapse>
</>
  )
}

export default Review