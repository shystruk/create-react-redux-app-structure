import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import PublishSubscribe from 'publish-subscribe-js';
import { PUB_SUB } from './../../constants/events.constant';
import { Resize_SubPub_Action_Interface } from './../../helpers/interfaces';

export default class Resize_SubPub_Action extends React.Component {
    constructor() {
        super();

        this.state = Resize_SubPub_Action_Interface;

        this.resizeSubKey = 0;

        this.updateSizes = this.updateSizes.bind(this);
    }

    updateSizes(data = {}) {
        this.setState({
            width: data.width || window.innerWidth,
            height: data.height || window.innerHeight
        });
    }

    componentDidMount() {
        this.updateSizes();
        this.resizeSubKey = PublishSubscribe.subscribe(PUB_SUB.RESIZE, this.updateSizes);
    }

    componentWillUnmount() {
        PublishSubscribe.unsubscribe(PUB_SUB.RESIZE, this.resizeSubKey);
    }

    render() {
        return (
            <div className="app-resize-pubsub">
                <div><FormattedHTMLMessage id="dumb.display_width" values={{width: this.state.width}} /></div>
                <div><FormattedHTMLMessage id="dumb.display_height" values={{height: this.state.height}} /></div>
                <br />
            </div>
        )
    }
}
