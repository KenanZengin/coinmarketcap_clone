import React from 'react'

const Skeleton = () => {
  return (
   <>
    <div className="skeleton-card" >
        <div className="skeleton-card-body">
            <span className="card-rank skeleton"></span> 
            <span className="card-img skeleton"></span>
            <span className="card-name skeleton "></span>
            <span className="card-symbol skeleton "></span>
            <span className="card-value skeleton "></span>
            <span className="card-change skeleton "></span>
            <span className="card-change skeleton "></span>
            <span className="card-change skeleton "></span>
            <span className="card-value price skeleton "></span>
            <span className="card-value supply skeleton "></span>
            <span className="card-value skeleton "></span>
            <span className="card-graph skeleton "></span>
            <span className="card-accor skeleton "></span>
        </div>
    </div>
   </>
  )
}

export default Skeleton