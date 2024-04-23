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
        !this.isFull() ? this.airportPlanes.push(plane): ''
    }
}

export default airport