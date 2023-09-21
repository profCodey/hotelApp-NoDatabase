let amount = 0
// if (amount === isNaN || amount <= 0 || amount === null) {
    if (typeof amount !== 'number' || amount <= 0 || amount === null) {
      console.log("will return");
    } else console.log("working well");
 