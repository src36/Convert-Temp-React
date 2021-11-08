import React,{useState} from 'react'


function ConvertTemp() {
    const [unit , setUnit] = useState('c');
    const [temp , setTemp] = useState(0);
    

    function handleCelsius(e){
        setUnit('c')
        setTemp(e)
    }
    function handleFahrenheit(e){
        setUnit('f')
        setTemp(e)
    }

    const celsius = unit === 'f' ? (temp - 32)*5/9 : temp;
    const fahrenheit = unit === 'c' ? (temp * 9/5)+32 : temp;

    return (
        <div className="container">
            <div className="title">
                <h2>TempConv</h2>
            </div>
            <div className="title2">
                <input type="number" value={celsius} onChange={(event)=>handleCelsius(event.target.value)} />
                <span>Celsius</span>
                <span>=</span>
                <input type="number"  value={fahrenheit} onChange={(event)=>handleFahrenheit(event.target.value)} />
                <span>Fahrenheit</span>
            </div>
        </div>
    )
}

export default ConvertTemp
