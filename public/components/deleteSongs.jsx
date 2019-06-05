import React, {Component} from 'react';


//inline style for delete component
const deleteBox = {
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

class DeleteSongs extends Component {
    constructor(props) {
        super(props);

        //initializes the class properties
        this.state = {
            _id: ''
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
    this will call the delete method in API
    */
    submitHandler(event) {
        event.preventDefault(); //prevent refresh of input values
        fetch(`http://localhost:4000/songs/${this.state._id}`, {
            method: 'Delete',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response);
            if(response.status === 422){
                alert('Unable to find Song');
                return;
            }
            alert('Song Deleted Successfully');
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return <div style={deleteBox}>
            <form onSubmit={this.submitHandler}>
                <table>
                    <tbody>
                    <tr>
                        <td>Id</td>
                        <td><input type="text" name="_id" value={this.state._id}
                                   onChange={this.changeHandler} className='textBox' autoComplete='off' required/></td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    }
}

export default DeleteSongs;