import React from  'react';
import ButtonGroup	from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const SearchBox = () => {
	return(
		<ButtonGroup aria-label="Basic example">
		  <Button variant="secondary" className=' pr7'>Left</Button>
		  <Button variant="secondary" className=' pr7'>Middle</Button>
		  <Button variant="secondary" className=' pr7'>Right</Button>
		</ButtonGroup>
	);
}

export default SearchBox;