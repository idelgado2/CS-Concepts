function isAnagram(s, t) {
  // brute force O(nlogn + mlogm) for sorting both strings
  // if(s.length !== t.length){
  //     return false;
  // }
  // s.split("").sort().join();
  // t.split("").sort().join();

  // if(s === t){
  //     return true;
  // }else{
  //     return false;
  // }

  // Optimized solution O(n + m) using Map Object
  // if(s.length !== t.length){
  //     return false;
  // }

  // const countS = new Map();
  // const countT = new Map();

  // for(let i = 0; i < s.length; i++){
  //     countS.set(s[i], (countS.get(s[i]) || 0) + 1);
  //     countT.set(t[i], (countT.get(t[i]) || 0) + 1);
  // }

  // for(const [key, value] of countS){
  //     if(value !== countT.get(key)){
  //         return false;
  //     }
  // }
  // return true;

  // Optimized solution O(n + m) using Hash object
  if (s.length !== t.length) {
    return false;
  }

  const countS = {};
  const countT = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  for (const key of Object.keys(countS)) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }
  return true;
}

isAnagram("anagram", "nagaram");
