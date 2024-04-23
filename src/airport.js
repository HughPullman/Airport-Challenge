const airport = {
    airportPlanes: [],
    capacity: 10,
    checkCapacity() {
        return this.capacity;
    },
    setCapacity(newCapacity) {
        if (typeof newCapacity === 'number') {
            newCapacity >= 0 ? this.capacity = newCapacity: ''
        }
        
    },
    isFull() {
        return this.airportPlanes.length >= this.capacity;
    },
    addPlane(plane) {
        if (plane === null) {
            return
        }
        !this.isFull() ? this.airportPlanes.push(plane): ''
    },
    checkPlane(plane) {
        return this.airportPlanes.includes(plane)
    }
}

export default airport