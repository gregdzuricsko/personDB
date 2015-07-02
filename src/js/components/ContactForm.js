"use strict";
var React = require('react');

var ContactForm = React.createClass({
    getInitialState: function(){
        return {
            contact: this.props.contact
            clicked: false
        };
    },
    //components contain other components
    render: function(){
        var text = this.state.clicked ? 'Yaaaaass' : 'no';
        return (
            <p onClick={this.handleClick}>
                Has it been clicked? {text}
            </p>
        );
    },

    //not yet sure how this is different from handleInputChange. Maybe arguments.
    handleClick: function(event){
        this.setState({
            contact : this.props.contact
            clicked: false
        });
    }
    // handleChange: function(inputField, event) {
        // var newContact = this.state.contact;
        // newContact[field] = event.target.value;
        // this.setState({contact: newContact})
    // }
});

module.exports = ContactForm
