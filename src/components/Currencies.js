//Currency Values Array

let USD = [
    ['4 August',    '4.8258'],
    ['3 August',    '4.8455'],
    ['2 August',    '4.8434'],
    ['1 August',    '4.7993'],
    ['31 July', 	'4.8294'],
    ['30 July', 	'4.8201'],
    ['29 July', 	'4.8188'],
    ['28 July', 	'4.8412'],
    ['27 July', 	'4.8362'],
    ['26 July', 	'4.8696'],
    ['25 July', 	'4.8251'],
    ['24 July', 	'4.8212'],
    ['23 July', 	'4.8302'],
    ['22 July', 	'4.8293'],
    ['21 July',	    '4.8276'],
    ['20 July', 	'4.8486'],
    ['19 July', 	'4.8255'],
    ['18 July', 	'4.8696'],
    ['17 July', 	'4.8998'],
    ['16 July', 	'4.8967'],
    ['15 July', 	'4.8953'],
    ['14 July', 	'4.9326'],
    ['13 July', 	'4.9149'],
    ['12 July', 	'4.9294'],
    ['11 July', 	'4.9212'],
    ['10 July', 	'4.8584'],
    ['9 July', 	    '4.8586'],
    ['8 July', 	    '4.8586'],
    ['7 July', 	    '4.8631'],
    ['6 July', 	    '4.8519'],
    ['5 July', 	    '4.8148'],
    ['4 July', 	    '4.7434'],
   ] 
   
   let EUR = [
       ["4 August ",	"4.9225" ],
       ["3 August ",	"4.9246" ],
       ["2 August ",	"4.9248" ],
       ["1 August ",	"4.9242" ],
       ["31 July ",	    "4.9332" ],
       ["30 July ",	    "4.9289" ],
       ["29 July ",	    "4.9289" ],
       ["28 July ",	    "4.9349" ],
       ["27 July ",	    "4.9303" ],
       ["26 July ",	    "4.9327" ],
       ["25 July ",	    "4.9322" ],
       ["24 July ",	    "4.9234" ],
       ["23 July ",	    "4.9330" ],
       ["22 July ",	    "4.9337" ],
       ["21 July ",	    "4.9362" ],
       ["20 July ",	    "4.9376" ],
       ["19 July ",	    "4.9399" ],
       ["18 July ",	    "4.9395" ],
       ["17 July ",	    "4.9415" ],
       ["16 July ",	    "4.9359" ],
       ["15 July ",	    "4.9390" ],
       ["14 July ",	    "4.9418" ],
       ["13 July ",	    "4.9415" ],
       ["12 July ",	    "4.9448" ],
       ["11 July ",	    "4.9407" ],
       ["10 July ",	    "4.9464" ],
       ["9 July ",	    "4.9491" ],
       ["8 July ",      "4.9491" ],
       ["7 July ",      "4.9436" ],
       ["6 July ",      "4.9427" ],
       ["5 July ",      "4.9438" ],
       ["4 July ",      "4.9460" ]
   ]
   
   let GBP = [
       ["4 August",   "5.8464" ],
       ["3 August",   "5.8839" ],
       ["2 August",   "5.8920" ] ,
       ["1 August",   "5.8815" ] ,
       ["31 July ",   "5.8764" ],
       ["30 July ",   "5.8684" ] ,
       ["29 July ",   "5.8688" ],
       ["28 July ",   "5.8932" ] ,
       ["27 July ",   "5.8769" ],
       ["26 July ",   "5.8620" ] ,
       ["25 July ",   "5.8141" ],
       ["24 July ",   "5.7835" ],
       ["23 July ",   "5.7982" ] ,
       ["22 July ",   "5.8000" ],
       ["21 July ",   "5.7897" ] ,
       ["20 July ",   "5.8081" ],
       ["19 July ",   "5.7935" ] ,
       ["18 July ",   "5.8192" ],
       ["17 July ",   "5.8171" ],
       ["16 July ",   "5.8046" ] ,
       ["15 July ",   "5.8048" ],
       ["14 July ",   "5.8333" ] ,
       ["13 July ",   "5.8399" ],
       ["12 July ",   "5.8561" ] ,
       ["11 July ",   "5.8523" ],
       ["10 July ",   "5.8466" ],
       ["9 July  ",   "5.8444" ] ,
       ["8 July  ",   "5.8444" ],
       ["7 July  ",   "5.8488" ] ,
       ["6 July  ",   "5.7864" ],
       ["5 July  ",   "5.7571" ],
       ["4 July  ",   "5.7428" ]
   ]
   
   let dates = []
   USD.forEach(el=> {
     dates.push(el[0])
   
     })
   let valueUSD = [] 
   USD.forEach(el=> valueUSD.push(Number(el[1])))
   
   let valueEUR = []
   EUR.forEach(el=> valueEUR.push(Number(el[1])))
   
   let valueGBP = []
   GBP.forEach(el=> valueGBP.push(Number(el[1])))


   let length = dates.length
    let middleIndex = Math.floor(length / 2);

//    console.log(length)
   let totalUSD = 0;
   valueUSD.forEach(num => totalUSD += num)
   let averageUSD = totalUSD / valueUSD.length
   let medianUSD = (valueUSD[middleIndex] + valueUSD[middleIndex - 1]) / 2;
    

   let totalEUR = 0;
   valueEUR.forEach(num => totalEUR += num)
   let averageEUR = totalEUR / valueEUR.length
   let medianEUR = (valueEUR[middleIndex] + valueEUR[middleIndex - 1]) / 2;
    

   let totalGBP = 0;
   valueGBP.forEach(num => totalGBP += num)
   let averageGBP = totalGBP / valueGBP.length
   let medianGBP = (valueGBP[middleIndex] + valueGBP[middleIndex - 1]) / 2;
    
   

   







   export {dates, valueUSD, valueEUR, valueGBP, averageUSD, averageEUR, averageGBP, medianUSD, medianEUR, medianGBP}