class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: string) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(): number {
        this.speed += 20
        return this.speed
    }
}

const car = new Car('Toyota', 100)
console.log(car.accelerate()) // After fixing: will print 120
