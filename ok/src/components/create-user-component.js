import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateUser extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeUserNama = this.onChangeUserNama.bind(this);
    this.onChangeUserUmur = this.onChangeUserUmur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      nama: '',
      umur: ''
    }
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

    axios.post('http://localhost:4000/users/create-user', userObject)
      .then(res => console.log(res.data));

    this.setState({
      nama: '',
      umur: ''
    });
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
          Create User
        </Button>
      </Form>
    </div>);
  }
}