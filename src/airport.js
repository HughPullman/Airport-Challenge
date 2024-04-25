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
        return `Capacity is now ${this.capacity}`
        
    },
    isFull() {
        return this.airportPlanes.length >= this.capacity;
    },
    addPlane(plane) {
        if (plane === null || this.checkPlane(plane)) {
            return
        }
        !this.isFull() ? this.airportPlanes.push(plane): ''
    },
    checkPlane(plane) {
        return this.airportPlanes.includes(plane)
    },
    removePlane(plane) {
        this.airportPlanes = this.airportPlanes.filter(planes => planes !== plane);
    }
}

export default airport