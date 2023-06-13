import React from "react";

const BootstrapCard = (props) => {
	return (
	
		<div className="col">
		   <div className="card">
					<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<div className="card-footer text-center">
						<a className="btn btn-primary">{props.buttonLabel}</a>
					</div>
				</div>
			</div>	
		</div>
	
	);
};


export default BootstrapCard