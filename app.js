angular
  .module('weatherApp', [])
  .controller('ThingsIndexController', ThingsIndexController);

  function ThingsIndexController(){
    this.name = "Sample Name";
  }
