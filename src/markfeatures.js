import React, { Component } from 'react';
//import SdkPopup from '@boundlessgeo/sdk/components/map/popup';
//import RendererSwitch from '../rendererswitch';
import SdkZoomControl from '@boundlessgeo/sdk/components/map/zoom-control';
import SdkMapReducer from '@boundlessgeo/sdk/reducers/map';
import SdkPopup from '@boundlessgeo/sdk/components/map/popup';

import * as mapActions from '@boundlessgeo/sdk/actions/map';

// pop up controls 

class MarkFeatures extends SdkPopup {

  constructor(props) {
    super(props);
    //this.markFeatures = this.markFeatures.bind(this);
  }

//   markFeatures(evt) {
//     const feature_ids = [];
//     const features = this.props.features;
//     console.log(features)

//     for (let i = 0, ii = features.length; i < ii; i++) {
//       // create an array of ids to be removed from the map.
//       feature_ids.push(features[i].properties.id);
//       // set the feature property to "marked".
//       features[i].properties.isMarked = true;
//     }

//     // remove the old unmarked features
//     //store.dispatch(mapActions.removeFeatures('points', ['in', 'id'].concat(feature_ids)));
//     // add the new freshly marked features.
//     //store.dispatch(mapActions.addFeatures('points', features));
//     // close this popup.
//     this.close(evt);
//   }


  render() {

      let property = {} 
      //let features = this.props.features
    for (let i = 0 ; i < this.props.features.length; i ++){
           //console.log(this.props.features[i])
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Address']){
      property['surveyparcels84.4.41update surveyparcels84_Address'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Address']
    }
      //copy and paste  the if statements  for each field 
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Any Structures Here?']){
      property['surveyparcels84.4.41update surveyparcels84_Any Structures Here?'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Any Structures Here?']
    } 
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Condition of the Building?']){
      property['surveyparcels84.4.41update surveyparcels84_Condition of the Building'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Condition of the Building']
    }  
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Building Type']){
      property['surveyparcels84.4.41update surveyparcels84_Building Type'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Building Type']
    }  
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Business name (if applicable)']){
      property['surveyparcels84.4.41update surveyparcels84_Business name (if applicable)'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Business name (if applicable)']
    } 
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Does a roof exist?']){
      property['surveyparcels84.4.41update surveyparcels84_Does a roof exist?'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Does a roof exist?']
    }
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Number of exterior walls present']){
      property['surveyparcels84.4.41update surveyparcels84_Number of exterior walls present'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Number of exterior walls present']
    }
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Number of visible doorways unsecure']){
      property['surveyparcels84.4.41update surveyparcels84_Number of visible doorways unsecure'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Number of visible doorways unsecure']
    }
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Number of visible window bays unsecure']){
      property['surveyparcels84.4.41update surveyparcels84_Number of visible window bays unsecure'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Number of visible window bays unsecure']
    }
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Secondary Structure']){
      property['surveyparcels84.4.41update surveyparcels84_Secondary Structure'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Secondary Structure']
    }
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Yard Maintained']){
      property['surveyparcels84.4.41update surveyparcels84_Yard Maintained'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Yard Maintained']
    }
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Notes']){
      property['surveyparcels84.4.41update surveyparcels84_Notes'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Notes']
    }
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Picture of the property']){
      property['surveyparcels84.4.41update surveyparcels84_Picture of the property'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Picture of the property']
    }
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Additional Picture2']){
      property['surveyparcels84.4.41update surveyparcels84_Additional Picture2'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Additional Picture2']
    }
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Additional Picture3']){
      property['surveyparcels84.4.41update surveyparcels84_Additional Picture3'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Additional Picture3']
    }
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Additional Picture4']){
      property['surveyparcels84.4.41update surveyparcels84_Additional Picture4'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Additional Picture4']
    }
    if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Ward']){
      property['surveyparcels84.4.41update surveyparcels84_Ward'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Ward']
    }

  
    
    }
    
    return this.renderPopup((
      <div className="sdk-popup-content">
        <br />
        <div>
          Feature Info:<br />
          <p>{`Address: ${property['surveyparcels84.4.41update surveyparcels84_Address']}`}</p>
          <p>{`Whats There?: ${property['surveyparcels84.4.41update surveyparcels84_Any Structures Here?']}`}</p>
          <p>{`Building Condition: ${property['surveyparcels84.4.41update surveyparcels84_Condition of the Building']}`}</p>
          <p>{`Building Type: ${property['surveyparcels84.4.41update surveyparcels84_Building Type']}`}</p>
          <p>{property['surveyparcels84.4.41update surveyparcels84_Business name (if applicable)']}</p>
          <p>{`Exterior Walls: ${property['surveyparcels84.4.41update surveyparcels84_Number of exterior walls present']}`}</p>
          <p>{`Doorways Unsecure: ${property['surveyparcels84.4.41update surveyparcels84_Number of visible doorways unsecure']}`}</p>
          <p>{`Window Bays Unsecure: ${property['surveyparcels84.4.41update surveyparcels84_Number of visible window bays unsecure']}`}</p>
          <p>{`Secondary Structure: ${property['surveyparcels84.4.41update surveyparcels84_Secondary Structure']}`}</p>
          <p>{`Yard Maintained: ${property['surveyparcels84.4.41update surveyparcels84_Yard Maintained']}`}</p>
          <p>{ `Notes: ${property['surveyparcels84.4.41update surveyparcels84_Notes']}`}</p>
          <p>{ `Picture 1: ${property['surveyparcels84.4.41update surveyparcels84_Picture of the property']}`}</p> 
          <p>{ `Picture 2: ${property['surveyparcels84.4.41update surveyparcels84_Additional Picture2']}`}</p>
          <p>{ `Picture 3: ${property['surveyparcels84.4.41update surveyparcels84_Additional Picture3']}`}</p>
          <p>{ `Picture 4: ${property['surveyparcels84.4.41update surveyparcels84_Additional Picture4']}`}</p>
          <p>{ `Ward: ${property['surveyparcels84.4.41update surveyparcels84_Ward']}`}</p>
          <p>{ 'fill feature here' }</p>
          <p>{ 'fill feature here' }</p>
          <p>{ 'fill feature here' }</p>
          <p>{ 'fill feature here' }</p>
          <br />
          <button className="sdk-btn" ref={(c) => {
            if (c) {
                c.addEventListener('click', this.close);
            }
          }}>
            Close
          </button>
        </div>
      </div>
    ));
  }
}


export default MarkFeatures;