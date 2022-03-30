// Created by: Jaejun Lee
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of Traoezoid.
 */
function calculate () {
  // input
  const aBase= parseInt(document.getElementById('a-base').value)
  const bBase = parseInt(document.getElementById('b-base').value)
  const height = parseInt(document.getElementById('height').value)

  // process
  const area = ((aBase+bBase) / 2) * height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
