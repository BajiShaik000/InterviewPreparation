const loggerfn = () => {
    console.log("Throttled function");
}

const throttle = (fn,limit) => {
    let flag = true;
    return function(){
        let context = this;
        let args = arguments;
        if(flag){
            fn.apply(context, args);
            flag = false;
            setTimeout(()=>{
                flag = true;
            },limit)
        }
    }
}

const betterLoggerfn = throttle(loggerfn, 1000);

window.addEventListener("resize",betterLoggerfn);


const normalFn = () => {
    console.count("Normal function");
}

window.addEventListener("resize",normalFn);