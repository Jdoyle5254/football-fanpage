function Welcome () {
    const currentHour = new Date().getHours()
    const message = currentHour < 5 ? "Why are your still up?" 
                    : currentHour < 12 ? "Good Morning" 
                    : currentHour < 18 ? "Good Afternoon" 
                    : "Good Evening"

    return (
        <>
        <p>{message} Sports Fans! </p>
        <h2> Welcome Football Fans! </h2>
        </>
    ) 
}

export default Welcome; 

// updating data so files will push up 