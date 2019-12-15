import React from "react";

function hotelsList(props) {
  return (
    <div className="card col-md-3 m-2 shadow">
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <h6 className="card-title">
          <span className="text-muted">host_name</span> : {props.host_name}
        </h6>
        <h6 className="card-title">
          <span className="text-muted">neighbour</span> : {props.neighbourhood}
        </h6>
        <p>
          <span className="badge badge-success">
            {props.neighbourhood_group}
          </span>
        </p>
        <p>
          {" "}
          <span className="badge badge-secondary">{props.room_type} </span>
        </p>
        <p>
          <span className="badge badge-primary"> Price: {props.price}</span>
        </p>
      </div>
    </div>
  );
}

export default hotelsList;
