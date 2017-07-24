import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = { comment: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ comment: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(actions);
        // actions.default(this.state.comment);

        actions.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="comment-box">
                <textarea
                    value={this.state.comment}
                    onChange={this.handleChange.bind(this)}/>
                <button action="submit">Submit Comment</button>
            </form>
        );
    }
}

const Container = connect(null, actions)(CommentBox);

export default Container;
