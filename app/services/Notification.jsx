import React from 'react';

const styles = {
    parent: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        zIndex: '2'
    },
    message: {
        display: 'inline-block',
        background: '#fa6364',
        color: '#fff'
    }
};

export default class Notification extends React.Component {
    render() {
        const message = this.props.notification.message || '';

        return <div style={styles.parent}
                    className={"bs-notification-service animated " + (message ? "fadeInDown" : "fadeOutUp")}>
            <div style={styles.message} className="bs-notification-service-ms">{message}</div>
        </div>
    }
}
