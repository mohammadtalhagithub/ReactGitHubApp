import React from "react";

function Projects() {
    return (
        <div class="row"> 
            {/* giving class of "col" applies Bootstrap's Grid system, max number of col == 12 */}
            <div class="col-lg-3 col-md-6 col-sm-12 projects">
                <strong>Desktop App Development</strong>
                <div>A</div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 projects">
                <strong>Web Design</strong>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 projects">
                <strong>3D Printing</strong>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 projects">
                <strong>Computer Aided Design, CAD.</strong>
            </div>
        </div>
    );
}

export default Projects;