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

  const sortList = (list) => {
    return list.sort((a, b) => {
      if (a[1] < b[1]) return -1
      if (a[1] > b[1]) return 1
      if (a[0] < b[0]) return -1
      if (a[0] > b[0]) return 1
      return 0
    })
  }

module.exports = { uppercase, splitString, intoArrays, intoObjects, sortList }
