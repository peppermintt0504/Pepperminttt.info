export const throttle = (callback, delay) => {
    let timer;
    return () => {
      if(!timer){
        setTimeout(callback(),delay);
      }
    };
  };