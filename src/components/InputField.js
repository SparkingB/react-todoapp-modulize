import React from 'react';
import PropTypes from 'prop-types';


export class InputField extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { value: props.value || '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }


    handleChange(e) {
        this.setState({ value: e.target.value });
        const { onChangeSearch } = this.props;
        onChangeSearch && onChangeSearch(e.target.value);
    }


    handleKeyDown(e) {
        const { onKeyDown, onSubmitEditing } = this.props;
        const { value } = this.state;
        switch (e.keyCode) {
            case 13:
                if (value.trim()) {
                    onSubmitEditing && onSubmitEditing(value);
                }
                this.setState({ value: '' });
                break;
            default:
                break;
        }
        onKeyDown && onKeyDown(e);
    }


    render() {
        const { className, ...rest } = this.props;
        return (
            <div className={className}>
                <input
                    {...rest}
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}


InputField.propTypes = {
    className: PropTypes.string.isRequired,
    onSubmitEditing: PropTypes.func,
    onKeyDown: PropTypes.func,
    onChangeSearch: PropTypes.func
};

