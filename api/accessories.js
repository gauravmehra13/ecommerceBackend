const get = (req, res) => {
  res.send([
    {
      _id: 1,
      name: "Galaxy Buds2 Pro",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-buds2-pro-r510-sm-r510nlvainu-533192230?$1300_1038_PNG$",
      demand: "high",
      rating: 4.5,
      newPrice: 26900,
      oldPrice: 30000,
      category: "Accessories",
    },

    {
      _id: 2,
      name: "Galaxy Buds2 Pro",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-buds2-pro-r510-sm-r510nlvainu-533192230?$1300_1038_PNG$",
      demand: "high",
      rating: 4.5,
      newPrice: 26900,
      oldPrice: 30000,
      category: "Accessories",
    },
    {
      _id: 3,
      name: "Galaxy Buds2 Pro",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-buds2-pro-r510-sm-r510nlvainu-533192230?$1300_1038_PNG$",
      demand: "high",
      rating: 4.5,
      newPrice: 26900,
      oldPrice: 30000,
      category: "Accessories",
    },
  ]);
};

module.exports.apiController = get;
