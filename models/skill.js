// Best practice we name our Models without an s because we are representing a single thing/data item
// Model what a single ToDo should look like

const skills = [
    { id: 'javascript', description: 'Most widely used language for web development', hard: true },
	{ id: 'python', description: 'Newer language with easy to ready syntax', hard: false },
	{ id: 'css', description: 'Language used to style html elements', hard: false },
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

    // req.params come in as strings always. If we need another data type we need to change string to type we need
    // name = parseInt(name)
    // I want to find the first element/item that matches my check
    // If nothing is found matching that check I want to return -1
    return skills.find(skill => skill.id === id)
}

// exporting to use elsewhere in my app
module.exports = {
    getAll,
    getOne
}