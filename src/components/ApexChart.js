// import React, { useState } from 'react';
// import Chart from 'react-apexcharts';

// function ApexChart() {
//     const [state, setState] = useState({
//         options: {
//             colors: ["#ae2c21", "#0f597e"],
//             chart: {
//                 id: "basic-bar"
//             },
//             xaxis: {
//                 categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//             }
//         },
//         seriesBar: [
//             {
//                 name: "series-1",
//                 data: [30, 40, 45, 50, 49, 60, 70, 91]
//             },
//             {
//                 name: "series-2",
//                 data: [39, 4, 5, 90, 79, 60, 70, 91]
//             }
//         ],
//         seriesArea: [
//             {
//                 name: "series-1",
//                 data: [20, 30, 35, 40, 39, 50, 60, 81]
//             },
//             {
//                 name: "series-2",
//                 data: [29, 14, 15, 80, 69, 50, 60, 81]
//             }
//         ],
//         seriesLine: [
//             {
//                 name: "series-1",
//                 data: [25, 35, 40, 45, 44, 55, 65, 86]
//             },
//             {
//                 name: "series-2",
//                 data: [34, 9, 10, 85, 74, 55, 65, 86]
//             }
//         ],
//         seriesRadar: [
//             {
//                 name: "series-1",
//                 data: [15, 25, 30, 35, 34, 45, 55, 76]
//             },
//             {
//                 name: "series-2",
//                 data: [24, 19, 20, 75, 64, 45, 55, 76]
//             }
//         ],
//         optionsDonut: {
//             labels: ['Series A', 'Series B', 'Series C', 'Series D', 'Series E'],
//             colors: ["#FF4560", "#008FFB", "#00E396", "#FEB019", "#775DD0"]
//         },
//         seriesDonut: [44, 55, 41, 17, 15]
//     });

//     return (
//         <div>
//             <div className="row">
//                 <div className="col-6">
//                     <Chart
//                         options={state.options}
//                         series={state.seriesBar}
//                         type="bar"
//                         width="400"
//                     />
//                 </div>
//                 <div className="col-6">
//                     <Chart
//                         options={state.options}
//                         series={state.seriesArea}
//                         type="area"
//                         width="400"
//                     />
//                 </div>
//             </div>
//             <div className='row'>

//                 <div className="col-8">
//                     <Chart
//                         options={state.options}
//                         series={state.seriesLine}
//                         type="line"
//                         width="600"
//                     />
//                 </div>
//                 <div className="col-4">
//                     <Chart
//                         options={state.optionsDonut}
//                         series={state.seriesDonut}
//                         type="donut"
//                         width="300"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default ApexChart;


import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Row, Col, Card, CardBody, CardFooter, CardTitle } from 'react-bootstrap';
import { CiGlobe } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";


function ApexChart() {
    const [state, setState] = useState({
        options: {
            colors: ["#ae2c21", "#0f597e"],
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            },
            dataLabels:{
                enabled:false
            }
        },
        seriesBar: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: "series-2",
                data: [39, 4, 5, 90, 79, 60, 70, 91]
            }
        ],
        seriesArea: [
            {
                name: "series-1",
                data: [20, 30, 35, 40, 39, 50, 60, 81]
            },
            {
                name: "series-2",
                data: [29, 14, 15, 80, 69, 50, 60, 81]
            }
        ],
        seriesLine: [
            {
                name: "series-1",
                data: [25, 35, 40, 45, 44, 55, 65, 86]
            },
            {
                name: "series-2",
                data: [34, 9, 10, 85, 74, 55, 65, 86]
            }
        ],
        seriesRadar: [
            {
                name: "series-1",
                data: [15, 25, 30, 35, 34, 45, 55, 76]
            },
            {
                name: "series-2",
                data: [24, 19, 20, 75, 64, 45, 55, 76]
            }
        ],
        optionsDonut: {
            labels: ['Series A', 'Series B', 'Series C', 'Series D', 'Series E'],
            colors: ["#FF4560", "#008FFB", "#00E396", "#FEB019", "#775DD0"]
        },
        seriesDonut: [44, 55, 41, 17, 15]
    });

    return (
        <div>
            <div className="container">
            <Row className='my-2 '>
                <Col lg="3" md="6" sm="6">
                    <Card style={{ boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.1)', borderRadius: '20px' }}>
                        <CardBody>
                            <Row className="align-items-center">
                                <Col md="4" xs="5" className="text-center">
                                    <CiGlobe className="text-warning" style={{ fontSize: '60px' }} />
                                </Col>
                                <Col md="8" xs="7" className="d-flex flex-column justify-content-center">
                                    <p className="text-muted" style={{ fontSize: '20px', margin: '0' }}>Capacity</p>
                                    <p style={{ fontSize: '25px', fontWeight: 'bold', margin: '0' }}>150GB</p>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter style={{ backgroundColor: 'transparent', paddingTop: '0' }}>
                            <div className="text-right"><GrUpdate /> Update</div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                    <Card style={{ boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.1)', borderRadius: '20px' }}>
                        <CardBody>
                            <Row className="align-items-center">
                                <Col md="4" xs="5" className="text-center">
                                    <CiGlobe className="text-warning" style={{ fontSize: '60px' }} />
                                </Col>
                                <Col md="8" xs="7" className="d-flex flex-column justify-content-center">
                                    <p className="text-muted" style={{ fontSize: '20px', margin: '0' }}>Capacity</p>
                                    <p style={{ fontSize: '25px', fontWeight: 'bold', margin: '0' }}>150GB</p>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter style={{ backgroundColor: 'transparent', paddingTop: '0' }}>
                            <div className="text-right"><GrUpdate /> Update</div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                    <Card style={{ boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.1)', borderRadius: '20px' }}>
                        <CardBody>
                            <Row className="align-items-center">
                                <Col md="4" xs="5" className="text-center">
                                    <CiGlobe className="text-warning" style={{ fontSize: '60px' }} />
                                </Col>
                                <Col md="8" xs="7" className="d-flex flex-column justify-content-center">
                                    <p className="text-muted" style={{ fontSize: '20px', margin: '0' }}>Capacity</p>
                                    <p style={{ fontSize: '25px', fontWeight: 'bold', margin: '0' }}>150GB</p>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter style={{ backgroundColor: 'transparent', paddingTop: '0' }}>
                            <div className="text-right"><GrUpdate /> Update</div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                    <Card style={{ boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.1)', borderRadius: '20px' }}>
                        <CardBody>
                            <Row className="align-items-center">
                                <Col md="4" xs="5" className="text-center">
                                    <CiGlobe className="text-warning" style={{ fontSize: '60px' }} />
                                </Col>
                                <Col md="8" xs="7" className="d-flex flex-column justify-content-center">
                                    <p className="text-muted" style={{ fontSize: '20px', margin: '0' }}>Capacity</p>
                                    <p style={{ fontSize: '25px', fontWeight: 'bold', margin: '0' }}>150GB</p>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter style={{ backgroundColor: 'transparent', paddingTop: '0' }}>
                            <div className="text-right"><GrUpdate /> Update</div>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <Chart
                                    options={state.options}
                                    series={state.seriesBar}
                                    type="bar"
                                    width="100%"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <Chart
                                    options={state.options}
                                    series={state.seriesArea}
                                    type="area"
                                    width="100%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <Chart
                                    options={state.options}
                                    series={state.seriesLine}
                                    type="line"
                                    width="100%"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <Chart
                                    options={state.optionsDonut}
                                    series={state.seriesDonut}
                                    type="donut"
                                    width="100%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApexChart;

