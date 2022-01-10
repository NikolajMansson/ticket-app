import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Editticket extends Component
{
    state = {
        id: null,
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

    async componentDidMount(){
        const ticket_id = this.props.match.params.id;
        const res = await axios.get(`http://104.248.24.248/api/ticket/${ticket_id}`);
        if(res.status === 200){
            this.setState({
                id: res.data.data.id,
                title: res.data.data.title,
                comment: res.data.data.comment,
                open: res.data.data.open, 
                author: res.data.data.author,
            })

        }
    }

    updateTicket = async (e) => {
        e.preventDefault();

        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerText = "Updating";
        const ticket_id = this.props.match.params.id;
        console.log('ticket id');
        console.log(ticket_id);
        const res  = await axios.put(`http://104.248.24.248/api/ticket/${ticket_id}`, this.state);
        if(res.status === 200){
            document.getElementById('updatebtn').disabled = false;
            document.getElementById('updatebtn').innerText = "Update ticket";
        }    
    }

    render(){
        return(
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit ticket</h4>
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">BACK</Link>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.updateTicket}>
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
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Update ticket</button>
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

export default Editticket;