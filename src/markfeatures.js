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

    if (this.props.features[i].properties['McKee Survey Results - All_data_Address']){
      property['McKee Survey Results - All_data_Address'] = this.props.features[i].properties['McKee Survey Results - All_data_Address']
    }
      //copy and paste  the if statements  for each field 
    if (this.props.features[i].properties['McKee Survey Results - All_data_Any Structures Here?']){
      property['McKee Survey Results - All_data_Any Structures Here?'] = this.props.features[i].properties['McKee Survey Results - All_data_Any Structures Here?']
    } 
    if (this.props.features[i].properties['McKee Survey Results - All_data_Condition']){
      property['McKee Survey Results - All_data_Condition'] = this.props.features[i].properties['McKee Survey Results - All_data_Condition']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Type']){
      property['McKee Survey Results - All_data_Type'] = this.props.features[i].properties['McKee Survey Results - All_data_Type']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Business name (if applicable)']){
      property['McKee Survey Results - All_data_Business name (if applicable)'] = this.props.features[i].properties['McKee Survey Results - All_data_Business name (if applicable)']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Does a roof exist?']){
      property['McKee Survey Results - All_data_Does a roof exist?'] = this.props.features[i].properties['McKee Survey Results - All_data_Does a roof exist?']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Number of exterior walls present']){
      property['McKee Survey Results - All_data_Number of exterior walls present'] = this.props.features[i].properties['McKee Survey Results - All_data_Number of exterior walls present']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Visible doorways unsecure']){
      property['McKee Survey Results - All_data_Visible doorways unsecure'] = this.props.features[i].properties['McKee Survey Results - All_data_Visible doorways unsecure']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Visible window bays unsecure']){
      property['McKee Survey Results - All_data_Visible window bays unsecure'] = this.props.features[i].properties['McKee Survey Results - All_data_Visible window bays unsecure']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Secondary Structure']){
      property['McKee Survey Results - All_data_Secondary Structure'] = this.props.features[i].properties['McKee Survey Results - All_data_Secondary Structure']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Yard Maintained']){
      property['McKee Survey Results - All_data_Yard Maintained'] = this.props.features[i].properties['McKee Survey Results - All_data_Yard Maintained']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Notes']){
      property['McKee Survey Results - All_data_Notes'] = this.props.features[i].properties['McKee Survey Results - All_data_Notes']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Picture of the property']){
      property['McKee Survey Results - All_data_Picture of the property'] = this.props.features[i].properties['McKee Survey Results - All_data_Picture of the property']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Additional Picture2']){
      property['McKee Survey Results - All_data_Additional Picture2'] = this.props.features[i].properties['McKee Survey Results - All_data_Additional Picture2']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Additional Picture3']){
      property['McKee Survey Results - All_data_Additional Picture3'] = this.props.features[i].properties['McKee Survey Results - All_data_Additional Picture3']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Additional Picture4']){
      property['McKee Survey Results - All_data_Additional Picture4'] = this.props.features[i].properties['McKee Survey Results - All_data_Additional Picture4']
    }
    if (this.props.features[i].properties['McKee Survey Results - All_data_Ward']){
      property['McKee Survey Results - All_data_Ward'] = this.props.features[i].properties['McKee Survey Results - All_data_Ward']
    }



    }
 
    property.importantUrl = 'https://i.imgur.com/sK7eeZu.gifv'

    return this.renderPopup((
      <div className="sdk-popup-content">
        <br />
        <div>
          Feature Info:<br />
          <p>{`Address: ${property['McKee Survey Results - All_data_Address']}`}</p>
          <p>{`Whats There?: ${property['McKee Survey Results - All_data_Any Structures Here?']}`}</p>
          <p>{`Building Condition: ${property['McKee Survey Results - All_data_Condition']}`}</p>
          <p>{`Building Type: ${property['McKee Survey Results - All_data_Type']}`}</p>
          <p>{property['McKee Survey Results - All_data_Business name (if applicable)']}</p>
          <p>{`Roof Status: ${property['McKee Survey Results - All_data_Does a roof exist?']}`}</p>
          <p>{`Exterior Walls: ${property['McKee Survey Results - All_data_Number of exterior walls present']}`}</p>
          <p>{`Doorways Unsecure: ${property['McKee Survey Results - All_data_Visible doorways unsecure']}`}</p>
          <p>{`Window Bays Unsecure: ${property['"McKee Survey Results - All_data_Visible window bays unsecure']}`}</p>
          <p>{`Secondary Structure: ${property['McKee Survey Results - All_data_Secondary Structure']}`}</p>
          <p>{`Yard Maintained: ${property['McKee Survey Results - All_data_Yard Maintained']}`}</p>
          <p>{ `Notes: ${property['McKee Survey Results - All_data_Notes']}`}</p>
          <p>{ `Ward: ${property['McKee Survey Results - All_data_Ward']}`}</p>
          {/* I actually don't remember why we put everything in string substitution, so here's an example w/o it
              if it's just a  matter of adding the space between the description on the value, you can change this
              with css too.*/}
          <p> Picture 1: <a href={property['McKee Survey Results - All_data_Picture of the property']} target='_blank'>Picture</a></p>
          <p> Picture 2: <a href={property['McKee Survey Results - All_data_Additional Picture2']} target='_blank'>Picture</a></p>
          <p> Picture 3: <a href={property['McKee Survey Results - All_data_Additional Picture3']} target='_blank'>Picture</a></p>
          <p> Picture 4: <a href={property['McKee Survey Results - All_data_Additional Picture4']} target='_blank'>Picture</a></p>
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
