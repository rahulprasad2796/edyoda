import React from 'react';
import "./topbar.css"

const Topbar = () => {
    return ( <div className="topbar">
        <div className="left">
        <div>
            <span className="logo">Edyoda</span>
            <br/>
            <span className="stories">Stories</span>
        </div>
        <div>Explore Categories <img 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" alt="icon dropdown" className="dropicon" /></div>
        </div>
        <div className="right">
            <div>EdYoda is free learning and knowledge
                sharing platform for techies</div>
            <div><button>Go To Main Website</button></div>
        </div>
    </div> );
}
 
export default Topbar;