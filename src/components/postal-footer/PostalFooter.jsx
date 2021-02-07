import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const PostalFooter = ({name, position, fullName, age, heigth, birthLocal}) => {
    return (
        <div className="postal-footer">
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <div className="post-summary">
                        <span className='name'>{name}</span><br/>
                        <span className='position'>{position}</span>
                    </div>
                </AccordionSummary>
                <AccordionDetails className="post-details">
                    <div className="post-details">
                        <span className='full-name'>Nome : {fullName}</span><br/>
                        <span className='anos'>Anos : {age}</span><br/>
                        <span className='heigth'>Altura : {heigth}</span><br/>
                        <span className='local-nascimento'>Local de nascimento : {birthLocal}</span>
                    </div>
                </AccordionDetails>
            </Accordion>

        </div>

    );
};

export default PostalFooter;