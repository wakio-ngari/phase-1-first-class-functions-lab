let array=['Antonia','Nuru','Amari','Mo'];

const returnFirstTwoDrivers=function(array){
     console.log(array);
     return array.slice(0, 2);

   }
   console.log(array);
  console.log(array.slice(0,2));


const returnLastTwoDrivers = function(array){
    return array.slice(-2);
}
console.log(array.slice(-2));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 
const createFareMultiplier= function(multiplier){
    return function(fare){
        return fare*multiplier;
    }
}

const fareDoubler=createFareMultiplier(2);


const fareTripler =createFareMultiplier(3);

const selectDifferentDrivers = function(array,driverFunction){
    return driverFunction(array);
}
