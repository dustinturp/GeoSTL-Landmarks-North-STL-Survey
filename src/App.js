import React, { Component } from 'react';
//import React from 'react';
import ReactDOM from 'react-dom';
import logo from './geostl2.png';
import logo2 from './landmarks_logo.gif';
import './App.css';
import { createStore,combineReducers, applyMiddleware} from 'redux';
// Watch this when using production
//import {DragSource, DropTarget} from 'react-dnd';
//import {types, layerListItemSource, layerListItemTarget, collect, collectDrop} from '@boundlessgeo/sdk/components/layer-list-item';
import blockData from './Blocksnorthstl.geojson';
import blockData1 from './surveyparcels84.geojson';
import SdkMap from '@boundlessgeo/sdk/components/map';
import SdkMapReducer from '@boundlessgeo/sdk/reducers/map';

//test other controls not connected to anything not working 
import SdkZoomControl from '@boundlessgeo/sdk/components/map/zoom-control';
import SdkZoomSlider from '@boundlessgeo/sdk/components/map/zoom-slider';
import SdkMousePosition from '@boundlessgeo/sdk/components/map/mouseposition';

import SdkPopup from '@boundlessgeo/sdk/components/map/popup';
//i mport popups from './popup.js';

//import SdkLayerList from '@boundlessgeo/sdk/components/layer-list';
//import SdkLayerListItem from '@boundlessgeo/sdk/components/layer-list-item';

import * as SdkMapActions from '@boundlessgeo/sdk/actions/map';



import {Provider} from 'react-redux';

const store = createStore(combineReducers({
  'map': SdkMapReducer,
}));



class App extends Component {
  componentDidMount() {
  
  
    
    store.dispatch(SdkMapActions.setView([-90.21, 38.645], 13.9));
     // Restrict the zoom levels

    store.dispatch(SdkMapActions.updateMetadata({
    'bnd:minzoom': 10,
    'bnd:maxzoom': 20,
    }));
    

//restrict zoom not working
    store.dispatch(SdkMapActions.updateMetadata({
      'bnd:minzoom': 10,
      'bnd:maxzoom': 20,
    }));

// add an OSM layer
    store.dispatch(SdkMapActions.addSource('osm', {
      type: 'raster',
      tileSize: 256,
      tiles: [
        'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      ],
    }));
  
    // add an OSM layer
    store.dispatch(SdkMapActions.addLayer({
      id: 'osm',
      source: 'osm',
    }));

    store.dispatch(SdkMapActions.addSource('blocks', {
      type: 'geojson',
      data: blockData
    }));

    store.dispatch(SdkMapActions.addLayer({
      id: 'block',
     source: 'blocks',
      type: 'fill',
      paint: {
        'fill-opacity': 0.3,
        'fill-color': '#feb24c',
        'fill-outline-color': '#f03b20',
      },
    }));
    //add local geojson layer
    store.dispatch(SdkMapActions.addSource('parcel', {
      type: 'geojson',
      data: blockData1
    }));
    
    store.dispatch(SdkMapActions.addLayer({
      id: 'parcels',
      source: 'parcel',
      type: 'fill',
      paint: {
        'fill-opacity': 1,
        'fill-color': '#ffffff',
        'fill-outline-color': '#f03b20',
      },
    }));
    

    
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <img src={logo2} className="App-logo" alt="logo" />
          <h1 className="App-title">GeoSTL and the Landmarks association Survey Results</h1>
        </header>
        <p className="App-intro">
        The Survey was done on Saturday, February 3rd in North St Louis. A total of 154 properties were inventoried. Majority of the properties are uninhabitable. 
        </p>
        <SdkMap store={store} 
          includeFeaturesOnClick 
          onClick={(map, xy, featuresPromise) => {
            featuresPromise.then((featureGroups) => {
              console.log(featureGroups)
              // setup an array for all the features returned in the promise.
              let features = [];

              // featureGroups is an array of objects. The key of each object
              // is a layer from the map.
              for (let g = 0, gg = featureGroups.length; g < gg; g++) {
                // collect every feature from each layer.
                const layers = Object.keys(featureGroups[g]);
                for (let l = 0, ll = layers.length; l < ll; l++) {
                  const layer = layers[l];
                  features = features.concat(featureGroups[g][layer]);
                }
              }

              if (features.length === 0) {
                // no features, :( Let the user know nothing was there.
                // map.addPopup(<SdkPopup coordinate={xy} closeable><i>No features found.</i></SdkPopup>);
                console.log("zero");
              } else {
                // Show the super advanced fun popup!
                // map.addPopup(<MarkFeaturesPopup coordinate={xy} features={features} closeable />);
                console.log("multi");
              }
            }).catch((exception) => {
              console.error('An error occurred.', exception);
            });
        }}/>
      </div>
    );
  }
}

export default App;
