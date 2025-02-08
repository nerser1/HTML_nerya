const carsForSale = [
    {
        "Name": "tesla model s performance",
        "Miles_per_Gallon": 18,
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 200,
        "Weight_in_lbs": 3504,
        "Acceleration": 12,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "tesla model y performance",
        "Miles_per_Gallon": 18,
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 600,
        "Weight_in_lbs": 3504,
        "Acceleration": 12,
        "Year": "1970-01-01",
        "Origin": "USA"
    }
]

const carsForRental = [
    {
        "Name": "chevrolet chevelle malibu",
        "Miles_per_Gallon": 18,
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Acceleration": 12,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "buick skylark 320",
        "Miles_per_Gallon": 15,
        "Cylinders": 8,
        "Displacement": 350,
        "Horsepower": 165,
        "Weight_in_lbs": 3693,
        "Acceleration": 11.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "plymouth satellite",
        "Miles_per_Gallon": 18,
        "Cylinders": 8,
        "Displacement": 318,
        "Horsepower": 150,
        "Weight_in_lbs": 3436,
        "Acceleration": 11,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "amc rebel sst",
        "Miles_per_Gallon": 16,
        "Cylinders": 8,
        "Displacement": 304,
        "Horsepower": 150,
        "Weight_in_lbs": 3433,
        "Acceleration": 12,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford torino",
        "Miles_per_Gallon": 17,
        "Cylinders": 8,
        "Displacement": 302,
        "Horsepower": 140,
        "Weight_in_lbs": 3449,
        "Acceleration": 10.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford galaxie 500",
        "Miles_per_Gallon": 15,
        "Cylinders": 8,
        "Displacement": 429,
        "Horsepower": 198,
        "Weight_in_lbs": 4341,
        "Acceleration": 10,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "chevrolet impala",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 454,
        "Horsepower": 220,
        "Weight_in_lbs": 4354,
        "Acceleration": 9,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "plymouth fury iii",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 440,
        "Horsepower": 215,
        "Weight_in_lbs": 4312,
        "Acceleration": 8.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "pontiac catalina",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 455,
        "Horsepower": 225,
        "Weight_in_lbs": 4425,
        "Acceleration": 10,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "amc ambassador dpl",
        "Miles_per_Gallon": 15,
        "Cylinders": 8,
        "Displacement": 390,
        "Horsepower": 190,
        "Weight_in_lbs": 3850,
        "Acceleration": 8.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "citroen ds-21 pallas",
        "Miles_per_Gallon": null,
        "Cylinders": 4,
        "Displacement": 133,
        "Horsepower": 115,
        "Weight_in_lbs": 3090,
        "Acceleration": 17.5,
        "Year": "1970-01-01",
        "Origin": "Europe"
    },
    {
        "Name": "chevrolet chevelle concours (sw)",
        "Miles_per_Gallon": null,
        "Cylinders": 8,
        "Displacement": 350,
        "Horsepower": 165,
        "Weight_in_lbs": 4142,
        "Acceleration": 11.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford torino (sw)",
        "Miles_per_Gallon": null,
        "Cylinders": 8,
        "Displacement": 351,
        "Horsepower": 153,
        "Weight_in_lbs": 4034,
        "Acceleration": 11,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "plymouth satellite (sw)",
        "Miles_per_Gallon": null,
        "Cylinders": 8,
        "Displacement": 383,
        "Horsepower": 175,
        "Weight_in_lbs": 4166,
        "Acceleration": 10.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "amc rebel sst (sw)",
        "Miles_per_Gallon": null,
        "Cylinders": 8,
        "Displacement": 360,
        "Horsepower": 175,
        "Weight_in_lbs": 3850,
        "Acceleration": 11,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "dodge challenger se",
        "Miles_per_Gallon": 15,
        "Cylinders": 8,
        "Displacement": 383,
        "Horsepower": 170,
        "Weight_in_lbs": 3563,
        "Acceleration": 10,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "plymouth 'cuda 340",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 340,
        "Horsepower": 160,
        "Weight_in_lbs": 3609,
        "Acceleration": 8,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford mustang boss 302",
        "Miles_per_Gallon": null,
        "Cylinders": 8,
        "Displacement": 302,
        "Horsepower": 140,
        "Weight_in_lbs": 3353,
        "Acceleration": 8,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "chevrolet monte carlo",
        "Miles_per_Gallon": 15,
        "Cylinders": 8,
        "Displacement": 400,
        "Horsepower": 150,
        "Weight_in_lbs": 3761,
        "Acceleration": 9.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "buick estate wagon (sw)",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 455,
        "Horsepower": 225,
        "Weight_in_lbs": 3086,
        "Acceleration": 10,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "toyota corona mark ii",
        "Miles_per_Gallon": 24,
        "Cylinders": 4,
        "Displacement": 113,
        "Horsepower": 95,
        "Weight_in_lbs": 2372,
        "Acceleration": 15,
        "Year": "1970-01-01",
        "Origin": "Japan"
    },
    {
        "Name": "plymouth duster",
        "Miles_per_Gallon": 22,
        "Cylinders": 6,
        "Displacement": 198,
        "Horsepower": 95,
        "Weight_in_lbs": 2833,
        "Acceleration": 15.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "amc hornet",
        "Miles_per_Gallon": 18,
        "Cylinders": 6,
        "Displacement": 199,
        "Horsepower": 97,
        "Weight_in_lbs": 2774,
        "Acceleration": 15.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford maverick",
        "Miles_per_Gallon": 21,
        "Cylinders": 6,
        "Displacement": 200,
        "Horsepower": 85,
        "Weight_in_lbs": 2587,
        "Acceleration": 16,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "datsun pl510",
        "Miles_per_Gallon": 27,
        "Cylinders": 4,
        "Displacement": 97,
        "Horsepower": 88,
        "Weight_in_lbs": 2130,
        "Acceleration": 14.5,
        "Year": "1970-01-01",
        "Origin": "Japan"
    },
    {
        "Name": "volkswagen 1131 deluxe sedan",
        "Miles_per_Gallon": 26,
        "Cylinders": 4,
        "Displacement": 97,
        "Horsepower": 46,
        "Weight_in_lbs": 1835,
        "Acceleration": 20.5,
        "Year": "1970-01-01",
        "Origin": "Europe"
    },
    {
        "Name": "peugeot 504",
        "Miles_per_Gallon": 25,
        "Cylinders": 4,
        "Displacement": 110,
        "Horsepower": 87,
        "Weight_in_lbs": 2672,
        "Acceleration": 17.5,
        "Year": "1970-01-01",
        "Origin": "Europe"
    },
    {
        "Name": "audi 100 ls",
        "Miles_per_Gallon": 24,
        "Cylinders": 4,
        "Displacement": 107,
        "Horsepower": 90,
        "Weight_in_lbs": 2430,
        "Acceleration": 14.5,
        "Year": "1970-01-01",
        "Origin": "Europe"
    },
    {
        "Name": "saab 99e",
        "Miles_per_Gallon": 25,
        "Cylinders": 4,
        "Displacement": 104,
        "Horsepower": 95,
        "Weight_in_lbs": 2375,
        "Acceleration": 17.5,
        "Year": "1970-01-01",
        "Origin": "Europe"
    },
    {
        "Name": "bmw 2002",
        "Miles_per_Gallon": 26,
        "Cylinders": 4,
        "Displacement": 121,
        "Horsepower": 113,
        "Weight_in_lbs": 2234,
        "Acceleration": 12.5,
        "Year": "1970-01-01",
        "Origin": "Europe"
    },
    {
        "Name": "amc gremlin",
        "Miles_per_Gallon": 21,
        "Cylinders": 6,
        "Displacement": 199,
        "Horsepower": 90,
        "Weight_in_lbs": 2648,
        "Acceleration": 15,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford f250",
        "Miles_per_Gallon": 10,
        "Cylinders": 8,
        "Displacement": 360,
        "Horsepower": 215,
        "Weight_in_lbs": 4615,
        "Acceleration": 14,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "chevy c20",
        "Miles_per_Gallon": 10,
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 200,
        "Weight_in_lbs": 4376,
        "Acceleration": 15,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "dodge d200",
        "Miles_per_Gallon": 11,
        "Cylinders": 8,
        "Displacement": 318,
        "Horsepower": 210,
        "Weight_in_lbs": 4382,
        "Acceleration": 13.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "hi 1200d",
        "Miles_per_Gallon": 9,
        "Cylinders": 8,
        "Displacement": 304,
        "Horsepower": 193,
        "Weight_in_lbs": 4732,
        "Acceleration": 18.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "datsun pl510",
        "Miles_per_Gallon": 27,
        "Cylinders": 4,
        "Displacement": 97,
        "Horsepower": 88,
        "Weight_in_lbs": 2130,
        "Acceleration": 14.5,
        "Year": "1971-01-01",
        "Origin": "Japan"
    },
    {
        "Name": "chevrolet vega 2300",
        "Miles_per_Gallon": 28,
        "Cylinders": 4,
        "Displacement": 140,
        "Horsepower": 90,
        "Weight_in_lbs": 2264,
        "Acceleration": 15.5,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "toyota corona",
        "Miles_per_Gallon": 25,
        "Cylinders": 4,
        "Displacement": 113,
        "Horsepower": 95,
        "Weight_in_lbs": 2228,
        "Acceleration": 14,
        "Year": "1971-01-01",
        "Origin": "Japan"
    },
    {
        "Name": "ford pinto",
        "Miles_per_Gallon": 25,
        "Cylinders": 4,
        "Displacement": 98,
        "Horsepower": null,
        "Weight_in_lbs": 2046,
        "Acceleration": 19,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "volkswagen super beetle 117",
        "Miles_per_Gallon": null,
        "Cylinders": 4,
        "Displacement": 97,
        "Horsepower": 48,
        "Weight_in_lbs": 1978,
        "Acceleration": 20,
        "Year": "1971-01-01",
        "Origin": "Europe"
    },
    {
        "Name": "amc gremlin",
        "Miles_per_Gallon": 19,
        "Cylinders": 6,
        "Displacement": 232,
        "Horsepower": 100,
        "Weight_in_lbs": 2634,
        "Acceleration": 13,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "plymouth satellite custom",
        "Miles_per_Gallon": 16,
        "Cylinders": 6,
        "Displacement": 225,
        "Horsepower": 105,
        "Weight_in_lbs": 3439,
        "Acceleration": 15.5,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "chevrolet chevelle malibu",
        "Miles_per_Gallon": 17,
        "Cylinders": 6,
        "Displacement": 250,
        "Horsepower": 100,
        "Weight_in_lbs": 3329,
        "Acceleration": 15.5,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford torino 500",
        "Miles_per_Gallon": 19,
        "Cylinders": 6,
        "Displacement": 250,
        "Horsepower": 88,
        "Weight_in_lbs": 3302,
        "Acceleration": 15.5,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "amc matador",
        "Miles_per_Gallon": 18,
        "Cylinders": 6,
        "Displacement": 232,
        "Horsepower": 100,
        "Weight_in_lbs": 3288,
        "Acceleration": 15.5,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "chevrolet impala",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 350,
        "Horsepower": 165,
        "Weight_in_lbs": 4209,
        "Acceleration": 12,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "pontiac catalina brougham",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 400,
        "Horsepower": 175,
        "Weight_in_lbs": 4464,
        "Acceleration": 11.5,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford galaxie 500",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 351,
        "Horsepower": 153,
        "Weight_in_lbs": 4154,
        "Acceleration": 13.5,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "plymouth fury iii",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 318,
        "Horsepower": 150,
        "Weight_in_lbs": 4096,
        "Acceleration": 13,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "dodge monaco (sw)",
        "Miles_per_Gallon": 12,
        "Cylinders": 8,
        "Displacement": 383,
        "Horsepower": 180,
        "Weight_in_lbs": 4955,
        "Acceleration": 11.5,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford country squire (sw)",
        "Miles_per_Gallon": 13,
        "Cylinders": 8,
        "Displacement": 400,
        "Horsepower": 170,
        "Weight_in_lbs": 4746,
        "Acceleration": 12,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "pontiac safari (sw)",
        "Miles_per_Gallon": 13,
        "Cylinders": 8,
        "Displacement": 400,
        "Horsepower": 175,
        "Weight_in_lbs": 5140,
        "Acceleration": 12,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "amc hornet sportabout (sw)",
        "Miles_per_Gallon": 18,
        "Cylinders": 6,
        "Displacement": 258,
        "Horsepower": 110,
        "Weight_in_lbs": 2962,
        "Acceleration": 13.5,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "chevrolet vega (sw)",
        "Miles_per_Gallon": 22,
        "Cylinders": 4,
        "Displacement": 140,
        "Horsepower": 72,
        "Weight_in_lbs": 2408,
        "Acceleration": 19,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "pontiac firebird",
        "Miles_per_Gallon": 19,
        "Cylinders": 6,
        "Displacement": 250,
        "Horsepower": 100,
        "Weight_in_lbs": 3282,
        "Acceleration": 15,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford mustang",
        "Miles_per_Gallon": 18,
        "Cylinders": 6,
        "Displacement": 250,
        "Horsepower": 88,
        "Weight_in_lbs": 3139,
        "Acceleration": 14.5,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "mercury capri 2000",
        "Miles_per_Gallon": 23,
        "Cylinders": 4,
        "Displacement": 122,
        "Horsepower": 86,
        "Weight_in_lbs": 2220,
        "Acceleration": 14,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "opel 1900",
        "Miles_per_Gallon": 28,
        "Cylinders": 4,
        "Displacement": 116,
        "Horsepower": 90,
        "Weight_in_lbs": 2123,
        "Acceleration": 14,
        "Year": "1971-01-01",
        "Origin": "Europe"
    },
    {
        "Name": "peugeot 304",
        "Miles_per_Gallon": 30,
        "Cylinders": 4,
        "Displacement": 79,
        "Horsepower": 70,
        "Weight_in_lbs": 2074,
        "Acceleration": 19.5,
        "Year": "1971-01-01",
        "Origin": "Europe"
    },
    {
        "Name": "fiat 124b",
        "Miles_per_Gallon": 30,
        "Cylinders": 4,
        "Displacement": 88,
        "Horsepower": 76,
        "Weight_in_lbs": 2065,
        "Acceleration": 14.5,
        "Year": "1971-01-01",
        "Origin": "Europe"
    },
    {
        "Name": "toyota corolla 1200",
        "Miles_per_Gallon": 31,
        "Cylinders": 4,
        "Displacement": 71,
        "Horsepower": 65,
        "Weight_in_lbs": 1773,
        "Acceleration": 19,
        "Year": "1971-01-01",
        "Origin": "Japan"
    },
    {
        "Name": "datsun 1200",
        "Miles_per_Gallon": 35,
        "Cylinders": 4,
        "Displacement": 72,
        "Horsepower": 69,
        "Weight_in_lbs": 1613,
        "Acceleration": 18,
        "Year": "1971-01-01",
        "Origin": "Japan"
    },
    {
        "Name": "volkswagen model 111",
        "Miles_per_Gallon": 27,
        "Cylinders": 4,
        "Displacement": 97,
        "Horsepower": 60,
        "Weight_in_lbs": 1834,
        "Acceleration": 19,
        "Year": "1971-01-01",
        "Origin": "Europe"
    },
    {
        "Name": "plymouth cricket",
        "Miles_per_Gallon": 26,
        "Cylinders": 4,
        "Displacement": 91,
        "Horsepower": 70,
        "Weight_in_lbs": 1955,
        "Acceleration": 20.5,
        "Year": "1971-01-01",
        "Origin": "USA"
    },
    {
        "Name": "toyota corona hardtop",
        "Miles_per_Gallon": 24,
        "Cylinders": 4,
        "Displacement": 113,
        "Horsepower": 95,
        "Weight_in_lbs": 2278,
        "Acceleration": 15.5,
        "Year": "1972-01-01",
        "Origin": "Japan"
    },
    {
        "Name": "dodge colt hardtop",
        "Miles_per_Gallon": 25,
        "Cylinders": 4,
        "Displacement": 97.5,
        "Horsepower": 80,
        "Weight_in_lbs": 2126,
        "Acceleration": 17,
        "Year": "1972-01-01",
        "Origin": "USA"
    },
    {
        "Name": "volkswagen type 3",
        "Miles_per_Gallon": 23,
        "Cylinders": 4,
        "Displacement": 97,
        "Horsepower": 54,
        "Weight_in_lbs": 2254,
        "Acceleration": 23.5,
        "Year": "1972-01-01",
        "Origin": "Europe"
    },
    {
        "Name": "chevrolet vega",
        "Miles_per_Gallon": 20,
        "Cylinders": 4,
        "Displacement": 140,
        "Horsepower": 90,
        "Weight_in_lbs": 2408,
        "Acceleration": 19.5,
        "Year": "1972-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford pinto runabout",
        "Miles_per_Gallon": 21,
        "Cylinders": 4,
        "Displacement": 122,
        "Horsepower": 86,
        "Weight_in_lbs": 2226,
        "Acceleration": 16.5,
        "Year": "1972-01-01",
        "Origin": "USA"
    },
    {
        "Name": "chevrolet impala",
        "Miles_per_Gallon": 13,
        "Cylinders": 8,
        "Displacement": 350,
        "Horsepower": 165,
        "Weight_in_lbs": 4274,
        "Acceleration": 12,
        "Year": "1972-01-01",
        "Origin": "USA"
    },
    {
        "Name": "pontiac catalina",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 400,
        "Horsepower": 175,
        "Weight_in_lbs": 4385,
        "Acceleration": 12,
        "Year": "1972-01-01",
        "Origin": "USA"
    },
    {
        "Name": "plymouth fury iii",
        "Miles_per_Gallon": 15,
        "Cylinders": 8,
        "Displacement": 318,
        "Horsepower": 150,
        "Weight_in_lbs": 4135,
        "Acceleration": 13.5,
        "Year": "1972-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford galaxie 500",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 351,
        "Horsepower": 153,
        "Weight_in_lbs": 4129,
        "Acceleration": 13,
        "Year": "1972-01-01",
        "Origin": "USA"
    },
    {
        "Name": "amc ambassador sst",
        "Miles_per_Gallon": 17,
        "Cylinders": 8,
        "Displacement": 304,
        "Horsepower": 150,
        "Weight_in_lbs": 3672,
        "Acceleration": 11.5,
        "Year": "1972-01-01",
        "Origin": "USA"
    },
    {
        "Name": "mercury marquis",
        "Miles_per_Gallon": 11,
        "Cylinders": 8,
        "Displacement": 429,
        "Horsepower": 208,
        "Weight_in_lbs": 4633,
        "Acceleration": 11,
        "Year": "1972-01-01",
        "Origin": "USA"
    }
]