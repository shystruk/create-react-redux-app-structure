import React from 'react';
import CSVFileValidator from 'csv-file-validator';

const CSV_Config = {
    headers: []
}

export default class CSV_Validator extends React.Component {
    constructor() {
        super();
    }

    /**
     * @param {Object} event
     */
    handleChange = (event) => {
        this.validateFile(event.target.files[0]);

        // allow to upload the same file twice in a row
        event.target.value = '';
    }

    /**
     * @param {File} file
     */
    validateFile = (file) => {
        CSVFileValidator(file, CSV_Config)
            .then(csvData => {
                console.log('DATA: ', csvData.data)
                console.log('MESSAGES: ', csvData.inValidMessages)
            })
            .catch(err => {
                console.log('ERROR: ', err)
            })
    }

    render() {
        return (
            <div className="app-csv-validator">
                <input type="file" accept=".csv" name="file" onChange={this.handleChange} />
            </div>
        );
    }
}
