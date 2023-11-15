let skillset = {
    java: { "Core Java": 10, "Java Build Tools": ['Apache', 'SonaType'] },
    javascript: { "HTML/CSS": 10, "Source Control": ['SVN', 'Mercurial'] } 
}
let selectedObj = {};
let subskills = {};

function home(req, res, next) {
    res.render('index', {list: skillset});
}

function postSkill(req, res, next) {
    selectedObj = skillset[req.body.skill];
    res.redirect('/skills');
}

function getSkills(req, res, next) {
    res.render('skills', {obj: selectedObj});
}

function postSubskills(req, res, next) {
    subskills = req.body;
    res.redirect('/subskills');
}

function getSubskills(req, res, next) {
    res.render('subskills', {list: subskills});
}

module.exports = {home, postSkill, getSkills, postSubskills, getSubskills}