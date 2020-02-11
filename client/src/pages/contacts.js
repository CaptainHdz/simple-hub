import React, { Component } from 'react';
import { Menu, Button, Header, Input, Table } from 'semantic-ui-react';
import ContactModal from '../components/ContactModal';
import Contact from '../components/Contact';
import axios from 'axios';

class Contacts extends Component {

    state = {
        data: []
    }


    componentDidMount() {
        axios.get('/api/contact/all')
        .then(res => {
            this.setState({
                data: res.data.data
            })
            console.log(this.state.data)
        })
        .catch(err => {
            console.log(err)
        });
    }

    componentDidUpdate() {
        axios.get('/api/contact/all')
        .then(res => {
            this.setState({
                data: res.data.data
            })
            console.log(this.state.data)
        })
        .catch(err => {
            console.log(err)
        });
    }

    render() {
        return (
            <div>
                <Menu secondary>
                    <Menu.Item>
                        <Header as='h1' floated='left' size='huge'>Contacts</Header>
                    </Menu.Item>
                    <Menu.Item>
                        <ContactModal trigger={
                            <Button content='+ New Contact' color='orange' floated='left' inverted/>
                        } />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item position='right'>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Table basic='very' size='large' className='margin-top bg-white'>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Edit</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {/* Render all contacts here */}   
                        {this.state.data.map(contact => {
                            return (
                                <Contact
                                name={contact.name}
                                title={contact.title}
                                email={contact.email}
                                phoneNumber={contact.phoneNumber}
                                />
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        )
    }
};


export default Contacts;