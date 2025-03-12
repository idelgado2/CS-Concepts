function isAnagramCharCode(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        let temp = s.charCodeAt(i);
        let temp2 = t.charCodeAt(i);
        let charCont = 'a'.charCodeAt(0);
        count[temp - charCont]++;
        count[temp2 - charCont]--;
    }
    return count.every(val => val === 0);
}

function isAnagramHashTable(s, t){
    let strLength;
    if (s.length !== t.length)
        return false;
    else
        strLength = s.length;

    const hashTableS = {};
    const hashTableT = {};

    for(let i = 0; i < strLength; i++){
        if(hashTableS[s[i]]){
            hashTableS[s[i]] = hashTableS[s[i]] + 1;
        }else{
            hashTableS[s[i]] = 1;
        }
        if(hashTableT[t[i]]){
            hashTableT[t[i]] = hashTableT[t[i]] + 1;
        }else{
            hashTableT[t[i]] = 1;
        }
    }

    for(let key in hashTableT){
        if(hashTableS[key] !== hashTableT[key]){
            return false;
        }
    }
    return true;
}

let s = "racecar";
let t =  "carrace";

console.log(isAnagramCharCode(s, t));
console.log(isAnagramHashTable(s, t));