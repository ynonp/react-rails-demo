var ListContacts = React.createClass({
	render: function() {
		var showEmail = this.state.showEmail;

		return (
<div>

<h1>Listing Contacts</h1>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th colSpan="3"></th>
    </tr>
  </thead>

  <tbody>
		{this.props.contacts.map(function(contact) {
			return (
      <tr>
        <td>{contact.name}</td>
        <td>{showEmail ? contact.email : '***'}</td>
      </tr>
			)
		})}
  </tbody>
</table>

<p>
<button id="btn-toggle-details" onClick={this.toggleDetails}>Show/Hide Details</button>
</p>

</div>
)
	},

	getInitialState: function() {
		return { showEmail: true };
	},

	toggleDetails: function() {
		this.setState({ showEmail: ! this.state.showEmail });
	}
	
});
