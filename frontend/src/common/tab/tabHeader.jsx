import React, { Component } from 'react'

class TabHeader extends Component {
    render() {
        return (
            <li>
                <a href='javascript:;'
                    data-toggle='tab'
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> <span>{this.props.label}</span>
                </a>
            </li>
        )
    }
}

export default TabHeader