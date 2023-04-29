import React from "react";

let myStyle = {
    width: "18rem"
};
function Card(props) {
    return (
        <div className="row card-row">
            <div className="mycard">
                <div className="card col-lg-6 col-md-6 col-sm-12">
                    <img className="card-img-top" src={props.img} alt="" srcset="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a className="btn btn-primary" href={props.btnTarget}>{props.btnText}</a>
                    </div>
                </div>
            </div>
            <div className="mycard">
                <div className="card col-lg-6 col-md-6 col-sm-12">
                    <img className="card-img-top" src={props.img} alt="" srcset="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a className="btn btn-primary" href={props.btnTarget}>{props.btnText}</a>
                    </div>
                </div>
            </div>
            <div className="mycard">
                <div className="card col-lg-6 col-md-6 col-sm-12">
                    <img className="card-img-top" src={props.img} alt="" srcset="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a className="btn btn-primary" href={props.btnTarget}>{props.btnText}</a>
                    </div>
                </div>
            </div>
            <div className="mycard">
                <div className="card col-lg-6 col-md-6 col-sm-12">
                    <img className="card-img-top" src={props.img} alt="" srcset="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a className="btn btn-primary" href={props.btnTarget}>{props.btnText}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;