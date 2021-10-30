import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="containers">
            {<Row className="header-all">
                <Col xs={12} lg={12}>
                    <div className="home-description p-4">
                        <h1 className="title">
                            travel the world
                        </h1>
                        <p className="p-title">
                            teavel the world, experience the greatness, it's the best gift given
                            by the nature.
                        </p>
                        <Button className="btn-visit p-2">Explore Places</Button>
                    </div>
                </Col>


            </Row>}

        </div>
    );
};

export default Banner;
