import axios from 'axios';

describe('exampleService', () => {
	test('Testing example service query ', async () => {
		const response = await axios.post('http://localhost:4000/graphql', {
			query: `
            query {
				getExample{
				  message
				  user
				}
			  }
            `
		});

		const { data } = response;
		expect(data).toMatchObject({
			data: {
				getExample: {
					message: 'Hello World',
					user: 'RegulonDB'
				}
			}
		});
	});
});
