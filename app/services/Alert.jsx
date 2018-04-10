import React from 'react';
import isEmpty from 'lodash/isEmpty';
import store from './../store';
import { hideAlert } from './../actions/alert';

export default class Alert extends React.Component {
    static closeAlert() {
        store.dispatch(hideAlert());
    }

    render() {
        if (this.props.alert && isEmpty(this.props.alert.message)) {
            return null;
        }

        return <div className="app-alert-service animated fadeIn">
            <div className="app-alert-modal">
                <div className="app-alert-body">
                    <div className="app-alert-message">{this.props.alert.message}</div>
                    <div className="app-alert-close" onClick={Alert.closeAlert}>
                        <i className="fa fa-times" />
                    </div>
                </div>
                <div className="app-alert-button">
                    <button onClick={Alert.closeAlert}>OK</button>
                </div>
            </div>
        </div>
    }
}
