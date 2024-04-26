const airport = {
    airportPlanes: [],
    capacity: 10,
    weather: true,
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
        if (plane === null || this.checkPlane(plane) || !this.checkWeather()) {
            return `${plane} cannot land at this time`
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
         if (!this.checkWeather()) {
            return `${plane} cannot take off at this time`
         } else {
             if (this.checkPlane(plane)) {
            this.airportPlanes = this.airportPlanes.filter(planes => planes !== plane);
            return `${plane} has been cleared for take off`
        } else {
            return "This plane is not at the airport"
        }
        }
        
        
    },
    checkWeather() {
        return this.weather
    },
    setWeather(newWeather) {
        typeof newWeather === "boolean" ? this.weather = newWeather : ''
    }
}

export default airport