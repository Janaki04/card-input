import React,{Component} from "react"

class InputFields extends Component {
handleChange = (e) => {
	const { maxLength, value, name } = e.target;
	const [ data] = name.split("-");

	let details = parseInt(data, 10);

	if (value.length >= maxLength) {

	if (details < 3) {

		const number = document.querySelector(`input[name=field-${details + 1}]`);

		if (number === maxLength) {
		number.focus();
		}
	}
	}
};

render() {
	return (
	<div >
    <h1>CARD NUMBER*</h1>| 
		<InputFild name="field-1" length="4" handleChange={this.handleChange} />| |
		<InputFild name="field-2" length="4" handleChange={this.handleChange} />| |
		<InputFild name="field-3" length="4" handleChange={this.handleChange} />| |
		<InputFild name="field-3" length="4" handleChange={this.handleChange} />|
    </div>
	);
}
}
class InputFild extends Component {
render() {
	return (
	<input
		type="text"
		name={this.props.name}
		maxLength={this.props.length}
		onChange={this.props.handleChange}
	></input>
	);
}
}
export default InputFields