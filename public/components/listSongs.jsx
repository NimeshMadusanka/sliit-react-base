import React, {Component} from 'react';


//inline style for listSong component
const songBox = {
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

class ListSongs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: []
        }
    }

    /*
    this triggers when component mount to the react DOM
    fetch method get the songs information form API and store them in class songs[] property
    */
    componentDidMount() {
        fetch('http://localhost:4000/songs').then(response => {
            return response.json();
        }).then(songs => {
            this.setState({
                songs: songs
            });
        });
    }

    render() {
        return <div style={songBox}>
            <table cellPadding='8'>
                <tbody>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Artist</td>
                    <td>Genre</td>
                </tr>
                {
                    this.state.songs.map(song => {
                        return <tr key={song._id}>
                            <td>{song._id}</td>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    }
}

export default ListSongs;