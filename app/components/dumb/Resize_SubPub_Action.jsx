'use strict';

import React, { Component } from 'react';
import { Resize_SubPub_Action_Interface } from './../../helpers/interfaces';

export default class Resize_SubPub_Action extends Component {
    constructor() {
        super();

        this.state = Resize_SubPub_Action_Interface;

        this.resizeSubKey = 0;

        this.updateSizes = this.updateSizes.bind(this);
    }

    updateSizes() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    componentDidMount() {
        this.updateSizes();
        this.resizeSubKey = app.resizeEvent.subscribe(this.updateSizes);
    }

    componentWillUnmount() {
        app.resizeEvent.unsubscribe(this.resizeSubKey);
    }

    render() {
        return <div className="app-resize-pubsub">

            <div><strong>Width: {this.state.width}</strong></div>
            <div><strong>Height: {this.state.height}</strong></div>
            <br />

        </div>
    }
}
