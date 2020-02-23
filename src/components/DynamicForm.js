import React from 'react';

function handleSubmit(event) {
    return null;
}

/* Component DynamicForm

DynamicForm will create a form dynamically. 
It requires the endpoint and a payload of the fields and field types, in this format:

{
	"method": "GET",
	"queryParams": {
		"param1": {
			"type": "string",
			"default": "hello"
		}
    },
    "bodyParams": {
		"param1": {
			"type": "string",
			"default": "hello"
		}
	}
}

You can use queryParams for GET and bodyParams for POST, althought they will both be forwarded (but might not be accepted by the API).

*/
function DynamicForm({endpoint, formContent}) {
    return (
        <form onSubmit={this.handleSubmit}>

        </form>
    );
}

export default DynamicForm;