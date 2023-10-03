// return all drivers that match passed name
function findMatching(drivers, name) {
    const lowercaseName = name.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowercaseName);
  }
//   returns driver if beginning provided letters match
  function fuzzyMatch(drivers, name) {
    const lowercaseName = name.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowercaseName));
  }
//   accesses data structure to check if name matches
  function matchName(drivers,name){
    return drivers.filter(driver=>driver.name===name);
  }