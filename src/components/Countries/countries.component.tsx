import './countries.css';
import AfricaMap from 'react-africa-map';
import { Chart } from 'react-google-charts';
import { BarChart } from '../barchart/barchart.component';
import { useState } from 'react';

// read the documentation
// https://www.npmjs.com/package/react-africa-map 

export const data = [
    ["Language", "Speakers (in millions)"],
    ["Assamese", 13],
    ["Bengali", 83],
    ["Bodo", 1.4],
    ["Dogri", 2.3],
    ["Gujarati", 46],
    ["Hindi", 300],
    ["Kannada", 38],
    ["Kashmiri", 5.5],
    ["Konkani", 5],
    ["Maithili", 20],
    ["Malayalam", 33],
    ["Manipuri", 1.5],
    ["Marathi", 72],
    ["Nepali", 2.9],
    ["Oriya", 33],
    ["Punjabi", 29],
    ["Sanskrit", 0.01],
    ["Santhali", 6.5],
    ["Sindhi", 2.5],
    ["Tamil", 61],
    ["Telugu", 74],
    ["Urdu", 52],
];

export const options = {
    title: "Indian Language Use",
    legend: "none",
    pieSliceText: "label",
    slices: {
        4: { offset: 0.2 },
        12: { offset: 0.3 },
        14: { offset: 0.4 },
        15: { offset: 0.5 },
    },
    pieHole: 0.5,
};


export const Countries = () => {
    return (
        <div className="countries-wrapper">
            <div className="title">
                Distribution by Country
            </div>

            <div className="countries-graphs-wrapper">
                <AfricaMap selectColor="green"
                    selected={['MA', 'AO']}
                    selection={true}
                    animeTime={1000}
                />

                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
                <div className="col-span-1 md:col-span-2">
                    <BarChart />
                </div>
            </div>
        </div>
    );
}