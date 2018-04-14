const getAuthentication = require('./getAuthentication.js');

const generateAPICall = async (params) => {
  const token = await getAuthentication();
  //given parameters, generate json for Autodesk API call
  return params;
};

const getPhaseWire = panelQty => {
  if (panelQty <= 12) {
    return 12;
  }
  else if (panelQty < 20) { 
    return 10;
  }
  else if (panelQty < 35) {
    return 8;
  }
  else {
    return 6;
  }
};

const getGroundWire = panelQty => {
  if (panelQty < 16) {
    return 12;
  }
  else {
    return 10;
  }
};

const getFuseSize = panelQty => {
  if (panelQty <= 8) {
    return 15;
  }
  else if (panelQty <= 12) {
    return 20;
  }
  else if (panelQty <= 16) {
    return 25;
  }
  else if (panelQty <= 19) {
    return 30;
  }
  else if (panelQty <= 22) {
    return 35;
  }
  else if (panelQty <= 25) {
    return 40;
  }
  else if (panelQty <= 28) {
    return 45;
  }
  else if (panelQty <= 32) {
    return 50;
  }
  else {
    return 60;
  }
};

const getBlockRows = panelQty => {
  if (panelQty <= 10) { 
    return [panelQty]; 
  }
  else if (panelQty < 30) { 
    let rowOne = Math.floor(panelQty / 2);
    return [rowOne, panelQty - rowOne]; 
  }
  else { 
    let rowOne = Math.floor(panelQty / 3);
    let rowTwo = Math.floor((panelQty - rowOne) / 2);
    let rowThree = panelQty - rowOne - rowTwo;
    return [rowOne, rowTwo, rowThree];
  }
};

module.exports = generateAPICall;