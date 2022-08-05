<template>
  <div class="container">
    <div id="table">
      <currencyTable>30 Days Currency History</currencyTable>
    </div>
    <div id="chart">
     <chart :options="chartOptionsUSD"></chart> 
     <chart :options="chartOptionsEUR"></chart>
     <chart :options="chartOptionsGBP"></chart>
   </div>
  </div>
  
</template>

<script>

 
import {Chart} from 'highcharts-vue'
import CurrencyTable from './CurrencyTable'
import {dates, valueUSD, valueEUR, valueGBP} from './Currencies'
 
export default {
 name: 'CurrencyTracker',
 
data() {
 return {
   title: '',
   text: '',
   chartType: 'Spline',
   seriesColor: '#6fcd98',
   colorInputIsSupported: null,
   
   chartOptionsUSD: {
   xAxis: {
   categories: dates,
   tickInterval: 1,
   
   labels: {
     enabled: true
           }
   },
     chart: {
       type: 'spline'
     },
     title: {
       text: 'Currency Tracker'
     },
     series: [{
       name: 'USD',
       data: valueUSD,
       color: '#007500'
     }
    ]
   },

   chartOptionsEUR: {
   xAxis: {
   categories: dates,
   tickInterval: 1,
   
   labels: {
     enabled: true
           }
   },
     chart: {
       type: 'spline'
     },
     title: {
       text: 'Currency Tracker'
     },
     series: [{
       name: 'EUR',
       data: valueEUR,
       color: '#006DCC'
     }
    ]
 },

 chartOptionsGBP: {
   xAxis: {
   categories: dates,
   tickInterval: 1,
   
   labels: {
     enabled: true
           }
   },
     chart: {
       type: 'spline'
     },
     title: {
       text: 'Currency Tracker'
     },
     series: [{
       name: 'GBP',
       data: valueGBP,
       color: '#800080'
     }
    ]
 }
}},
 
components: {
   chart: Chart,
   currencyTable: CurrencyTable
 },
 
 methods:{
   
 },
 
 created(){
 
}
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


