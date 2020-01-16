import React from 'react'; 
import Aux from '../../../hoc/Aux';
import  {InputGroup, FormControl} from 'react-bootstrap' ;

const ProjectApplication = (props)=> {

    return (
        <Aux>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Your Email"
                aria-label="Your Email"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>Message</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
        </Aux>
    );
}

export default ProjectApplication ;