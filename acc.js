var totalRecommendedCalories = null
var a = [2,3,5]
a.map((recData) => {
  totalRecommendedCalories += (recData)
  return recData
})

console.log(totalRecommendedCalories)