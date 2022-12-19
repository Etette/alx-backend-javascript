export default function taskBlock(trueorfalse) {
	const task = false;
	const task2 = true;

	if (trueorfalse) {
		//eslint-disable-next-line
		const task = true;
		// eslint-disable-next-line
		const task2 = false;
	}
	return [task, task2];
}
