class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    quickFacts() {
        console.log(`${name} educates ${numberOfStudents} students, typically between the ages of ${level}.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
        const randomNum = Math.floor(substituteTeachers.length * Math.random());
        let teacher = substituteTeachers[randomNum];
        return teacher;
    }
    set numberOfStudents(numberOfStudentsIn) {
        if (typeof numberOfStudentsIn == 'number') {
            this._numberofStudents = numberOfStudentsIn
        }
        else {
            console.log('Invalid input');
            return 'Invalid input';
        };
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, "high", numberOfStudents);
        this._sportsTeams = sportsTeams
    }
    get sportsTeams() {
        return this._sportsTeams;
        console.log(sportsTeams);
    }
}
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or family member over the age of 13.');
lorraineHansbury.quickfacts
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);