import React, { Component, Fragment } from 'react';
import About from './About'
import Advancedtab from './Advancedtab'
import Service from './Service'
import Testimonials from './Testimonials'

class Content extends Component {
    render() {
        return (
            <Fragment>
                <About />
                <Service />
                <Advancedtab />
                <Testimonials />
            </Fragment>
        );
    }
}

export default Content;