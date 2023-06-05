// Array of votes created by users for the given period of time
// each vote represent some specific cell on the chart
// where "date" field is the value of the cell on the X axis
// and "close" field is the value of the cell on the Y axis

const votes = [
    {
        date: new Date("2020-09-03T00:00:00.000+00:00"),
        close: 3121
    },
    {
        date: new Date("2020-09-03T00:00:00.000+00:00"),
        close: 3120
    },
    {
        date: new Date("2020-09-04T00:00:00.000+00:00"),
        close: 3104
    },
    {
        date: new Date("2020-09-04T00:00:00.000+00:00"),
        close: 3004
    },
    {
        date: new Date("2020-09-06T00:00:00.000+00:00"),
        close: 3205
    },
    {
        date: new Date("2020-09-06T00:00:00.000+00:00"),
        close: 3214
    },
    {
        date: new Date("2020-09-06T00:00:00.000+00:00"),
        close: 3257
    },
    {
        date: new Date("2020-09-06T00:00:00.000+00:00"),
        close: 3257
    }
];

// The list of dates that represent all values of the X axis
const dates = [
    "2020-09-07",
    "2020-09-06",
    "2020-09-05",
    "2020-09-04",
    "2020-09-03",
    "2020-09-02"
];

const VALUE_STEP = 10;

// Solution goes here
const getCloseValues = (votes) => {
    let min, max;

    for (let i = 0; i < votes.length; i++) {
        if (i === 0) {
            max = votes[i].close;
            min = votes[i].close;
        }

        if (votes[i].close > max) {
            max = votes[i].close;
        }
        if (votes[i].close < min) {
            min = votes[i].close;
        }
    }

    let arr = [];

    for (let i = min; i <= max + VALUE_STEP; i += VALUE_STEP) {
        arr.push(i);
    }

    return { min, max, arr };
};

console.log(getCloseValues(votes));

const { min, max, arr: arrMinMax } = getCloseValues(votes);

const getVotesCount = (date, votes, i) => {
    let votesCount = 0;

    for (let d = 0; d < votes.length; d++) {
        if (votes[d].date.toISOString().includes(date)) {
            if (votes[d].close >= arrMinMax[i] && votes[d].close < arrMinMax[i + 1]) {
                votesCount++;
            }
        }
    }

    return votesCount;
};

const getVotesGrid = () => {
    let votesGrid = [];

    for (let index = 0; index < dates.length; index++) {
        const date = dates[index];
        let voteDistributions = [];

        for (let i = 0; i < arrMinMax.length - 1; i++) {
            const votesCount = getVotesCount(date, votes, i);

            const element = { min: arrMinMax[i], max: arrMinMax[i + 1] };

            voteDistributions.push({ votesCount, range: element });
        }

        votesGrid.push({ date, voteDistributions });
    }

    return votesGrid;
};

console.log(getVotesGrid());

// "closeValues" field should be the list of all Y axis values
// generated from the votes array from the minimum close value up to the (>=) maximum close value with the step VALUE_STEP
// "votesGrid" field represents the list of all available dates and their list of "voteDistributions"
// each vote distribution represents the cell, i.e. the range of values on Y axis and the count of votes that fall into that range for that date

// RESPONSE EXAMPLE {
//   closeValues: [
//     3004, 3014, 3024, 3034, 3044,
//     3054, 3064, 3074, 3084, 3094,
//     3104, 3114, 3124, 3134, 3144,
//     3154, 3164, 3174, 3184, 3194,
//     3204, 3214, 3224, 3234, 3244,
//     3254, 3264
//   ],
//   votesGrid: [
//     {
//       date: '2020-09-06',
//       voteDistributions: [
//        {
//           "votesCount": 0,
//           "range": {
//             "min": 3004,
//             "max": 3014
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3014,
//             "max": 3024
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3024,
//             "max": 3034
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3034,
//             "max": 3044
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3044,
//             "max": 3054
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3054,
//             "max": 3064
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3064,
//             "max": 3074
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3074,
//             "max": 3084
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3084,
//             "max": 3094
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3094,
//             "max": 3104
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3104,
//             "max": 3114
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3114,
//             "max": 3124
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3124,
//             "max": 3134
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3134,
//             "max": 3144
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3144,
//             "max": 3154
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3154,
//             "max": 3164
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3164,
//             "max": 3174
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3174,
//             "max": 3184
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3184,
//             "max": 3194
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3194,
//             "max": 3204
//           }
//         },
//         {
//           "votesCount": 1,
//           "range": {
//             "min": 3204,
//             "max": 3214
//           }
//         },
//         {
//           "votesCount": 1,
//           "range": {
//             "min": 3214,
//             "max": 3224
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3224,
//             "max": 3234
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3234,
//             "max": 3244
//           }
//         },
//         {
//           "votesCount": 0,
//           "range": {
//             "min": 3244,
//             "max": 3254
//           }
//         },
//         {
//           "votesCount": 2,
//           "range": {
//             "min": 3254,
//             "max": 3264
//           }
//         }
//       ]
//     }
//   ]
// }
