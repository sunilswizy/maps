import { faker } from '@faker-js/faker';
import { ILocation } from './Map';

class User implements ILocation {
    name: string;
    location: {
        lat: number,
        log: number
    }

    constructor() {
        this.name = faker.person.firstName('female');
        this.location = {
            lat: faker.location.latitude(),
            log: faker.location.longitude()
        };
    }

    markerContent(): string {
        return `username is ${this.name}`;
    }
}

export default User;