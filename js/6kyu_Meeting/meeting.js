const list = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

  const uppercase = (list) => {
    return list.toUpperCase();
  }

  const splitString = (list) => {
    return list.split(";")
  }

  const intoArrays = (list) => {
    return list.map(string => {
      return string.split(":") 
    });
  }

  const intoObjects = (list) => {
    return list.map(element => {
      return {... element}
    });
  }

module.exports = { uppercase, splitString, intoArrays, intoObjects }