import React, {Component} from 'react';

var heightFixer = {
    height: '25rem',
    marginTop: '1rem',
    marginBottom: '1rem',
}

var IFrame = props => ({
    render: function(){
        var videoSrc = "https://www.youtube.com/embed/" +        this.props.video + '?autoplay=' +
            this.props.autoplay + '&rel' +
            this.props.rel + '&modestbranding=' +
            this.props.modest;
        return (
            <div style={heightFixer} className='container'>
                <iframe className='player' type='text/html' width='100%' height='100%' src={videoSrc} frameborder='0' />
            </div>
        );
    }
});



export default IFrame;