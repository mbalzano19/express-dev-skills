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
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
}

// exporting to use elsewhere in my app
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}