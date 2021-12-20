const list = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

  const uppercase = (list) => {
    return list.toUpperCase();
  }

  const splitString = (list) => {
    return list.split(";")
  }


module.exports = { uppercase, splitString }