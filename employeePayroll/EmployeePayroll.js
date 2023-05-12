

class EmployeePayroll{
    constructor(name,profilePic,gender,department,slider,date,note){
        this.name=name;
		this.profilePic=profilePic;
        this.gender=gender;
        this.department=department;
        this.slider=slider;
        this.date=date;
        this.notes=notes;
    }
    set name(name){
		let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
		if(nameRegex.test(name))
			this._name=name;
		else {
			console.log("Name is Incorrect");
			throw "Name is Incorrect";
		}
        
    }
    get name(){
        return this._name;
    }
	set profilePic(profilePic){
        this._profilePic=profilePic;
    }
	
	get profilePic(){
        return this._profilePic;
    }

    set gender(gender){
        this._gender=gender;
    }

    get gender(){
        return this._gender;
    }

    set department(department){
        this._department=department;
    }

    get department(){
        return this._department;
    }

    set salary(slider){
        this._slider=slider;
    }

    get salary(){
        return this._slider;
    }

    set date(date){
        this._date=date;
    }

    get date(){
        return this._date;
    }

    set notes(notes){
        this._notes=notes;
    }

    get notes(){
        return this._notes;
    }

    toString(){
        return(
            "{"
            +" Name = "+this.name
			+", profilePic = "+this.profilePic
            +", Gender = "+this.gender
            +", Department = "+this.department
            +", slider = "+this.slider
            +", date = "+this.date
            +", Notes = "+this.notes
            +" }"
        )
    }

}


function save(){
const name = document.getElementById("name").value;
const profile = document.querySelector('input[name="profile"]:checked').value;
const gender = document.querySelector('input[name="gender"]:checked').value;
const departments = document.querySelectorAll('input[name="department"]:checked');
const salary = document.getElementById("slider").value;
const startDate = document.getElementById("date").value;
const notes = document.getElementById("notes").value;

// Create employee object
const employee = {
  name,
  profile,
  gender,
  departments: Array.from(departments).map(d => d.value),
  salary,
  startDate,
  notes
};

// Store employee object in local storage
localStorage.setItem("employee", JSON.stringify(employee));
alert("form submitted.")


// get existing contacts from local storage or initialize an empty array
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// add new contact to the array
contacts.push(contacts);

// store updated array in local storage
localStorage.setItem('contacts', JSON.stringify(contacts));

}
