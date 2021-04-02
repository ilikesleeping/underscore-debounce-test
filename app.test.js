var { increment, reset, value } = require('./app.js');
var _1_12_0 = require('underscore-1.12.0');
var _1_12_1 = require('underscore-1.12.1');

beforeEach(reset);

test('increment', () => {
    _1_12_0.times(3, increment);
    expect(value()).toBe(3);
});

test('debounced increment', () => {
    
    var debouncedIncrement = _1_12_0.debounce(increment, 1000, true);
    _1_12_0.times(3, debouncedIncrement);
    expect(value()).toBe(1);
});

// Passes, timer manipulation works
test('debounced increment with timer manipulation v1.12.0', () => {
    jest.useFakeTimers('modern');

    var debouncedIncrement = _1_12_0.debounce(increment, 1000, true);
    
    _1_12_0.times(3, () => {
        debouncedIncrement();
        jest.advanceTimersByTime(1000);
    });

    expect(value()).toBe(3);

    jest.useRealTimers();
});

// Fails, timer manipulation does not work
test('debounced increment with timer manipulation v1.12.1', () => {
    jest.useFakeTimers('modern');

    var debouncedIncrement = _1_12_1.debounce(increment, 1000, true);
    
    _1_12_1.times(3, () => {
        debouncedIncrement();
        jest.advanceTimersByTime(1000);
    });

    expect(value()).toBe(3);

    jest.useRealTimers();
});
