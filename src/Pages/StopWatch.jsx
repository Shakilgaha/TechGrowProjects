import { useState } from "react"
import { StopWatchResult } from "../components/UI/StopWatchResult";


export const StopWatch = () => {

    const [timer, setTimer] = useState({
        hr: 0,
        min: 0,
        sec: 0,
        milSec: 0
    })

    const [status, setStatus] = useState(0);
    const [stopData, setStopData] = useState([]);
    const [resetData, setResetData] = useState([]);

    let Hour = timer.hr;
    let Minute = timer.min;
    let Second = timer.sec;
    let milliSecond = timer.milSec;


    const StartTimer = () => {

        if (milliSecond === 100) {
            milliSecond = 0;
            Second++;
        }
        if (Second === 60) {
            Second = 0;
            Minute++;
        }
        if (Minute === 60) {
            Minute = 0;
            Hour++;
        }

        milliSecond++;

        return setTimer({
            hr: Hour,
            min: Minute,
            sec: Second,
            milSec: milliSecond
        })
    }

    //* For Stoping Timer
    const StopTimer = () => {
        clearInterval(status);
        setStatus(0)
    }

    //* for Clearing The Timer
    const ClearData = () => {
        setTimer({
            hr: 0,
            min: 0,
            sec: 0,
            milSec: 0
        });
    }

    //* For Result
    const GetTimerData = (prev) => {
        const newRec = { ...timer };
        const updatedRecord = Array.isArray(prev) ? [...prev, newRec] : [newRec];
        return updatedRecord;
    }


    //*Start Btn
    const handleStartBtn = () => {
        if (!status) {
            setStatus(
                setInterval(() => {
                    StartTimer()
                }, 10)
            )
        }
    }

    //* Stop Btn
    const handleStopBtn = () => {

        StopTimer();
        setStopData((prev) => {
            const updatedRecord = GetTimerData(prev);
            return updatedRecord;
        });

    }

    //* Reset Btn
    const handleResetBtn = () => {
        // console.log("reset")
        StopTimer();
        ClearData();

        setResetData((prev) => {
            const updatedRecord = GetTimerData(prev)
            return updatedRecord
        })


    }

    //* Clear Btn
    const handleClearBtn = () => {

        StopTimer();
        ClearData();

        setStopData([])
        setResetData([])

    }


    return (
        <div className="div-center ">

            <div className=" flex flex-col mt-[2rem] md:mt-[7rem] items-center rounded-md w-full max-w-[25rem] md:max-w-[35rem]">

                <section className="w-full rounded-2xl flex flex-col items-center gap-12 px-3 py-3 ">
                   
                    <h1 className="text-2xl font-bold font-Salsa ">
                        STOPWATCH
                    </h1>

                    <section className="bg-white w-full  h-[7rem] flex items-center justify-center text-center rounded-lg shadow-lg dark:border dark:border-gray-700 dark1">

                        <h1 className=" w-[15rem] md:w-[23rem] h-fit text-5xl md:text-7xl text-purple-600 flex  text-center font-Pacifico font-bold ">
                            <span className=" ">
                                {
                                    timer.hr + " : " +

                                    timer.min + " : " +

                                    timer.sec + " : "
                                }
                            </span>
                            <span className=" flex w-[2rem]    "> &nbsp;
                                {
                                   timer.milSec
                                }
                            </span>
                        </h1>

                    </section>
                </section>

                <section className="flex flex-col py-3  w-full gap-5 px-3  ">

                    <section className="grid grid-cols-2 gap-6 ">
                        <button
                            onClick={handleStartBtn}
                            className="btn ">START</button>
                        <button
                            onClick={handleStopBtn}
                            className="btn ">STOP</button>
                        <button
                            onClick={handleResetBtn}
                            className="btn  "> RESET </button>

                        <button
                            onClick={handleClearBtn}
                            className="btn "> Clear </button>
                    </section>

                    <StopWatchResult
                        stopData={stopData}
                        resetData={resetData}

                    />

                </section>
            </div>
        </div>
    )
}