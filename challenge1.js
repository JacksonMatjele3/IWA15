// scripts.js

const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ]
  }
  
  // Only edit below
  
  const result = []
  
  const extractBiggest = () => {
    let maxVal = 0;
    let maxIndex = -1;
    
    for (let i = 0; i < data.lists.length; i++) {
      const list = data.lists[i][1];
      const lastIndex = list.length - 1;
      
      if (list[lastIndex] > maxVal) {
        maxVal = list[lastIndex];
        maxIndex = i;
      }
    }
    
    if (maxIndex !== -1) {
      const list = data.lists[maxIndex][1];
      result.push(list.pop());
    }
  }
  
  // Only edit above
  
  extractBiggest();
  extractBiggest();
  extractBiggest();
  extractBiggest();
  extractBiggest();
  
  extractBiggest();
  extractBiggest();
  extractBiggest();
  extractBiggest();
  extractBiggest();
  
  extractBiggest();
  extractBiggest();
  extractBiggest();
  extractBiggest();
  extractBiggest();
  
  console.log(result);
  