export const hashCode = function(type, time){
    //Hashcode for generating unique transaction ID.
    //Slightly modified hash function to add types of deposit or withdraw
    //converting unix time to hashCode
    let toAry = [...time.toString(), ...Math.random().toString()];
    let result = toAry.reduce((prevHash, currVal) =>{
      return ((prevHash << 5) - prevHash) + currVal.charCodeAt(0)
    }, 0)
    return [...type].slice(0,2)+Math.abs(result);
}
