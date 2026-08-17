export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
   var last = ' is okay';
   return last
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}