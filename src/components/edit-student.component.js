import React, { Component } from "react";
import axios from 'axios';
class EditStudent extends Component {
constructor(props) {
super(props)
this.onChangeStudentName = this.onChangeStudentName.bind(this);
this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
this.onSubmit = this.onSubmit.bind(this);
// State
this.state = {
name: '',
email: '',
rollno: ''
}
}
componentDidMount() {
axios.get('http://localhost:4000/students/edit-student/' +
this.props.match.params.id)
.then(res => {
this.setState({
name: res.data.name,
email: res.data.email,
rollno: res.data.rollno
});
})
.catch((error) => {
console.log(error);
})
}
onChangeStudentName(e) {
this.setState({ name: e.target.value })
}
onChangeStudentEmail(e) {
this.setState({ email: e.target.value })
}
onChangeStudentRollno(e) {
this.setState({ rollno: e.target.value })
}
onSubmit(e) {
e.preventDefault()
const studentObject = {
name: this.state.name,
email: this.state.email,
rollno: this.state.rollno
};
axios.put('http://localhost:4000/students/update-student/' +
this.props.match.params.id, studentObject)
.then((res) => {
    console.log(res.data)
console.log('Student successfully updated')
}).catch((error) => {
console.log(error)
})
// Redirect to Student List
this.props.history.push('/student-list')
}
render() {
return (<div className="form-wrapper">

</div>);
}
}

export default EditStudent