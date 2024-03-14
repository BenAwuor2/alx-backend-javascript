// //modify the variables inside the function taskBlock
// //so that the variables aren’t overwritten inside the conditional block.

// export default function taskBlock(trueOrFalse) {
//   var task = false;
//   var task2 = true;

//   if (trueOrFalse) {
//      const task = true;
//      const task2 = false;
//   }

//   return [task, task2];
// }

/* eslint-disable no-shadow */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}