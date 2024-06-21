import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {Card , Row, Col} from 'react-bootstrap';

// Import the chart configurations
import dashboard24HoursPerformanceChart from './ChartConfigs';
  
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartComponent = () => {
  return (
    <div>
      {/* <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title tag="h5">Users Behavior</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body> */}
              <dashboard24HoursPerformanceChart/>
              {/* </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row> */}
        {/* <Row>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title tag="h5">Email Statistics</Card.Title>
                <p className="card-category">Last Campaign Performance</p>
              </Card.Header>
              <Card.Body style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Number of emails sent
                </div>
              </Card.Footer>
            </Card>
          </Col>
          
        </Row> */}
    </div>
  );
};

export default ChartComponent;
