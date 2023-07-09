import request from 'supertest';
import { describe, it } from '@jest/globals';
import { faker } from '@faker-js/faker';

// Constants
const api_url = 'https://preprod.backmarket.fr';
const MERCHANT_EMAIL = `test-${faker.datatype.uuid()}@example.com`;
const MERCHANT_PWD = faker.internet.password();
const MERCHANT_FIRSTNAME = `TestData-API-${faker.name.firstName()}`;
const MERCHANT_LASTNAME = `TestData-API-${faker.name.lastName()}`;
const MERCHANT_COMPANY_NAME = `${faker.company.bs()} ${faker.company.companySuffix()}`;

// Test suite
describe('POST /bm/merchants/register', () => {
    // Test case
    it('should create a new merchant', async () => {

        console.log("Supertest test")
        console.log("Register new seller");

        // Register a new merchant
        const registerResponse = await request(api_url)
            .post('/bm/merchants/register')
            .set('Content-Type', 'application/json')
            .set('User-Agent', 'MrFatUserAgent')
            .send({
                email: MERCHANT_EMAIL,
                password: MERCHANT_PWD,
                company: MERCHANT_COMPANY_NAME,
                country: 'FR',
                lastEcommerceRevenue: 'MEDIUM_REVENUE',
                trackingCode: 'HJK78',
                address: {
                    country: 'FR',
                    city: 'Paris',
                    postalCode: '75019',
                    company: MERCHANT_COMPANY_NAME,
                    firstName: MERCHANT_FIRSTNAME,
                    lastName: MERCHANT_LASTNAME,
                    phoneNumber: '+33611111111',
                    addressLine: '152 boulevard macdonald',
                },
            })
            .expect(201);

        console.log(registerResponse);
    });
});

