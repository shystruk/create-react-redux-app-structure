'use strict';

import React, { Component } from 'react';
import { Show_Page_Visibility_API_Interface } from './../../helpers/interfaces';

export default class Show_Page_Visibility_API extends Component {
    constructor() {
        super();

        this.state = Show_Page_Visibility_API_Interface;
    }

    render() {
        return <div className="app-show-page-visibility-api">

            <div>Amount of new users: {this.state.amountOfNewUsers}</div>

        </div>
    }
}
