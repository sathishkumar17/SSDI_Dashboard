import React, { Component } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';
import { Bar, Pie } from 'react-chartjs-2';

class ChartSection1 extends Component {
    render(){
        const dataBar = {
            labels: ['test finished', 'worn', 'due to IW', 'as a partner','cancelled', 'tire lost ', 'tread damage ', 'worn (from the customers point of view)','tread endurance','tread finding (chipping and chunking/mini cuts)'],
            datasets: [
              {
                  label: 'Top 10 Finding',
                  backgroundColor: 'rgba(255,99,132,0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                  hoverBorderColor: 'rgba(255,99,132,1)',
                  data: [272669, 112458, 59644, 47582, 34049, 29359, 28231,21581,16128,15956]
                }
            ]
        };

        const barChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            xAxes: [{
                barPercentage: 1,
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                }
            }],
            yAxes: [{
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                beginAtZero: true
                }
            }]
            }
        }

        const dataPie = {
            labels: ['Alloy', 'Steel', 'Spider', 'Air', 'NaN'],
            datasets: [
            {
                data: [284749, 117618, 1520, 647, 199],
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
            }
            ]
        }
        return (
            <MDBRow className="mb-4">
                <MDBCol md="8"className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <Bar data={dataBar} height={500} options={barChartOptions} />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader>Pie chart</MDBCardHeader>
                        <MDBCardBody>
                            <Pie data={dataPie} height={300} options={{responsive: true}} />
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <MDBListGroup className="list-group-flush">
                                <MDBListGroupItem>
                                    Sales
                                    <MDBBadge color="success-color" pill className="float-right">
                                        22%
                                        <MDBIcon icon="arrow-up" className="ml-1"/>
                                    </MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    Traffic
                                    <MDBBadge color="danger-color" pill className="float-right">
                                        5%
                                        <MDBIcon icon="arrow-down" className="ml-1"/>
                                    </MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    Orders
                                    <MDBBadge color="primary-color" pill className="float-right">
                                        14
                                    </MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    Issues
                                    <MDBBadge color="primary-color" pill className="float-right">
                                        123
                                    </MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    Messages
                                    <MDBBadge color="primary-color" pill className="float-right">
                                        8
                                    </MDBBadge>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default ChartSection1;
