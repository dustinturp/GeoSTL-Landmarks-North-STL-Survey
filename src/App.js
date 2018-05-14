import React, { Component } from 'react';
import {Provider} from 'react-redux';
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
import MarkFeatures from './markfeatures';
import FilterComponent from './filter';


//import SdkLayerList from '@boundlessgeo/sdk/components/layer-list';
//import SdkLayerListItem from '@boundlessgeo/sdk/components/layer-list-item';

import * as SdkMapActions from '@boundlessgeo/sdk/actions/map';


const store = createStore(combineReducers({
  'map': SdkMapReducer,
}));


class App extends Component {
  componentDidMount() {



    store.dispatch(SdkMapActions.setView([-90.21, 38.649], 13.9));
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
        'fill-opacity': 0.4,
        'fill-color': '#348781',
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
        'fill-color': '#000080',
        'fill-outline-color': '#3B9C9C',
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
        'fill-opacity': .9,
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
        'fill-outline-color': '#E18B6B',
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
        'fill-color': '#6F4E37',
      },
    }));

  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo2} className="App-logo" alt="logo" />
          <h1 className="App-title"> <a target="_blank" href="https://www.meetup.com/GeoSTL/"> <font color="white">GeoSTL</font></a> and the <a target="_blank" href="https://www.landmarks-stl.org/"> <font color="white">Landmarks Association</font></a> Survey Results</h1>
        </header>
        <p className="App-intro">
        The purpose of the survey was to check in on the status of properties that are owned by Northside Regeneration. The properties were initially slated to be rehabilitation. The Survey happened on Saturday, February 3rd in North St Louis and a total of 154 properties were inventoried. Majority of the parcels were found to be uninhabitable, unmaintained, and un-secure from the elements.
        </p>
        <p className="App-legend">
        Click on the parcels to view information. <br>
        </br>
        Habitable Occupied Buildings are: <font color="blue">Blue</font> <br>
        </br>
        Habitable Non Occupied Buildings are: <font color="yellow">Yellow</font> <br>
        </br>
        Uninhabitabl Buildings are: <font color="red">Red</font><br>
        </br>
        Vacant Lots are: <font color="brown">Brown</font>
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

              if (features.length  > 1) {
                console.log(features);
                // no features, :( Let the user know nothing was there.
                map.addPopup(<MarkFeatures features={features} coordinate={xy} closeable/>, true, true);
                //console.log("multi");
              
              }
            }).catch((exception) => {
              console.error('An error occurred.', exception);
            });
        }}/>
        <p className="App-spreadsheet">
        <iframe width="100%" height="300px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRyF2cnpB2TBTxkbs5jyDm0iuqyO2JUNI4RbcEkM0HVKxgZjyfCD0sa4i2NTNCNfZ5pHYiLxjpapAVo/pubhtml?widget=true&amp;headers=false"></iframe>
        </p>
        <p className="App-slides">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTGCj1H0APvcoJJpK-AWfNiHrZVhJY-wDHE66klTMUEFtBhnmgqhAYkNaFbUXc0bCk8SLDru9kudwZM/embed?start=true&loop=true&delayms=5000" frameborder="0" width="569" height="345" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </p>
        <p className="App-outro">
        <li> Click  <a target="_blank" href="https://docs.google.com/spreadsheets/d/14WnxYCA1MKz50Yy4zqYJSojGhghQHuGHghVZqY6-tdY/edit?usp=sharing">here</a> to view the spreadsheet in a new tab and download the file.
        </li>
        <li> The File contains addresses, coordinates, parcel handles, parcel ID, and Wards to link to other GIS datasets.
          </li>
        <li>Visit the <a target="_blank" href="https://photos.app.goo.gl/RZpAIOlnIHodQ7Gv2">Google Photo Album</a> to view all of the pictures from the survey.</li>
        <li> You can download the entire photo album from the album page. </li>
        <li> The Project is available on <a target="_blank" href="https://github.com/dustinturp/GeoSTL-Landmarks-North-STL-Survey">GitHub</a>.</li> 
        </p>
        <p className="App-footer">
        Thank you to our volunteers for this crowdsourced effort. Special thanks to <a target="_blank" href="https://github.com/CarlyLanglois">Carly</a>  and <a target="_blank" href="https://github.com/wnordmann">Willie</a>  at <a target="_blank" href="http://boundlessgeo.com/">Boundless</a> for helping with constructing this web map.<br>
        </br>
        This application was made using <a target="_blank" href="http://sdk.boundlessgeo.com/">Boundless SDK</a> <br>
        </br>
        Questions or comments can be emailed to me@dustin-turpin.me, or you can contact the <a target="_blank" href="https://www.landmarks-stl.org/contact/">Landmarks Association </a> 
        </p>
      </div>
    );
  }
}

export default App;
