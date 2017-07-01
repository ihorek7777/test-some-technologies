import React from 'react';
import { Button, Alert, ButtonToolbar, DropdownButton, ButtonGroup, MenuItem } from 'react-bootstrap';


class App extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <ButtonToolbar>
                <ButtonToolbar>
                    <Button bsStyle="success">Success</Button>
                    <Button bsStyle="primary" bsSize="large">Large button</Button>
                    <Button bsSize="large">Large button</Button>
                </ButtonToolbar>
                <ButtonGroup>
                    <Button>1</Button>
                    <Button>2</Button>
                    <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                        <MenuItem eventKey="1">Dropdown link</MenuItem>
                        <MenuItem eventKey="2">Dropdown link</MenuItem>
                    </DropdownButton>
                </ButtonGroup>
            </ButtonToolbar>
        )
    }
}


export default App;


