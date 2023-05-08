// Best practice we name our Models without an s because we are representing a single thing/data item
// Model what a single ToDo should look like

const skills = [
    { id: 'JavaScript', description: 'Most widely used language for web development', hard: true },
	{ id: 'Python', description: 'Newer language with easy to ready syntax', hard: false },
	{ id: 'CSS', description: 'Language used to style html elements', hard: false },
]

// const skills = [
//     { name: 'javascript', description: 'most widely used language for web development', hard: true },
// 	{ name: 'python', description: 'newer language with easy to ready syntax', hard: false },
// 	{ name: 'css', description: 'language used to style html element', hard: false },
// ]

// READ - Index get all of a data (todos)
function getAll() {
    return skills
}

// READ - Show get 1 object based on the `id`
function getOne(id) {
    // id = parseInt(id)
    // req.params come in as strings always. If we need another data type we need to change string to type we need
    // name = parseInt(name)
    // I want to find the first element/item that matches my check
    // If nothing is found matching that check I want to return -1
    return skills.find(skill => skill.id === id)
}

function create(skill) {
	// I am trying to make the skill.id be what is entered into the add skill form, however
	// I am struggling to figure out how to do that in this function. How can I do that?

	// Start with the comment over in `new.ejs` before reading this one

	// Since you have the data coming in as { id: 'value that user typed in' }
	// You are saving over the user input here because `id` is where our data is stored as of right now.

	// There are 2 ways we can solve this issue and have this app running as we expect

	// First is to keep `new.ejs` as is and just remove the line `skill.id = Date.now() % 1000000` where we save over the user input. This will fix the problem completely

	// The second and the one that is closest to best practice is:
	// We change the data held in `skills` array so that the `id`s have numbers instead of string - this is common practice as `id`s should be unique and non repeatable
	// Once we have the `skills` data in the correct format we change the `name` attribute in the `new.ejs` to be what it represents which is a `skill`
	// The data will come through as { skill: 'value that user typed in' } we can assign this object an `id` and push it as normal like the code below.
	skill.id = Date.now() % 1000000
	skill.hard = false
	skills.push(skill)
}

function deleteOne(id) {
    // id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function update(id, updatedSkill) {
	// id = parseInt(id)
	const skill = skills.find((skill) => skill.id === id)

	// Wonderful work here let's just break down what is happening here and why we cannot update
	// Take a look at the following console.logs (encourage you to run these and see the flow yourself :))
	console.log('I am the skill that was found', skill)
	// {
	//     id: 'JavaScript',
	//     description: 'Most widely used language for web development',
	//     hard: true
	// }
	console.log('I am the user input to update that skill', updatedSkill)
	// {
	//     skill: 'Most widely used language for web development',
	//     hard: 'on'
	// }

	// Besides the `id` which we do not want to change these objects have very different key/value pairs
	// In your `skill` object you have the key `description` but in your user input you have the key `skill`
	// With Object.assign these keys need to be named the same thing in order to replace a value of the key
	// Change your `edit.ejs` input `name` attribute to be `description`

	// Let's also take a look at `hard` key/value pairs here. In your `skill` you have the value of `hard` being a boolean (true/false) but in your user input you have `hard` value being a string of `on` or `off`. You will need to do some logic to change that over to a boolean
	Object.assign(skill, updatedSkill)

	// There are 2 ways we can solve this. Keep the data as in and just use Object.assign to modify what we need
	Object.assign(skill, {
		// changing the `description` key with the value coming in from `updatedSkill.skill`
		description: updatedSkill.skill,
		// using a ternary to get a true or false from the `on` or `off` input
		hard: updatedSkill.hard === 'on' ? true : false,
	})

	// Or again the way that is best practice.
	// First change the name attribute in the input form on `edit.ejs` form to be `description`
	// That way our user input is coming in as:
	// {
	//     description: 'Most widely used language for web development',
	//     hard: 'on'
	// }
	// Then use something to change the `on` and `off` value in the `hard` key to be a boolean.
	// Ternary is a good option here:
	// updatedSkill.hard = updatedSkill.hard === 'on' ? true : false,
	// Then you can use the Object.assign as you were meaning too
	// Object.assign(skill, updatedSkill)
}

// exporting to use elsewhere in my app
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}