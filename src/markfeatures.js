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
      let features = this.props.features
    for (let i = 0 ; i < this.props.features.length; i ++){
        console.log(features[i].properties['pointsparcels_What address are you at?'])
    }
    //const feature_ids = this.props.features.map(f => f.properties.id);

    return this.renderPopup((
      <div className="sdk-popup-content">
        <br />
        <div>
          Feature Info:<br />
          <p>{ 'TODO' }</p>
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