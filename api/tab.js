const get = (req, res) => {
  res.send([

    {
      "_id": 1,
      "name": "Galaxy Tab S8 Ultra (Wi-Fi)",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/sm-x900nzaeinu/gallery/in-galaxy-tab-s8-ultra-wifi-x900-sm-x900nzaeinu-thumb-534251367?$216_216_PNG$",
      "demand": "high",
      "rating": 4,
      "newPrice": 81900,
      "oldPrice": 90500,
      "category": "iPad"
    },

    {
      "_id": 2,
      "name": "Galaxy Tab S8 Ultra (Wi-Fi)",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/sm-x900nzaeinu/gallery/in-galaxy-tab-s8-ultra-wifi-x900-sm-x900nzaeinu-thumb-534251367?$216_216_PNG$",
      "demand": "high",
      "rating": 4,
      "newPrice": 81900,
      "oldPrice": 90500,
      "category": "iPad"
    },

    {
      "_id": 3,
      "name": "Galaxy Tab S8 Ultra (Wi-Fi)",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/sm-x900nzaeinu/gallery/in-galaxy-tab-s8-ultra-wifi-x900-sm-x900nzaeinu-thumb-534251367?$216_216_PNG$",
      "demand": "high",
      "rating": 4,
      "newPrice": 81900,
      "oldPrice": 90500,
      "category": "iPad"
    },

    {
      "_id": 4,
      "name": "Galaxy Tab S8 Ultra (Wi-Fi)",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/sm-x900nzaeinu/gallery/in-galaxy-tab-s8-ultra-wifi-x900-sm-x900nzaeinu-thumb-534251367?$216_216_PNG$",
      "demand": "high",
      "rating": 4,
      "newPrice": 81900,
      "oldPrice": 90500,
      "category": "iPad"
    }
  ])
}

module.exports.apiController = get;