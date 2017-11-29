'use strict';

import React, { Component } from 'react';
import Resize_SubPub_Action from './../../components/dumb/Resize_SubPub_Action';

export default class Resize_SubPub extends Component {
    constructor() {
        super();
    }

    render() {
        return <div className="app-resize-subpub">
            <h1>Resize SubPub</h1>

            <p>
                <em>For more details about Resize listener here read this
                    <a href="https://medium.com/@shystruk/do-you-still-register-window-event-listeners-in-each-component-react-in-example-31a4b1f6f1c8"
                       title="clearIntervals() when user has a nap" target="_blank"> article</a>
                </em>
            </p>

            <Resize_SubPub_Action />
        </div>
    }
}
