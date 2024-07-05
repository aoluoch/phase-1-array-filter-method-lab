// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' 
    },
    {
      name: 'Sammy',
      hometown: 'New York' 
    } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' 
    },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' 
    }
  ];

  function findMatching(drivers, name){
    return drivers.filter (driver => driver.toLowerCase() === name.toLowerCase())
  }

  function fuzzyMatch(drivers, query) {
    return drivers.filter(function(driver) {
      return driver.toLowerCase().startsWith(query.toLowerCase());
    });
  }

  function matchName(drivers, nameToMatch) {
    return drivers.filter(function(driver) {
      return driver.name.toLowerCase() === nameToMatch.toLowerCase();
    });
  }