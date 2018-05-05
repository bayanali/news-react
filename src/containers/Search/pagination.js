import React from 'react';
import './Search.css';

const pagination = (props) => {
  return (
    <nav aria-label="Search results pages">
      {/* prev pager goes here */}
      <div className="d-flex justify-content-between">
        <div className="float-md-left">
          <button type="button" className="btn-article"><span className="prev-next-span">PREVIOUS</span></button>
        </div>

        {/* pagination goes here */}
        <ul className="pagination justify-content-center" className="pagination">
          <li className="page-item active"><a href="#"><span className="page-num-span">1</span></a></li>
          <li className="page-item"><a href="#"><span className="page-num-span">2</span></a></li>
          <li className="page-item"><a href="#"><span className="page-num-span">3</span></a></li>
          <li className="page-item"><a href="#"><span className="page-num-span">4</span></a></li>
          <li className="page-item"><a href="#"><span className="page-num-span">5</span></a></li>
          <li className="page-item"><a href="#"><span className="page-num-span">6</span></a></li>
        </ul>

        {/* next pager goes here */}
        <div className="float-md-right">
          <button type="button" className="btn-article"><span className="prev-next-span">NEXT</span></button>
        </div>
      </div>
    </nav>

  );
}

export default pagination