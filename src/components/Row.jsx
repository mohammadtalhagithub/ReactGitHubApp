import React from "react";

function Row(props) {
    return (
        <div class="row">
            {/* giving class of "col" applies Bootstrap's Grid system, max number of col == 12 */}
            <div class="col-lg-3 col-md-6 col-sm-12">
                <strong>{props.text1}</strong>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
                <strong>{props.text2}</strong>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
                <strong>{props.text3}</strong>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
                <strong>{props.text4}</strong>
            </div>
        </div>
    );
}

export default Row;

