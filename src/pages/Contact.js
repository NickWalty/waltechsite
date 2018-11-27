import React, { Component } from 'react';
import '../css/contact.css'; //Import compiled SCSS file

class Contact extends Component {
		constructor() {
			super();
			this.state = {
				name: '',
				email: '',
				message: '',
				feedback: ''
			}
		}

		//Set up event handlers
		onNameChange = ( event ) => {
			this.setState({
				name: event.target.value
			});
		}

		onEmailChange = ( event ) => {
			this.setState({
				email: event.target.value
			});
		}

		onMessageChange = ( event ) => {
			this.setState({
				message: event.target.value
			});
		}

		onSubmit = ( event ) => {
			//Validate Fields
			if (this.state.name === '' ||
				this.state.email === '' ||
				this.state.message ==='') {
				return this.setState({
					feedback: 'All fields must be filled in to send e-mail.'
				});
			}
			//If fields are filled in, populate emailJS variables
			const userID = [Redacted for Github Upload];
			const templateID = [Redacted for Github Upload];
			const data = {
				service_id: 'gmail',
				template_id: templateID,
				user_id: userID,
				template_params: {
					name: this.state.name,
					email: this.state.email,
					message: this.state.message
				}
			}
			//send e-mail
			fetch('https://api.emailjs.com/api/v1.0/email/send', {
				method: 'post',
				headers: {'content-type': 'application/json'},
				body: JSON.stringify(data)
			})
			.then ((res) => {
				this.setState({
					name: '',
					email: '',
					message: '',
					feedback: 'Email Sent. Thanks for contacting WalTech Visualization.'
				})
			})
			.catch ((err) => {
				this.setState({
					feedback: 'Unable to send e-mail. Please try again later.'
				})
			})
			
		}

	render() {
		return(
			<div className= "contact">
				<h1>Contact WalTech Visualization</h1>
				<p>If you'd like to contact WalTech Visualization, simply fill out the form below.</p>
				<div className = 'email'>
					<p>If you're not the form-filling type, you can also just e-mail </p>
					<a href = 'mailto:nicholas@waltechvis.com'> Nicholas@waltechvis.com</a>
				</div>
				<div className = 'form'>
					<div className = 'row'>
						<div className = 'halfLine'>
							<p>Name</p>
							<input 
							className = 'textBox'
							type = 'text'
							name = 'name'
							onChange = {this.onNameChange}
							/>
						</div>
						<div className = 'halfLine'>
							<p>E-mail</p>
							<input 
							className = 'textBox'
							type = 'email'
							name = 'email'
							onChange = {this.onEmailChange}
							/>
						</div>
					</div>
					<div className = 'message'>
						<p>Message</p>
						<textarea
						className = 'messageBox'
						rows = '4'
						type = 'message'
						name = 'message'
						onChange = {this.onMessageChange}
						/>
					</div>
					<p className = 'feedback'>
						{this.state.feedback}
					</p>
				</div>
				<div className = 'buttonArea'>
					<button 
							type = 'button'
							className = 'submit'
							name = 'submit'
							onClick = {this.onSubmit}
						>Send</button>
				</div>
			</div>
		);
	}
}

export default Contact;