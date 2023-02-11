const get = (req, res) => {
  res.send([
   
  {
      "_id": 1,
      "name": "Galaxy Watch5 Bluetooth (44mm)",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-watch5-44mm-sm-r910nzaainu-thumb-533186700?$172_172_PNG$",
      "demand": "high",
      "rating": 4,
      "newPrice": 29900,
      "oldPrice": 31000,
      "category": "Watch"
  },
 
  {
      "_id": 2,
      "name": "Galaxy Watch5 LTE (44mm)",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-watch5-44mm-431015-sm-r915fzbainu-thumb-533187322?$172_172_PNG$",
      "demand": "standard",
      "rating": 4,
      "newPrice": 30900,
      "oldPrice": 35900,
      "category": "Watch"
  }
    
  ])
}

module.exports.apiController = get;