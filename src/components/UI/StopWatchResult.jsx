export const StopWatchResult = ({ stopData, resetData }) => {

    return (
    
            (stopData.length > 0 || resetData.length > 0) && (

            <section className=" box-StopWatch flex flex-row  gap-2 w-full  overflow-hidden dark1  ">

                <ul className="flex flex-col w-[50%] items-center h-full">
                    <h1 className="mb-3 font-semibold  font-Pacifico text-2xl md:text-3xl"> Stopped Time </h1>
                    {
                        stopData.map((curData, index) => {
                            return (
                                <li key={index} className="font-Pacifico md:text-2xl">
                                    {curData.milSec > 0 ? curData.hr + " : " + curData.min + " : " + curData.sec + " : " + curData.milSec : false}
                                </li>
                            )
                        })

                    }
                </ul>

                <ul className="flex flex-col w-[50%] items-center">
                    <h1 className="mb-3 font-semibold  font-Pacifico text-2xl md:text-3xl"> Reset Time </h1>
                    {
                        resetData.map((curData, index) => {
                            return (
                                <li key={index} className="text-start font-Pacifico md:text-2xl">
                                    {curData.milSec > 0 ? curData.hr + " : " + curData.min + " : " + curData.sec + " : " + curData.milSec : false}
                                </li>
                            )
                        })
                    }
                </ul>

            </section>
        )
        

    )


}