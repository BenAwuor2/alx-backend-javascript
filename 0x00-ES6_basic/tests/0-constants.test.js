import {taskFirst, getLast, taskNext} from '../0-constants';
test('return a string', () => {
    expect(taskFirst()).toBe("I prefer const when I can.");
    expect( getLast()).toBe(" is okay");
    expect(taskNext()).toBe("But sometimes let is okay");
})