<template>
  <div >
    
    <div >
      <b-input v-model="search" placeholder="Search"></b-input>
      <b-table :items="items" :fields="fields" :filter="search">
        <template #table-caption  >This is a table caption.</template>
      </b-table>
    </div>
  </div>
</template>

<script>
import {dates, valueUSD, valueEUR, valueGBP, averageUSD, averageEUR, averageGBP, medianUSD, medianEUR, medianGBP} from './Currencies'

let items = [
  {date: "AVERAGE", USD: averageUSD, EUR: averageEUR, GBP: averageGBP},
  {date: "MEDIAN", USD: medianUSD, EUR: medianEUR, GBP: medianGBP}
  ]

for (let i = 0; i < dates.length; i++){
  items.push(
    {date: dates[i], USD: valueUSD[i], EUR: valueEUR[i], GBP: valueGBP[i] }    
  )
}



  export default {
    data() {
      return {
        fields: [
          {key: 'date',
          sortable: true},
          {key: 'USD',
          sortable: true},
          {key: 'EUR',
          sortable: true},
          {key: 'GBP',
          sortable: true},
          
          ],
        
        items: items,
        search: ""
      }
    },
    methods: {
  
    },

    computed: {
    
    
  }
  
    
  }
</script>

<style>

.searchBar{
  width:100%;
  margin: 20px auto;
  
}

.sr-only{
  display: none;
}
</style>