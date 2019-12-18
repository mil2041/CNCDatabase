import React from 'react';
import MinusIcon from './MinusIcon';
import PlusIcon from './PlusIcon';
import './react_collapsible.css';

const PanelHeader = props => {
    return (
        <button
            className="panel__header"
            onClick={props.handleToggle}
            onKeyDown={props.handleKeyDown}
            aria-expanded={props.isExpanded}
        >
            {props.children}   
            {props.isExpanded ? <MinusIcon/> : <PlusIcon/>}
        </button>
    )
}

export default PanelHeader;