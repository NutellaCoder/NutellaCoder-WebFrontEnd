import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  Crosshair,
} from 'react-vis';

const DATA = [
  [
    { x: 1, y: 10 },
    { x: 2, y: 7 },
    { x: 3, y: 15 },
  ],
  [
    { x: 1, y: 20 },
    { x: 2, y: 5 },
    { x: 3, y: 15 },
  ],
];

export default class DynamicCrosshair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: [],
    };
  }

  /**
   * Event handler for onMouseLeave.
   * @private
   */
  _onMouseLeave = () => {
    this.setState({ crosshairValues: [] });
  };

  /**
   * Event handler for onNearestX.
   * @param {Object} value Selected value.
   * @param {index} index Index of the value in the data array.
   * @private
   */
  _onNearestX = (value, { index }) => {
    this.setState({ crosshairValues: DATA.map((d) => d[index]) });
  };

  render() {
    return (
      <XYPlot onMouseLeave={this._onMouseLeave} width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries onNearestX={this._onNearestX} data={DATA[0]} />
        <LineSeries onNearestX={this._onNearestX} data={DATA[1]} />
        <Crosshair
          values={this.state.crosshairValues}
          className={'test-class-name'}
          // titleFormat={this.titleFormat.bind(this)}
        >
          {/* <div style={{ background: 'white' }}>
            <h3>Values of crosshair:</h3>
            <p>Series 1: {DATA[0].x}</p>
            <p>Series 2: {DATA[1].x}</p>
          </div> */}
        </Crosshair>
      </XYPlot>
    );
  }
}
