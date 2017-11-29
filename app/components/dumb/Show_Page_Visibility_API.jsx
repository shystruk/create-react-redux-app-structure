'use strict';

import React, { Component } from 'react';
import { Show_Page_Visibility_API_Interface } from './../../helpers/interfaces';
import SetInterval from 'set-interval';
import store from './../../store';
import { showAlert } from './../../actions/alert';

export default class Show_Page_Visibility_API extends Component {
    constructor() {
        super();

        this.state = Show_Page_Visibility_API_Interface;
        this.visibilityChangeSubKey = 0;

        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
        this.simulateHTTPRequest = this.simulateHTTPRequest.bind(this);
    }

    simulateHTTPRequest() {
        setTimeout(() => {
            if (!this.unmount) {
                this.setState({amountOfNewUsers: ++this.state.amountOfNewUsers});
            }
        }, 500);
    }

    /**
     * @param {Object} event
     * @param {String} action
     */
    handleVisibilityChange(event, action) {
        if (action === 'continue') {
            SetInterval.start(this.simulateHTTPRequest, 1000);
            store.dispatch(showAlert('Seems like the page was not visible. Do not worry, we keep working :)'));
        } else {
            SetInterval.clear();
        }
    }

    componentDidMount() {
        SetInterval.start(this.simulateHTTPRequest, 1000);
        this.visibilityChangeSubKey = app.visibilityChangeEvent.subscribe(this.handleVisibilityChange);
    }

    componentWillUnmount() {
        this.unmount = true;
        SetInterval.clear();
        app.visibilityChangeEvent.unsubscribe(this.visibilityChangeSubKey);
    }

    render() {
        return <div className="app-show-page-visibility-api">

            <br/>
            <h2>Amount of new users: {this.state.amountOfNewUsers}</h2>

        </div>
    }
}
