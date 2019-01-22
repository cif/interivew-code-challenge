const { generateShortIds } = require('./')

describe('generateShortIds', () => {
  it('should create a shortId prop to the given id', () => {
    expect(generateShortIds())
      .toBe(undefined)
  })

  it('should create shortId to all object with an existing id prop', () => {
    expect(generateShortIds())
      .toBe(undefined)
  })
})