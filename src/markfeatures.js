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
      //if (this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Address']){
     //   property['surveyparcels84.4.41update surveyparcels84_Address'] = this.props.features[i].properties['surveyparcels84.4.41update surveyparcels84_Address']
     // }   
        // console.log(features[i].properties['pointsparcels_What address are you at?'])
        // console.log(features[i].properties['pointsparcels_Any Structures Here?'])
        // console.log(features[i].properties['pointsparcels_What is the condition of the Building?'])
        // console.log(features[i].properties['pointsparcels_Building'])
        // console.log(features[i].properties['pointsparcels_Business name (if applicable)'])
        // console.log(features[i].properties['pointsparcels_Does a roof exist?'])
        // console.log(features[i].properties['pointsparcels_Number of exterior walls present'])
        // console.log(features[i].properties['pointsparcels_Number of visible doorways unsecure'])
        // console.log(features[i].properties['pointsparcels_Number of visible window bays unsecure'])
        // console.log(features[i].properties['pointsparcels_Secondary Structure(s)?'])
        // console.log(features[i].properties['pointsparcels_Yard Maintained'])
        // console.log(features[i].properties['pointsparcels_Notes'])
        // console.log(features[i].properties['pointsparcels_Picture of the property'])
        // console.log(features[i].properties['pointsparcels_Additional Picture'])
        // console.log(features[i].properties['pointsparcels_Additional Picture_1'])
        // console.log(features[i].properties['pointsparcels_Additional Picture_2'])
        // console.log(features[i].properties['pointsparcels_Additional Picture_3'])
        // console.log(features[i].properties['pointsparcels_Additional Picture_4'])
        // console.log(features[i].properties['pointsparcels_Ward'])
        // console.log(features[i].properties['pointsparcels_Current Owner'])
        // console.log(features[i].properties['pointsparcels_Year Built'])
        // console.log(features[i].properties['pointsparcels_Building Type_1'])
        // console.log(features[i].properties['pointsparcels_Year Built'])
        //possible loop console.log(features[i].properties['pointsparcels_:'])continue untill the apostophie
    }
    //console.log(property)
    //const feature_ids = this.props.features.map(f => f.properties.id);

    return this.renderPopup((
      <div className="sdk-popup-content">
        <br />
        <div>
          Feature Info:<br />
          <p>{ property['surveyparcels84.4.41update surveyparcels84_Address'] }</p>
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