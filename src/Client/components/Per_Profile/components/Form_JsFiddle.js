import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';

class Form_JsFiddle extends Component {

  handleFormSubmit({username}){
    const type = 'jsfiddle';
    const token = localStorage.getItem('token');
    this.props.socialmedia_auth({type, token ,username});
  }

  deauthFiddle(){
    const type = 'jsfiddle';
    const token = localStorage.getItem('token');
    this.props.socialmedia_deauth({type, token});
  }

  render(){
    const {fields: {username}, handleSubmit} = this.props;
    return(
        <div className="modal fade" id="jsfiddle" role="dialog">
          <div className="modal-dialog">
            {//<!-- Modal content-->
            }
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">jsFiddle</h4>
              </div>
              <div className="modal-body">
                <input className="form-control"
                  name="username" id="username"
                  type="text" placeholder="jsFiddle Username" {...username}></input>
              </div>
              <div className="modal-footer">
                <div className="modal-button">
                  <button type="submit" className="btn btn-primary" data-dismiss="modal"
                    onClick= {handleSubmit(this.handleFormSubmit.bind(this))}>CONNECT</button>

                    <button type="button" className="btn btn-danger" data-dismiss="modal"
                      onClick= {this.deauthFiddle.bind(this)}>DISCONNECT</button>
                </div>

              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default reduxForm({
  form: 'fiddleForm',
  fields: [
    'username'
  ]
}, null, actions) (Form_JsFiddle);
