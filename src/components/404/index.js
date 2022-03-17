import React from 'react';
import { Container } from 'react-bootstrap';

import image from '../../Assets/404.png';

function notfound() {
   return(
    <Container fluid className='notfound'>
     <Container>
           <img src={image} alt="404 : not found" />
     </Container>
    </Container>
   )
}

export default notfound;