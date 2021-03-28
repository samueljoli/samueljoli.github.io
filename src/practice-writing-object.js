class Student {
	constructor(args) {
  	const {
    	name,
      age,
      grade
    } = args;
    
  	this.name = name;
    this.age = age;
    this.grade = grade;
  }
  
  speak(target) {
  	const result = this[target];
    
    if(result) {
    	console.log(result);
    } else {
    	console.log("Can't share that information")
    }
  }
}

const student = new Student({name: 'Albert Einstein', age: 138, grade: 'Senior'});

student.speak('name');
student.speak('age');
student.speak('grade');
student.speak('credit-score');
