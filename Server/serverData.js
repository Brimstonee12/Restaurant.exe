const express = require('express');


const customers = [
  { id:1, table1: "Table1", sits: 'Sits available:4', available:'Available'},
  { id:2, table1: 'Table2', sits: 'Sits available:3', available:'Available'},
  { id:3, table1: 'Table3', sits: 'Sits available:2', available:'Available'},
  { id:4, table1: 'Table4', sits: 'Sits available:2', available:'Available'},
  { id:5, table1: 'Table5', sits: 'Sits available:4', available:'Available'},
  { id:6, table1: 'Table6', sits: 'Sits available:6', available:'Available'},
  { id:7, table1: 'Table7', sits: 'Sits available:2', available:'Available'},
  { id:8, table1: 'Table8', sits: 'Sits available:3', available:'Available'},
  { id:9, table1: 'Table9', sits: 'Sits available:2', available:'Available'}
];

const ReservedTables = [
{id:1, Tables:[''], Email:'', Comment:''}

];




module.exports = {customers,ReservedTables }
