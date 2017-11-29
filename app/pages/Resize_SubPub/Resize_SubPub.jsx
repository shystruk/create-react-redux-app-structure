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

            <Resize_SubPub_Action />
        </div>
    }
}
