module.exports = function toReadable (number) {

  var arrayRankOfOnes = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

  var arraysRankOfTens = ['','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
  
  var arr = [];
  
  arr = String(number).split('');

  if (arr.length === 3){
    if ((arr[2]/1 === 0) && (arr[1]/1 === 0)){
      return arrayRankOfOnes[arr[0]] + " hundred" 
    }else if (arr[1]/1 === 1){
        return arrayRankOfOnes[arr[0]] + " hundred " + arrayRankOfOnes[10 + arr[2]/1]
    }else if (arr[2]/1 === 0){
        return arrayRankOfOnes[arr[0]] + " hundred " + arraysRankOfTens[arr[1]]
    } else if(arr[1]/1 === 0){
        return arrayRankOfOnes[arr[0]] + " hundred " + arrayRankOfOnes[arr[2]]
    }else{
      return arrayRankOfOnes[arr[0]] + " hundred " + arraysRankOfTens[arr[1]] + " " + arrayRankOfOnes[arr[2]]
    }
    
  } else if(arr.length === 2){
    if (arr[1]/1 === 0){
      return arraysRankOfTens[arr[0]]
  }else if (arr[0]/1 === 1){
    
      return `${arrayRankOfOnes[10 + arr[1]/1]}`
    } else {
      return arraysRankOfTens[arr[0]] + " " + arrayRankOfOnes[arr[1]]
    }
  } else if (arr.length === 1){
    return arrayRankOfOnes[arr[0]]
  }
  
    return arr;
}



