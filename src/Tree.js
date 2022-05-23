import React from 'react';
import Tree from 'react-d3-tree';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: 'Pedro, Pedro Regalado,  Cordero, [Cordero], Cordero Pinto, ',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, mulata, ',
  origin: 'alta California, Santa Clara, Mision de, Santa Clara, [Unstated], ',
  location: 'None',
  },
  children: [
  {
  name: 'Maria Quirina, Quirina,  Cordero',
  attributes: {
  gender: 'f',
  race: '[Razon], [Unstated], Razon, español, mulata, ',
  origin: '[Unstated], [Santa Barbara], inmediato Presidio, [Santa Barbara], Presidio inmediato, ',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Pedro Regalado Cordero',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Jose Antonio Cordero',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Rafaela, Rafaela,  Cordero',
  attributes: {
  gender: 'f',
  race: '[Razon], [Unstated], Razon, español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Carlos Antonio Felipe de la Cruz, Carlos,  Cordero',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Jose Guadalupe, Guadalupe,  Cordero',
  attributes: {
  gender: 'm',
  race: '[Razon], [Unstated], Razon, español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Antonia Cordero',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Jose Jesus, Jose de Jesus,  Cordero',
  attributes: {
  gender: 'm',
  race: '[Unstated], Razon, [Razon], español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Francisco, Jose Francisco de Jesus,  Cordero',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, mulata, ',
  origin: '[Santa Barbara], Presidio inmediato, [Santa Barbara], Presidio immediato, [Santa Barbara], inmediato Presidio, [Unstated], ',
  location: 'None',
  },
  children: [
  {
  name: 'Maria Magdalena, Magdalena,  Cordero',
  attributes: {
  gender: 'f',
  race: '[Unstated], [Razon], Razon, español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Francisco del Refugio Cordero',
  attributes: {
  gender: 'm',
  race: '[Unstated], Razon, [Razon], español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Jose Francisco de Jesus, Francisco,  Cordero',
  attributes: {
  gender: 'm',
  race: '[Unstated], [Razon], Razon, español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Magdalena de Jesus Cordero',
  attributes: {
  gender: 'f',
  race: '[Unstated], Razon, [Razon], español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Francisco de Jesus Cordero',
  attributes: {
  gender: 'm',
  race: '[Unstated], Razon, [Razon], español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Tomas del Refugio Cordero',
  attributes: {
  gender: 'm',
  race: '[Unstated], Razon, [Razon], español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Tomasa del Refugio Cordero',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },]
  },{
  name: 'Jose Guadalupe, Guadalupe,  Cordero',
  attributes: {
  gender: 'm',
  race: '[Razon], [Unstated], Razon, español, mulata, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },]
  }

export default function OrgChartTree() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" class="border-8 border-sky-500 flex flex-col h-screen">
      <Tree data={orgChart} pathFunc="step" orientation="vertical" nodeSize={ {x:400, y:200} }/>
    </div>
  );
}