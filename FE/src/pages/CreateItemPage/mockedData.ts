// mocks/cargoData.ts
const cargoData = [
	{
	  id: '1',
	  company: {
		 name: 'Master-Trans LLC',
		 contactPerson: 'Ostap Kolosivskyy',
		 phone: '+380 67 123 45 67',
		 email: 'ostap@master-trans.com',
	  },
	  cargo: {
		 description: 'Building materials (cement, bricks)',
		 weightKg: 18000,
		 volumeM3: 32,
		 type: 'Construction materials',
	  },
	  route: {
		 from: {
			country: 'Ukraine',
			city: 'Lviv',
			address: 'Shevchenka St, 120',
		 },
		 to: {
			country: 'Poland',
			city: 'Krakow',
			address: 'Logistics Center Krakow',
		 },
	  },
	  transport: {
		 truckType: 'Tautliner',
		 loadingDate: '2025-01-10',
		 deliveryDate: '2025-01-12',
	  },
	  status: 'In transit',
	},
 
	{
	  id: '2',
	  company: {
		 name: 'EuroCargo Sp. z o.o.',
		 contactPerson: 'Jan Kowalski',
		 phone: '+48 600 345 987',
		 email: 'jan.kowalski@eurocargo.pl',
	  },
	  cargo: {
		 description: 'Electronics (TVs, laptops)',
		 weightKg: 8200,
		 volumeM3: 18,
		 type: 'Electronics',
	  },
	  route: {
		 from: {
			country: 'Germany',
			city: 'Berlin',
			address: 'Industriestrasse 45',
		 },
		 to: {
			country: 'Czech Republic',
			city: 'Prague',
			address: 'Warehouse Prague 3',
		 },
	  },
	  transport: {
		 truckType: 'Box truck',
		 loadingDate: '2025-01-15',
		 deliveryDate: '2025-01-16',
	  },
	  status: 'Planned',
	},
 
	{
	  id: '3',
	  company: {
		 name: 'Baltic Logistic',
		 contactPerson: 'Anna Peterson',
		 phone: '+46 70 888 22 11',
		 email: 'anna@balticlogistic.se',
	  },
	  cargo: {
		 description: 'Food products (frozen)',
		 weightKg: 12000,
		 volumeM3: 25,
		 type: 'Food / Refrigerated',
	  },
	  route: {
		 from: {
			country: 'Sweden',
			city: 'Malmö',
			address: 'Port Area 5',
		 },
		 to: {
			country: 'Norway',
			city: 'Oslo',
			address: 'Oslo Distribution Hub',
		 },
	  },
	  transport: {
		 truckType: 'Reefer',
		 loadingDate: '2025-01-20',
		 deliveryDate: '2025-01-21',
	  },
	  status: 'Delivered',
	},
 ];
 

 export default cargoData;