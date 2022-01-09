import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Addticket extends Component
{
    state = {
        title: "",
        comment: "",
        open: true, 
        author: "",
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveTicket = async (e) => {
        e.preventDefault();

        const res  = await axios.post('http://104.248.24.248/api/ticket', this.state);
        if(res.status === 201){
            this.setState({
                title: "",
                comment: "", 
                open: true,
                author: "",
            }
            );
        }    
        
        
    }

    render(){
        return(
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add ticket</h4>
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">BACK</Link>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.saveTicket}>
                                    <div className="form-group mb-3">
                                        <label>Ticket Title</label>
                                        <input type="text" name="title" onChange={this.handleInput} value={this.state.title} className="form-controll" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Ticket Comment</label>
                                        <input type="text" name="comment" onChange={this.handleInput} value={this.state.comment} className="form-controll" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Author</label>
                                        <input type="text" name="author" onChange={this.handleInput} value={this.state.author} className="form-controll" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save ticket</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Addticket;