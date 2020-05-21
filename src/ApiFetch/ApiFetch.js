export const getReservationsApi = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/reservations')
        const reservations = await response.json()
        return reservations
    } catch (error) {
        console.log(error)
    }
}

export const cancelReservationApi = async () => {
    try {

    } catch (error) {
        console.log(error)
    }
}

export const makeReservationApi = async () => {
    try {

    } catch (error) {
        console.log(error)
    }
}