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
import blockData1 from './habitable_occupied.84.geojson';
import blockData2 from './habitable_non_occupied.geojson';
import blockData3 from './Uninhabitable.84.geojson';
import blockData4 from './vacantlot.84.geojson';
import SdkMap from '@boundlessgeo/sdk/components/map';
import SdkMapReducer from '@boundlessgeo/sdk/reducers/map';

//test other controls not connected to anything not working
import SdkZoomControl from '@boundlessgeo/sdk/components/map/zoom-control';
import SdkZoomSlider from '@boundlessgeo/sdk/components/map/zoom-slider';
import SdkMousePosition from '@boundlessgeo/sdk/components/map/mouseposition';

import SdkPopup from '@boundlessgeo/sdk/components/map/popup';
import MarkFeatures from './markfeatures';
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


// add an OSM layer
    store.dispatch(SdkMapActions.addSource('osm', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',
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
        'fill-color': '#54C571',
        'fill-outline-color': '#54C571',
      },
     }));

     //add local geojson layer
     store.dispatch(SdkMapActions.addSource('parcel1', {
      type: 'geojson',
      data: blockData2
    }));

    store.dispatch(SdkMapActions.addLayer({
      id: 'parcel',
      source: 'parcel1',
      type: 'fill',
      paint: {
        'fill-opacity': 1,
        'fill-color': '#FFDB58',
        'fill-outline-color': '#FFDB58',
     },
    }));
     //add local geojson layer
     store.dispatch(SdkMapActions.addSource('parcel2', {
      type: 'geojson',
      data: blockData3
    }));

    store.dispatch(SdkMapActions.addLayer({
      id: 'parcels2',
      source: 'parcel2',
      type: 'fill',
      paint: {
        'fill-opacity': 1,
        'fill-color': '#FF0000',
        'fill-outline-color': '#FF0000',
      },
    }));
     //add local geojson layer
     store.dispatch(SdkMapActions.addSource('parcel3', {
      type: 'geojson',
      data: blockData4
    }));

    store.dispatch(SdkMapActions.addLayer({
      id: 'parcels3',
      source: 'parcel3',
      type: 'fill',
      paint: {
        'fill-opacity': 1,
        'fill-color': '#A52A2A',
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
          stopEvent
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

              if (features.length  > 0) {
                console.log(features);
                // no features, :( Let the user know nothing was there.
                map.addPopup(<MarkFeatures features={features} coordinate={xy} closeable/>, true, true);
                //console.log("multi");
              
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
