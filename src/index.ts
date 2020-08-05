import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const company = new Company();
const user = new User();
const customeMap = new CustomMap('map');

customeMap.addMarker(user);
customeMap.addMarker(company);
