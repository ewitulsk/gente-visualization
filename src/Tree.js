import React from 'react';
import Tree from 'react-d3-tree';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: 'Bernabela Antonia, Maria Bernabela, Bernabela, Bernavela Antonia, Bernabe,  Buelna, Buelna Tapia, ',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, india, ',
  origin: 'Real, Monterey, Presidio de, mision, nueva California y nacida en esta mision, mision, esta, Presidio, del immediato, Mision, ',
  location: 'None',
  },
  children: [
  {
  name: 'Maria de Gracia, Maria Gracia, [Unstated], Engracia, Maria Engracia, Gracia,  Martinez, Martines, ',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, india, ',
  origin: 'Presidio, Monterrey, mismo, Monterrey, dicho, Monterey, Monterey, Presidio de, Mision, esta, [Monterey], dho Presidio, Monterrey, ',
  location: 'None',
  },
  children: [
  {
  name: 'Maria Antonia Andrea de Gracia, Maria Antonia, Antonia,  Amesquita, Mesquita, ',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated], Monterey, Presidio de, ',
  location: 'None',
  },
  children: [
  {
  name: 'Maria Concepcion Guadalupe Espinosa',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Jose Antonio Espinosa',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: 'Salinas, las',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Luisa Espinosa',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Jose de Jesus Leonardo Espinosa',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Celso Espinosa',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },]
  },{
  name: 'Maria Guadalupe Bernabela, Bernabela, Ysabel [Bernabela], [Bernabela],  Amesquita, Amezquita, ',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  {
  name: 'Jose Francisco Castro',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Jose Francisco Castro',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Ramon de Jesus, [Unstated],  [Castro]',
  attributes: {
  gender: 'm',
  race: '[Razon], [Unstated], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Felix de Jesus [Castro]',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },]
  },{
  name: 'Maria Salomea Trinidad, Salome, Solomea, Maria Salome,  Amezquita, Amesquita, ',
  attributes: {
  gender: 'f',
  race: '[Razon], [unstated], Razon, español, india, ',
  origin: 'Presidio, [unstated], ',
  location: 'None',
  },
  children: [
  {
  name: 'Francisca Alta Grasia Gerarda Alvisu',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], [unstated], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Francisca Ramona Modesta Albiso',
  attributes: {
  gender: 'f',
  race: 'Rason, [Razon], [unstated], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Carlos Francisco [Alviso]',
  attributes: {
  gender: 'm',
  race: '[Razon], [unstated], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Florencio Eulogio Militon [Alviso]',
  attributes: {
  gender: 'm',
  race: '[Razon], [unstated], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Juan Francisco Marcelo [Alviso]',
  attributes: {
  gender: 'm',
  race: '[Razon], [unstated], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },]
  },{
  name: 'Rosa Maria Marciana, Rosa, Maria Rosa,  Amezquita, Mesquita, Amesquita, ',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: 'Presidio, [Unstated], ',
  location: 'None',
  },
  children: [
  {
  name: 'Bernardino Santa Anna Alvesa [Alviso]',
  attributes: {
  gender: 'm',
  race: '[Unstated], Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Juan Francisco Santana Alvisu',
  attributes: {
  gender: 'm',
  race: 'Rason, Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },]
  },{
  name: 'Maria Soledad Eduarda Amesquita',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: 'Buenas, Rancho de',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Juana Bautista Ramona y Romualda, Juana,  Amezquita, Mesquita, ',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Ramon Amesquita',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: 'Presidio',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Jose Ramon Amesquita',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Ramon del Carmen, [Unstated],  Amesquita, [Amesquita], ',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Prudencio Salvador Maria [Amezquita], Amezquita, ',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, india, ',
  origin: 'esta escolta, [Unstated], ',
  location: 'None',
  },
  children: [
  ]
  },]
  },{
  name: 'Vicente Blas Maria, Vizente, Visente Blas, Vicente, Blaz, Vicente Blas, Vicente Belen,  Martinez, Martines, ',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: 'Real Presidio, [Monterey], alli mismo, Presidio, este, San Carlos, San Carlos, Mision de, ',
  location: 'None',
  },
  children: [
  {
  name: 'Maria Josefa Paula, Maria Josefa,  Martinez, Martines, ',
  attributes: {
  gender: 'f',
  race: '[Razon], Rason, Razon, español, india, ',
  origin: 'Presidio, [Unstated], ',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Jose Antonio Martinez',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Leon de Alta Gracia [Martines]',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: 'Presidio',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Cornelio Ramon Martinez',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: 'Salinas, las',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Felipe Santiago Martines',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Trenidad Bernabela [Martines]',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Josefa del Refugio Martinez',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Salome Antonia Martinez',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Valentin Romano Martinez',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Eugenio Maria Martinez',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Mamiliano Martinez',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Teodosia Maria Francisca Martinez',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Antonio Gracia [Martines]',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },]
  },{
  name: 'Ana Maria del Carmen, Ana Maria, Maria Ana,  Martinez, Martines, ',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated], Mision, esta, ',
  location: 'None',
  },
  children: [
  {
  name: 'Matiana Bermudez',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, india, ',
  origin: 'Presido',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Jose de Cruz Isidoro Bermudez',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria del Refugio Bermudes',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Jose Antonio Bermudes',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },]
  },{
  name: 'Bictorino de la Cruz, Victorino, Vitorino,  Martinez, Martines, ',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated], Mision, esta, Mision, ',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Aniceto Ignacio de Gracia, Ygnacio,  Martinez',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated], San Jose de Guadalupe, Pueblo de, Monterey, ',
  location: 'None',
  },
  children: [
  {
  name: 'Maria Manuela Bernabe, Bernabela,  Martinez, Martines, ',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria de los Angeles, Maria de los Angeles Martina,  Martinez, [Martinez], ',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, india, ',
  origin: 'Pueblo, del, [San Jose], Pueblo, ',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Felicitas Encarnacion Martinez',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },]
  },{
  name: 'Ygnacia Josefa Dolores, Maria Ygnacia,  Martinez',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: 'San José, Pueblo de, San Carlos, ',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Bernardina, Bernardina,  Martinez',
  attributes: {
  gender: 'f',
  race: 'Razon, [Unstated], [Razon], español, india, ',
  origin: 'San Jose, Pueblo del Señor, San Josef, Pueblo de, San Josef en esta Alta California, Pueblo de, [Unstated], Santa Clara, Mision de, ',
  location: 'None',
  },
  children: [
  {
  name: 'Maria Guadalupe, [Unstated],  Santa Ana Diaz, Santana, ',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, [Unstated], español, india, ',
  origin: 'Presidio, San Carlos de Monterey, ',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Antonia Pia Bernabela Diaz',
  attributes: {
  gender: 'f',
  race: 'Razon, [Unstated], [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Josef Antonio Pascual, Josef Antonio,  [Diaz], Diaz, ',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, [Unstated], español, india, ',
  origin: 'Presidio, [Unstated], ',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Juana Bautista Antonia Diaz',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, [Unstated], español, india, ',
  origin: 'Presidio',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Luisa del Refugio [Maria Luisa Altagracia del Refugio] Diaz',
  attributes: {
  gender: 'f',
  race: 'Razon, [Unstated], [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Adelayda Dias',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, [Unstated], español, india, ',
  origin: 'Pueblo',
  location: 'None',
  },
  children: [
  ]
  },]
  },{
  name: 'Bictorino de la Cruz, Victorino, Vitorino,  Martinez, Martines, ',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated], Mision, esta, Mision, ',
  location: 'None',
  },
  children: [
  {
  name: 'Juan Bautista Ygino Martinez',
  attributes: {
  gender: 'm',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Paulina de la Presentacion Martinez',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Celedonia, Celedonia,  Martinez',
  attributes: {
  gender: 'f',
  race: 'Razon, [unstated], [Razon], español, india, ',
  origin: '[Unstated], [unstated], ',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Gervasio Julian Josef Martinez',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: 'Presidio',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Felipe de Neri, Felipe Neri,  Martinez',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: 'Presidio, Ranchos, de los, ',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Cecilia Martinez',
  attributes: {
  gender: 'f',
  race: 'Razon, [Razon], español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Josefa Antonia [Martinez]',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria del Pilar Micaela [Martines]',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Bernabela [Martines], Martinez, ',
  attributes: {
  gender: 'f',
  race: '[Razon], [unstated], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Gabriela [Martines]',
  attributes: {
  gender: 'f',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Jose Gabriel Encarnacion [Martines]',
  attributes: {
  gender: 'm',
  race: '[Razon], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },{
  name: 'Maria Fulgencia Bernabela de Jesus, Bernabela,  [Martines]',
  attributes: {
  gender: 'f',
  race: '[Razon], [unstated], Razon, español, india, ',
  origin: '[Unstated]',
  location: 'None',
  },
  children: [
  ]
  },]
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