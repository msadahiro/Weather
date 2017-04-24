import React, {Component} from 'react';

class GoogleMap extends Component{
    componentDidMount(){
        // embedded google map inside document. 
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }
    render(){
        return(
            <div ref="map" />
            // ref = reference to html element. can get direct reference by referring to this.refs.map
        )
    }
}

export default GoogleMap;