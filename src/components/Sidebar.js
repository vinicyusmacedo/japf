import React from 'react';

/* Component Sidebar
Sidebar will receive an array of items and will put them on a list 
based on the prettyName of each item. This means that the items array has to have this format:

[
	{
		"function": "functionName",
		"prettyName": "Pretty Name",
		"endpoint": "/endpoint"
	},
]

This is what the endpoint /functions on the application should expose.
TODO: we should parametrize the name of the endpoint.
*/
function Sidebar({items}) {
    const sidebarItems = items.map((item) => 
        <li>{item.prettyName}</li>
    );
    return (
        <ul>{sidebarItems}</ul>
    );
}

export default Sidebar;