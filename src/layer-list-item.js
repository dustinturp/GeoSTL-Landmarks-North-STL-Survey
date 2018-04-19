import {createStore, combineReducers} from 'redux';

//import React from 'react';
//import ReactDOM from 'react-dom';
//import {DragSource, DropTarget} from 'react-dnd';
//import {types, layerListItemSource, layerListItemTarget, collect, collectDrop} from '@boundlessgeo/sdk/components/layer-list-item';
//import SdkMap from '@boundlessgeo/sdk/components/map';
//import SdkZoomControl from '@boundlessgeo/sdk/components/map/zoom-control';
//mport SdkMapReducer from '@boundlessgeo/sdk/reducers/map';
//import * as mapActions from '@boundlessgeo/sdk/actions/map';

//import SdkLayerList from '@boundlessgeo/sdk/components/layer-list';
//import SdkLayerListItem from '@boundlessgeo/sdk/components/layer-list-item';

//import {Provider} from 'react-redux';

/* eslint-disable no-underscore-dangle */
const store = createStore(combineReducers({
  map: SdkMapReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class LayerListItem extends SdkLayerListItem {
  render() {
    const layer = this.props.layer;
    const checkbox = this.getVisibilityControl(layer);

    const moveButtons = (
      <span>
        <button className="sdk-btn" onClick={() => {
          this.moveLayerUp();
        }}>
          { this.props.labels.up }
        </button>
        <button className="sdk-btn" onClick={() => {
          this.moveLayerDown();
        }}>
          { this.props.labels.down }
        </button>
        <button className="sdk-btn" onClick={() => {
          this.removeLayer();
        }}>
          { this.props.labels.remove }
        </button>
      </span>
    );

    return  this.props.connectDragSource(this.props.connectDropTarget((
      <li className="layer">
        <span className="checkbox">{checkbox}</span>
        <span className="name">{layer.id}</span>
        <span className="btn-container">{moveButtons}</span>
      </li>
    )));
  }
}

LayerListItem.defaultProps = {
  labels: {
    up: 'Move up',
    down: 'Move down',
    remove: 'Remove layer',
  },
};

LayerListItem = DropTarget(types, layerListItemTarget, collectDrop)(DragSource(types, layerListItemSource, collect)(LayerListItem));

function main() {
  // Start with a reasonable global view of the map.
  store.dispatch(mapActions.setView([-90, 38], 6));

  store.dispatch(mapActions.updateMetadata({
    'mapbox:groups': {
      base: {
        name: 'Base Maps',
      },
    },
  }));

  // Background layers change the background color of
  // the map. They are not attached to a source.
  store.dispatch(mapActions.addLayer({
    id: 'background',
    type: 'background',
    paint: {
      'background-color': '#eee',
    },
    metadata: {
      'bnd:hide-layerlist': true,
    },
  }));

  // add the OSM source
  store.dispatch(mapActions.addOsmSource('osm'));

  // and an OSM layer.
  // Raster layers need not have any paint styles.
  store.dispatch(mapActions.addLayer({
    id: 'osm',
    source: 'osm',
    type: 'raster',
    metadata: {
      'mapbox:group': 'base'
    }
  }));



  // 'geojson' sources allow rendering a vector layer
  // with all the features stored as GeoJSON. "data" can
  // be an individual Feature or a FeatureCollection.
  store.dispatch(mapActions.addSource('dynamic-source', {type: 'geojson'}));

  store.dispatch(mapActions.addLayer({
    id: 'dynamic-layer',
    type: 'circle',
    source: 'dynamic-source',
    paint: {
      'circle-radius': 5,
      'circle-color': '#552211',
      'circle-stroke-color': '#00ff11',
    },
  }));

  
 
  // place the map on the page.
  ReactDOM.render(<Provider store={store}>
    <SdkMap>
      <SdkZoomControl />
    </SdkMap>
  </Provider>, document.getElementById('map'));

  // add some buttons to demo some actions.
  ReactDOM.render((
    <div>
      <h3>Try it out</h3>
      <div className="sdk-layerlist">
        <Provider store={store}>
          <SdkLayerList layerClass={LayerListItem} />
        </Provider>
      </div>
    </div>
  ), document.getElementById('controls'));
}

main();