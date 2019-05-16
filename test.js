'use strict'
// Require the dev-dependencies
var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    should = chai.should();
const app = require('./app')

//var danishGrades = ['12', '10', '7', '4', '02', '00', '-3'];
//var ectsGrades = ['A', 'B', 'C', 'D', 'E', 'Fx', 'F'];

// describe('Grade converter', () => {
//     for (var i = 0; i < 7; i++) {
//         it('should return grade ' + danishGrades[i] + ' converted to grade ' + ectsGrades[i], () => {})
//         assert.equal(app.gradeConvert(danishGrades[i]), ectsGrades[i]);
//     }
// });

describe('Grade converter', () => {
    it('should return grade 12 converted to grade A', () => {
        assert.equal(app.gradeConvert('12'), 'A');
    })
});

describe('Grade converter', () => {
    it('should return grade 10 converted to grade B', () => {
        assert.equal(app.gradeConvert('10'), 'B');
    })
});

describe('Grade converter', () => {
    it('should return grade 7 converted to grade C', () => {
        assert.equal(app.gradeConvert('7'), 'C');
    })
});

describe('Grade converter', () => {
    it('should return grade 4 converted to grade D', () => {
        assert.equal(app.gradeConvert('4'), 'D');
    })
});

describe('Grade converter', () => {
    it('should return grade 02 converted to grade E', () => {
        assert.equal(app.gradeConvert('02'), 'E');
    })
});

describe('Grade converter', () => {
    it('should return grade 00 converted to grade Fx', () => {
        assert.equal(app.gradeConvert('00'), 'Fx');
    })
});

describe('Grade converter', () => {
    it('should return grade -3 converted to grade F', () => {
        assert.equal(app.gradeConvert('-3'), 'F');
    })
});