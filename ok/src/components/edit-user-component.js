import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditUser extends Component {

  constructor(props) {
    super(props)

    this.onChangeUserNama = this.onChangeUserNama.bind(this);
    this.onChangeUserUmur = this.onChangeUserUmur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      nama: '',
      umur: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/users/edit-user/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          nama: res.data.nama,
          umur: res.data.umur
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUserNama(e) {
    this.setState({ nama: e.target.value })
  }

  onChangeUserUmur(e) {
    this.setState({ umur: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const userObject = {
      nama: this.state.nama,
      umur: this.state.umur
    };

    axios.put('http://localhost:4000/users/update-user/' + this.props.match.params.id, userObject)
      .then((res) => {
        console.log(res.data)
        console.log('User successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/user-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Nama">
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" value={this.state.nama} onChange={this.onChangeUserNama} />
        </Form.Group>

        <Form.Group controlId="Umur">
          <Form.Label>Umur</Form.Label>
          <Form.Control type="umur" value={this.state.umur} onChange={this.onChangeUserUmur} />
        </Form.Group>

        <br/>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update User
        </Button>
      </Form>
    </div>);
  }
}