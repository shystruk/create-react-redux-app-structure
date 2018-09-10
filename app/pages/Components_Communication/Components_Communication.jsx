import React from 'react';
import jQuery from 'jquery';
import { FormattedMessage } from 'react-intl';
import { oneWay, twoWay, oneTime, disconnect, disconnectAll } from 'bind-dom';

export default class Components_Communication extends React.Component {
    componentDidMount() {
        oneWay('inputObserver', document.querySelector('#observer_1'), document.querySelector('#observer_2'));
        oneTime('inputObserver_2', document.querySelector('#observer_3'), document.querySelector('#observer_4'));
        twoWay('inputObserver_3', document.querySelector('#observer_5'), document.querySelector('#observer_6'));

        setTimeout(() => {
            document.querySelector('#observer_3').innerHTML = 'I\'m here :)';
        }, 5000);
    }

    componentWillUnmount() {
        disconnect('inputObserver');
        disconnectAll();
    }

    onChange = (event) => {
        jQuery('#observer_1').attr('value', event.target.value);
    }

    onChangeArea = (event) => {
        jQuery(event.target).attr('data-bind-dom', event.target.value.length);
    }

    render() {
        return (
            <div className="app-components-communication">
                <h1><FormattedMessage id="pages.components_communication"/></h1>

                <p>Synchronization between two DOM elements (One-Time, One-Way & Two-Way binding) <a href="https://github.com/shystruk/bind-dom" target="_blank"> bind-dom</a></p>

                <div style={{marginTop: '30px'}}>
                    <h4>OneWay</h4>
                    <div style={{display: 'inline-block', marginRight: '50px'}}>
                        <div style={{marginBottom: '5px'}}><strong>Input Observer</strong></div>
                        <input id="observer_1" type="text" name="valueOne" onChange={this.onChange}/>
                    </div>
                    <div style={{display: 'inline-block'}}>
                        <div style={{marginBottom: '5px'}}><strong>Apply To</strong></div>
                        <input id="observer_2" type="text" />
                    </div>
                </div>

                <br/>

                <div>
                    <h4>OneTime</h4>
                    <span id="observer_3" style={{paddingRight: '50px'}}>Loading...</span>
                    <span id="observer_4">Waiting...</span>
                </div>

                <div style={{marginTop: '30px'}}>
                    <h4>TwoWay</h4>
                    <div style={{display: 'inline-block', marginRight: '50px'}}>
                        <textarea style={{width: '300px', height: '100px'}} id="observer_5" data-bind-dom="" onChange={this.onChangeArea} />
                    </div>
                    <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                        <textarea style={{width: '300px', height: '100px'}} id="observer_6" data-bind-dom="" onChange={this.onChangeArea} />
                    </div>
                </div>

            </div>
        );
    }
}
