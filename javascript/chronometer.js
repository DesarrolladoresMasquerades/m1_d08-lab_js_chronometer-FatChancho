class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(callback) {
    
    this.intervalId = setInterval(()=>{
      this.currentTime+=1;
      console.log(this.currentTime,this.intervalId)
      if(callback)callback();
    },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    
  }

  getSeconds() {
    return this.currentTime - (this.getMinutes()*60)
  }

  computeTwoDigitNumber(value) {
    let ret=value.toString();
   if(ret.length <2) ret='0'+value
   return ret;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    const min =this.computeTwoDigitNumber(this.getMinutes());
    const sec = this.computeTwoDigitNumber(this.getSeconds());
    return min+':'+sec;

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
