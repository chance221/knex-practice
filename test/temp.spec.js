describe.only(`Temporary spec - top level describe`, () => {
  before(() => {
    console.log('before #1')
  })

  after(() => {
    console.log('after #1')
  })

  beforeEach(() => {
    console.log('beforeEach #2')
  })

  before(() => {
    console.log('before #2')
  })

  describe(`Describe #1`, () => {
    before(() => {
      console.log('before #3')
    })

    after(() => {
      console.log('after #2')
    })

    afterEach(() => {
      console.log('afterEach #1')
    })

    it(`it #1`, () => {
      console.log('it #1')
    })

    it(`it #2`, () => {
      console.log('it #2')
    })

    describe(`Describe #2`, () => {
      it(`it #3`, () => {
        console.log('it #3')
      })

      before(() => {
        console.log('before #4')
      })
    })
  })

  it(`it #4`, () => {
    console.log('it #4')
  })

  it(`it #5`, () => {
    console.log('it #5')
  })
})


/*Here are the results on what test finish where


Temporary spec - top level describe
before #1
before #2
beforeEach #2
it #4
    √ it #4
beforeEach #2
it #5
    √ it #5
    Describe #1
before #3
beforeEach #2
it #1
      √ it #1
afterEach #1
beforeEach #2
it #2
      √ it #2
afterEach #1
      Describe #2
before #4
beforeEach #2
it #3
        √ it #3
afterEach #1
after #2
after #1


*/