import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PostalFooter from '../postal-footer/PostalFooter';
import './PostItem.css';

const PostItem = ({id, name, imageUrl, position, fullName, age, heigth, birthLocal  }) => (
    <Grid item xs={4}>
        <Paper className="post-jogador">
        <div className='image'>
            <img width={'200px'} src={`${imageUrl}`} alt="postal-image"/>
        </div>
        <PostalFooter
        id={id}
        name={name}
        position={position}
        fullName={fullName}
        heigth={heigth}
        age = {age}
        birthLocal={birthLocal}
        />
        
    </Paper>
    </Grid>
);

export default PostItem;
