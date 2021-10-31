import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fathomless-eyrie-64424.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div>
            {services.length === 0 ?
                <Button className="my-5 " variant="primary">
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button> :
                <div id="services" className="container">

                    <h2 className="m-5 mt-5">World's Best Places to Visit</h2>
                    <div className="row row-cols-1 row-cols-md-1 text-lg-start g-5 mt-5 ">

                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Services;