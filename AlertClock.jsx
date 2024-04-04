function AlertClock () {
    function handleButtonClick () {
        const date = new Date();

        alert(date.toLocaleDateString())
    }

    return (
        <>
            <button onClick={handleButtonClick}>Click me!</button>     
        </>
    )
}

export default AlertClock