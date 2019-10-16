//MODULES ARE DIFFERENT JAVASCRIPT FILES EXISTING INDEPENDENTLY AND THAT CAN BE EXPORTED AND IMPORTED

import { hello } from 'Creating Modules 2.js';
import { Vehicle } from 'Creating Modules 2.js';

let suv = new Vehicle("SUV");
	console.log(suv.name);
	hello();