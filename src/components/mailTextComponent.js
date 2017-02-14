import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class setPriority extends Component{
	
	
	render() {
		return(
		<div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th className="col-sm-8">Mail Provider</th>
              <th className="col-sm-2">Set Priority </th>
              <th className="col-sm-2"> </th>
            </tr>
          </thead>
          <tr>
			<td>SendGrid</td>
			<td><input type="number" /></td>
			<td></td>
          </tr>
        </table>
      </div>
	);
	}
}