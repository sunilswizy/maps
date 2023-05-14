import User from "./User";
import Company from "./Company";
import CustomMap from "./Map";

const user = new User();
const company = new Company();

const map = new CustomMap(document.getElementById('map') as HTMLElement);
map.addMarker(user);
map.addMarker(company);
