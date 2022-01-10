import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Viewcomment extends Component
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

    render(){
        return(
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Comment of ticket nr {this.state.id}</h4>
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">BACK</Link>
                            </div>
                            <div className='card-body'>
                            {this.state.comment}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Viewcomment;