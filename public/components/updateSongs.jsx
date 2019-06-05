import React, {Component} from 'react';


//inline style for updateSong component
const updateBox = {
    fontSize: '1vw',
    fontFamily: 'poppins',
    width: '35vw',
    height: 'auto',
    padding: '1vw',
    margin: '2vw',
    boxSizing: 'border-box',
    border: '0.18vw solid #ff0000',
    borderRadius: '1.3vw',
}

class UpdateSongs extends Component {
    constructor(props) {
        super(props);

        //initializes the class properties
        this.state = {
            _id: '',
            title: '',
            artist: '',
            genre: ''
        }

        //passing class context to each method.
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    /*
    this triggers when user type inputs in inputs fields
    this store input fields values to class property values
    */
    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    /*
    this triggers when user click the submit button
    this will call the update method in API
    */
    submitHandler(event) {
        event.preventDefault(); //prevent refresh of input values
        fetch(`http://localhost:4000/songs/${this.state._id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                artist: this.state.artist,
                genre: this.state.genre
            })
        }).then(response => {
            console.log(response);
            if(response.status === 422){
                alert('Unable to find Song');
                return;
            }
            alert('Song Updated Successfully');
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return <div style={updateBox}>
            <form onSubmit={this.submitHandler}>
                <table>
                    <tbody>
                    <tr>
                        <td>Id</td>
                        <td><input type="text" name="_id" value={this.state._id}
                                   onChange={this.changeHandler} className='table-hover' autoComplete='off' required/></td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td><input type="text" name="title" value={this.state.title}
                                   onChange={this.changeHandler} className='textBox' autoComplete='off' required/></td>
                    </tr>
                    <tr>
                        <td>Artist</td>
                        <td><input type="text" name="artist" value={this.state.artist}
                                   onChange={this.changeHandler} className='textBox' autoComplete='off' required/></td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td><input type="text" name="genre" value={this.state.genre}
                                   onChange={this.changeHandler} className='textBox' autoComplete='off' required/></td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" className='btn btn-danger'>Update</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    }
}

export default UpdateSongs;