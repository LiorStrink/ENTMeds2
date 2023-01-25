import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

export class medications extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch('/meds.csv')
      .then((res) => res.text())
      .then((text) => {
        const data = Papa.parse(text, {
          header: true,
          dynamicTyping: true,
        }).data;
        const result = data.reduce((acc, row) => {
          acc[row.medicationName] = {
            dosage: row.dosage,
            description: row.description,
          };
          return acc;
        }, {});
        this.setState({ data: result });
      });
  }
  render() {
    return <div>{console.log(this.state.data)}</div>;
  }
}
 //default this.state.data