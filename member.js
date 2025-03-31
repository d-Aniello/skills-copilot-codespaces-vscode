function skillsMember() {
  this.skills = [];
}
skillsMember.prototype.addSkill = function(skill) {
  this.skills.push(skill);
}