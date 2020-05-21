export const fetchReservations = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/reservations')
        const reservations = await response.json()
        return reservations
    } catch (error) {
        console.log(error)
    }
}