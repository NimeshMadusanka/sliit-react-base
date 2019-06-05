import React, {Component} from 'react';
import SubmitSongs from './submitSongs';
import ListSongs from './listSongs';
import UpdateSongs from './updateSongs';
import DeleteSongs from './deleteSongs';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        fetch('/api/messages', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({message: jsonRes.message});
            })
            .catch(err => {
                this.setState({message: 'An error occurred'});
            });
    }

    render() {

        return <div className="container align-middle">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">MUSICS</a>
            </nav>
        <h2>{this.state.message}</h2>
            <SubmitSongs/>
            <ListSongs/>
            <UpdateSongs/>
            <DeleteSongs/>
        </div>
    }
}
