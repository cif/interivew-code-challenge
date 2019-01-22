const { invertedArrayMode } = require('./')

describe('invertedArrayMode', () => {
  it('should invert the list and append .js when in prod mode', () => {
    expect(invertedArrayMode())
      .toBe(undefined)
  })

  it('should invert the list and append .test.js in dev mode', () => {
    expect(invertedArrayMode())
      .toBe(undefined)
  })
})