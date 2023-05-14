import { faker } from '@faker-js/faker';
import { ILocation } from './Map';

class Company implements ILocation {

    name: string;
    phase: string;
    location: {
        lat: number,
        log: number
    };

    constructor() {
        this.name = faker.company.name();
        this.phase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            log: faker.location.longitude()
        };
    };

    markerContent(): string {
        return `Company name is ${this.name}`;
    }

}


export default Company;