import { tab } from '@testing-library/user-event/dist/tab';
import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loading from '../components/loading';

class Ticket extends Component
{

    state = {
        tickets: [],
        loading: true,
    }

    async componentDidMount(){
        const res = await axios.get('http://104.248.24.248/api/tickets');
        console.log(res);
        if(res.status === 200){
            console.log('Set state');
            
            this.setState({
                tickets: res.data.data,
                loading:false
            });
            console.log('Set state on data');
            console.log(res.data.data);

        }
    }

    deleteTicket = async (e, id) => {

        const deleteButton = e.currentTarget;
        deleteButton.innerText = "Deleting";
        const res = await axios.delete(`http://104.248.24.248/api/ticket/${id}`);
        if(res.status === 200)
        {
            deleteButton.closest("tr").remove();
            console.log('Message deleted');
        }
    }

    render(){

        var ticket_HTML_TABLE = "";
        if(this.state.loading){
            ticket_HTML_TABLE = <tr><td colSpan="6"><h2><Loading/></h2></td></tr>;
        }else{
            ticket_HTML_TABLE = 
            this.state.tickets.map((item)=>{
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td><Link to={`view-comment/${item.id}`} className="btn btn-link btn-sm">View comment</Link></td>
                        <td><Link to={`edit-ticket/${item.id}`} className="btn btn-success btn-sm">Edit</Link></td>
                        <td><button type="button" onClick={(e) => this.deleteTicket(e, item.id)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                )
            });
        }

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
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Author</th>
                                            <th>View comment</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ticket_HTML_TABLE}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Ticket;