import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
class StudentTableRow extends Component {
constructor(props) {
super(props)
this.deleteStudent = this.deleteStudent.bind(this)
}
deleteStudent() {
// eslint-disable-next-line no-restricted-globals
if(confirm("are you sure wants to delete?"))
{
    axios
    .delete(
    'http://localhost:4000/students/delete-student/' + this.props.obj._id,
    )
    .then((res) => {
    console.log('Student successfully deleted!')
    })
    .catch((error) => {
    console.log(error)
    })
    }
    window.location.reload();
    }
    render() {
    return (
    <tr>
    <td>{this.props.obj.name}</td>
    <td>{this.props.obj.email}</td>
    <td>{this.props.obj.rollno}</td>
    <td>
    <Link
    className="edit-link" path={"product/:id"}
    to={'/edit-student/' + this.props.obj._id}
    >
    Edit
    </Link>
    <input type="reset"onClick={this.deleteStudent} className="btn btn-warning" value="Delete" />

    </td>
    </tr>
    )
    }
    }

    export default StudentTableRow;