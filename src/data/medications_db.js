import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
var csvPath = './Meds.csv';
export class Medications extends React.Component {
  state = { data: {} };
  componentDidMount() {
    fetch(csvPath)
      .then(console.log(csvPath))
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
        console.log(data);
      });
  }
  render() {
    console.log('ffff222');
    return <div>{console.log(this.state.data)}</div>;
  }
}
//default this.state.data

export class Clock extends React.Component {
  constructor(props) {
    console.log('ffff1');
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return console.log('ffff');
  }
}
{
  /*}
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
*/
}
