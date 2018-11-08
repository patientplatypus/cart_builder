import  React, { Component } from "react";
import { Button, List, ListItem } from "reactstrap";

//When i click on button it send the ID back 
// JSON Mock-up 
//    {
//     "array": [
//         "CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation (hY7m5jjJ9mM)",
//         "Funniest CATS EVER - Die LAUGING NOW! (Rmx1JGTX1yw)",
//         "Bet you havent't LAUGHED THAT HARD before! - Super FUNNY CATS (N2z5dSRkv_I)",
//         "SUPER WEIRD CATS that will totally CONFUSE YOU! - Extremely FUNNY CAT VIDEOS compilation (uCLEq9V0-Yk)",
//         "Top Cats Vs. Cucumbers 🔴 Funny Cat Videos Compilation - Gatos Vs. Pepinos Vídeo Recopilación (DXRkXmEK44U)",
//         "GIANT Maze Labyrinth for Cat Kittens. Can they EXIT? (LJlYX7PZ9UU)",
//         "Funny Cats Vine Compilation September 2015 (HxM46vRJMZs)",
//         "Try Not To Laugh Challenge - Funny Cat & Dog Vines compilation 2017 (EtH9Yllzjcc)",
//         "Hilarious CAT VIDEOS 😹 COMPILATION that will make you LAUGH (ArpKVFogtJQ)",
//         "Funny Cats and Kittens Meowing Compilation (DXUAyRRkI6k)"
//     ]
// }
// http request will go to Peters stuff, and give back 


export default class UrlButton extends Component {

    state = {
        Videos: []
    };

    componentDidMount(){
        this.loadVideos();
    };

    loadVideos = () => {
        API.getVideos()
        .then(res=> this.setState({Videos: res.data}))
        .catch(err => console.log(err));
    }

    render(){

        var buttonName = array[1];

        return (
            
           <div>
               {this.state.Videos.length ? (
                   <List>
                       {this.state.Videos.map(Videos => (

                       ))}
                   </List>
               )}
           </div>
        );
    }
}