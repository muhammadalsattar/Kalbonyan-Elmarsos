// Setting up object
const data = {
    locations: [],
    get location() {
        return this._location
    },
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// Setting data location
data.location = '  Philadelphia    '
data.location = ' New York'
console.log(data)
