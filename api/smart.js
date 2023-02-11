const get = (req, res) => {
    res.send([

        {
            "_id": 1,
            "name": "Galaxy Z Fold3 5G",
            "image": "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-fold3-f926-5g-sm-f926bzkdinu-thumb-474118710?$216_216_PNG$",
            "demand": "high",
            "rating": 4.5,
            "newPrice": 110000,
            "oldPrice": 112000,
            "category": "iPhone"
        },
        {
            "_id": 2,
            "name": "Galaxy Z Fold4",
            "image": "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-z-fold4-f936-sm-f936bzkdinu-thumb-533084151?$216_216_PNG$",
            "demand": "standard",
            "rating": 4,
            "newPrice": 140000,
            "oldPrice": 145000,
            "category": "iPhone"
        },

        {
            "_id": 3,
            "name": "Samsung Galaxy S23",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-5g-r.jpg",
            "demand": "standard",
            "rating": 4,
            "newPrice": 119900.00,
            "oldPrice": 125900.00,
            "category": "iPhone"
        },
        {
            "_id": 4,
            "name": "SAMSUNG Galaxy F13 (64 GB)",
            "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
            "demand": "standard",
            "rating": 4,
            "newPrice": 194900.00,
            "oldPrice": 214900.00,
            "category": "iPhone"
        },
        {
            "_id": 5,
            "name": "SAMSUNG Z Flip4",
            "image": "https://images.samsung.com/is/image/samsung/p6pim/in/sm-f721bzaainu/gallery/in-galaxy-z-flip4-f721-sm-f721bzaainu-thumb-534249206?$216_216_PNG$",
            "demand": "standard",
            "rating": 4,
            "newPrice": 309490,
            "oldPrice": 319490,
            "category": "iPhone"
        },
        {
            "_id": 6,
            "name": "SAMSUNG Galaxy Note 20 Ultra 5G (256 GB,12 GB RAM)",
            "image": "https://rukminim1.flixcart.com/image/312/312/kdhphu80/mobile/z/6/j/samsung-note-20-canvas-sm-n986bzkgins-original-imafudkhukrhaqgm.jpeg?q=70",
            "demand": "standard",
            "rating": 4,
            "newPrice": 309490,
            "oldPrice": 319490,
            "category": "iPhone"
        },
        {
            "_id": 7,
            "name": "SAMSUNG Galaxy A23 Plus 5G (128 GB)",
            "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/n/p/g/-original-imagm2jtdqagpcfe.jpeg?q=70",
            "demand": "standard",
            "rating": 4,
            "newPrice": 309490,
            "oldPrice": 319490,
            "category": "iPhone"
        }

    ])
}

module.exports.apiController = get;