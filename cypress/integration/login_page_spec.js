

//test register
	describe('Visits page, register form',function() {
		it('Successfully loads ',function() {
			cy.visit('/')

			//Get a new user with input type and verify value
			cy.get('input[name="email"]').type('user8@user8.com')
			cy.get('input[name="password"]').type('1234')
			cy.get('.btn-reg').click()

		})
	})

	describe('Visits page, register form',function() {
		it('Successfully loads ',function() {
			cy.visit('/')

			//Get a new user with input type and verify value
			cy.get('input[name="email"]').type('user8@user8.com')
			cy.get('input[name="password"]').type('1234')
			cy.get('.btn-reg').click()

		})
	})

//test login
	describe('Visits page, if user, logs in',function() {
		it('Successfully loads ',function() {
			cy.visit('/')

			cy.get('.btn-next').click()

			cy.get('input[name="email"]').type('user8@user8.com')
			cy.get('input[name="password"]').type('1234')
			cy.get('.btn-login').click()

		})
	})

	describe('On main page', function () {
		beforeEach(function () {
			cy.login()
		})

		afterEach(function () {
			cy.logout()
		})

	
	})





// describe('My First Test',function() {
// 	it('Does not do much!', function() {
// 		expect(true).to.equal(true)
// 	})
// })

// describe('My First Test', function() {
// 	it('Does not do much!',function() {
// 		expect(true).to.equal(false)
// 	})
// })

// context('User setup', () => {
// 	beforeEach(() => {
// 		cy.task('clear:db')
// 	})


// describe('The landing page', function(){
// 	beforeEach(function () {
// 		cy.exec('npm run db: reset && npm run db:seed')
// 	})
// })
//})
