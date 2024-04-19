const airport = {
    capacity: 10,
    checkCapacity() {
        return this.capacity;
    },
    setCapacity(newCapacity) {
        newCapacity >= 0 ? this.capacity = newCapacity: ''
    }
}

export default airport