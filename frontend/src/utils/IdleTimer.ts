type LockCallback = () => void;



class LockTimer {


    private timeoutId:
        ReturnType<typeof setTimeout> | null = null;



    private isRunning = false;



    private readonly events = [

        "mousemove",

        "mousedown",

        "click",

        "scroll",

        "keypress",

        "keydown",

        "touchstart",

        "touchmove"

    ];



    private duration =
        5 * 60 * 1000;



    private callback: LockCallback =
        () => { };






    start(
        duration: number,
        callback: LockCallback
    ) {


        this.duration = duration;

        this.callback = callback;



        if (this.isRunning) {

            return;

        }



        this.isRunning = true;



        this.attachListeners();


        this.reset();


    }







    reset = () => {



        if (!this.isRunning) {

            return;

        }




        if (this.timeoutId) {

            clearTimeout(
                this.timeoutId
            );

        }




        this.timeoutId =
            setTimeout(() => {


                this.callback();



            }, this.duration);



    }







    stop() {



        if (this.timeoutId) {


            clearTimeout(
                this.timeoutId
            );


            this.timeoutId = null;


        }



        this.removeListeners();



        this.isRunning = false;



    }







    pause() {



        if (this.timeoutId) {


            clearTimeout(
                this.timeoutId
            );


            this.timeoutId = null;


        }


    }







    resume() {


        if (this.isRunning) {

            this.reset();

        }


    }







    setDuration(
        duration: number
    ) {


        this.duration = duration;


        this.reset();


    }






    getDuration() {


        return this.duration;


    }







    private attachListeners() {


        this.events.forEach(event => {


            window.addEventListener(
                event,
                this.reset,
                true
            );


        });


    }







    private removeListeners() {


        this.events.forEach(event => {


            window.removeEventListener(
                event,
                this.reset,
                true
            );


        });


    }



}



const lockTimer =
    new LockTimer();



export default lockTimer;