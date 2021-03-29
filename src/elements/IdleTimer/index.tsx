import { Component } from 'react'

type IdleTimerProps = {
    timeout: number
    onTimeout: any
    onExpired?: any
}
class IdleTimer extends Component<IdleTimerProps>{
    readonly timeout: number
    readonly onTimeout: any
    private interval: any;
    private timeoutTracker: any;
    readonly eventHandler: any;

    constructor(props: IdleTimerProps) {
        super(props)
        this.timeout = props.timeout;
        this.onTimeout = props.onTimeout;

        // const expiredTime = parseInt(localStorage.getItem("_expiredTime") ?? "0", 10);
        // if (expiredTime > 0 && expiredTime < Date.now()) {
        //     props.onExpired();
        //     return;
        // }

        this.eventHandler = this.updateExpiredTime.bind(this);
        this.tracker();
        this.startInterval();
    }

    startInterval() {
        console.log("startInterval")
        this.updateExpiredTime();


        this.interval = setInterval(() => {
            const expiredTime = parseInt(localStorage.getItem("_expiredTime") ?? "", 10);
            if (expiredTime < Date.now()) {
                if (this.onTimeout) {
                    this.onTimeout();
                    this.cleanUp();
                }
            }
        }, 1000);
    }

    updateExpiredTime() {
        console.log("updateExpiredTime")
        localStorage.setItem("_expiredTime", (Date.now() + this.timeout * 1000).toString());
    }

    tracker() {
        console.log("tracker")
        window.addEventListener("mousemove", this.eventHandler);
        window.addEventListener("scroll", this.eventHandler);
        window.addEventListener("keydown", this.eventHandler);
    }

    cleanUp() {
        console.log("cleanUp")
        localStorage.removeItem("_expiredTime");
        clearInterval(this.interval);
        window.removeEventListener("mousemove", this.eventHandler);
        window.removeEventListener("scroll", this.eventHandler);
        window.removeEventListener("keydown", this.eventHandler);
    }
}

export default IdleTimer;