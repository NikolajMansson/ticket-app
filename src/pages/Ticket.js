import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Ticket extends Component
{
    render(){
        return(
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Ticket data</h4>
                                    <Link to={'add-ticket'} className="btn btn-primary btn-sm float-end">Add Ticket</Link>
                            </div>
                            <div className='card-body'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Ticket;