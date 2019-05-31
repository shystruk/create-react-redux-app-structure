import React from 'react';
import { FormattedMessage } from 'react-intl';
import CSV_Validator from '../../components/CSV_Validator/CSV_Validator';

export default class CSV_Check extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="app-csv_check">
                <h1><FormattedMessage id="pages.csv_check"/></h1>

                <CSV_Validator />
            </div>
        );
    }
}
