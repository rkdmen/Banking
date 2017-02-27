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

export const unixConverter = function(unix){
      let newDate = new Date(unix * 1000);
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let year = newDate.getFullYear();
      let month = months[newDate.getMonth()];
      let date = newDate.getDate();
      let hour = newDate.getHours();
      let min =  newDate.getMinutes()<10?'0' + newDate.getMinutes(): newDate.getMinutes();
      return `${month} ${date}, ${year}, ${hour}:${min}`;
}

export const unixConverterMonthDate = function(unix){
      let newDate = new Date(unix * 1000);
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let year = newDate.getFullYear();
      let month = months[newDate.getMonth()];
      let date = newDate.getDate();
      return `${month} ${date}, ${year}`;
}

export const toTop = function(){
    window.scrollTo(0,0);
  }
