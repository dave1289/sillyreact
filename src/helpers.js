import React from 'react'


const choice = (arr) => {
   return arr[Math.floor(Math.random() * arr.length)]
}

const remove = (arr, item) => {
   const firstMatch = arr.indexOf(item)
   return arr.splice(firstMatch, 1)
}

export {choice, remove}