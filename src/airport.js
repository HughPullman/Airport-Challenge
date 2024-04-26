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
        if (!this.isFull()) {
            this.airportPlanes.push(plane);
            return `${plane} is ok to land`
        }
    },
    checkPlane(plane) {
        return this.airportPlanes.includes(plane)
    },
    removePlane(plane) {
        if (this.checkPlane(plane)) {
            this.airportPlanes = this.airportPlanes.filter(planes => planes !== plane);
            return `${plane} has been cleared for take off`
        } else {
            return "This plane is not at the airport"
        }
        
    }
}

export default airport