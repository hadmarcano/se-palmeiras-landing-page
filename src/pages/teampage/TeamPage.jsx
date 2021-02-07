import React from 'react';
import Grid from '@material-ui/core/Grid';
import TEAM_DATA from './team.data';
import PostItem from '../../components/post-item/PostItem';

const TeamPage = () => {
    return (
        <Grid container className="TeamPage">
            { TEAM_DATA.jogadores.map(
                ({id, ...otherJogadoresProps}) => (<PostItem key={id} {...otherJogadoresProps} />)
            )}
        </Grid>
    )
};

export default TeamPage;

// class TeamPage extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             jogadores : TEAM_DATA.jogadores
//         };

//     }

//     render(){
//         const {jogadores} = this.state;
//         return(
//             <Grid container className="TeamPage">
//                 { jogadores.map(
//                     ({id, ...otherJogadoresProps}) => (<PostItem key={id} {...otherJogadoresProps} />)
//                 )}
//             </Grid>
//         )
//     }
// }
