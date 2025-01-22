import { useState } from "react"

export const BMICalculator = () => {

    const [weight, setWeight] = useState('')
    const [feet, setFeet] = useState("")
    const [bmi, setBmi] = useState(null);
    const [result, setResult] = useState('');


    const handleCalculateBtn = () => {

        //! return if the value Is Not Filled
        if (!weight || !feet) {
            setResult('Please enter valid weight and height');
            return;
        }

        //! Converting The Feet Into Meter
        const totalFeet = feet * 12;
        const heightInMeter = totalFeet * 0.025;

        //! Calculating The BMI By Using Height And Weight 
        const calculatedBmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);
        setBmi(calculatedBmi);


        if (!isNaN(calculatedBmi)) {
            setBmi(calculatedBmi);
        }
        else {
            handleClearBtn()
            setBmi(null);
            alert("Invalid Input!! Please Check Input And Try Again");
            // setResult("Invalid BMi Input")
        }

        //! BMI Category
        if (calculatedBmi < 18.5) {
            setResult('Underweight');
        }
        else if (calculatedBmi < 24.9) {
            setResult('Normal weight');
        }
        else if (calculatedBmi < 29.9) {
            setResult('Overweight');
        }
        else {
            setResult('Obese');
        }

    }

    //! Split The Bmi Value In 2 Parts 
    const [integerPart, decimalPart] = bmi ? bmi.toString().split(".") : ["0", "00"];
    // console.log(integerPart)
    // console.log(decimalPart)

    const handleClearBtn = () => {

        setWeight("");
        setBmi("");
        setFeet("");
        setResult("");
    }

    return (
        <div className="div-center ">
            <section className="container md:h-[80vh] pt-[3rem] md:pt-[8rem]  w-fit gap-5 flex flex-col text-center font-semibold font-serif ">

                <h1 className="text-2xl mb-5 font-Salsa "> BMI Calculator  </h1>
                <section className="flex flex-row gap-6">

                    <div className=" box-bmi box-bmi-input  ">
                        <label htmlFor="weight" > Weight In KG</label>
                        <input type="number"
                            id="weight"
                            name="weight"
                            value={weight}
                            autoComplete="off"
                            required
                            onChange={(e) => setWeight(e.target.value)}
                            className=" textbox-bmi "
                        />
                    </div>

                    <div className="  box-bmi box-bmi-input  ">
                        <label htmlFor="height"> Height In Feet </label>
                        <input type="text"
                            id="height"
                            name="height"
                            value={feet}
                            autoComplete="off"
                            required
                            onChange={(e) => setFeet(e.target.value)}
                            className=" textbox-bmi "
                        />
                    </div>

                </section>

                <button
                    onClick={handleCalculateBtn}
                    className="btn"
                >
                    Calculate BMI
                </button>

                {
                    bmi && (
                        <>
                            <div className={` box-bmi dark1  gap-4 text-2xl  `}>

                                BMI Result

                                <span className="font-sans text-7xl text-violet-600 font-bold">
                                    {integerPart}<span className="text-4xl">.{decimalPart} </span>
                                </span>

                                <section>
                                    <span className=" inline text-gray-500 ">  Category : </span>
                                    {result}
                                </section>


                            </div>

                            <button className="btn"
                                onClick={handleClearBtn}
                            > Clear All </button>
                            <br /> <br />
                        </>
                    )

                }

            </section>
        </div>
    )
}



