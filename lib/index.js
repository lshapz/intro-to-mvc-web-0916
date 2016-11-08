// t =0
// let stores = [{teachers: [], students: [], courses: []}]
let stores = [{teachers: []}]
function store(){
  return stores[stores.length-1]
}

// $( "#button" ).click(function( event ) {
//   event.preventDefault();
//   var texts = $('input:text') 
//   var name = texts[0].value
//   var course = texts[1].value
//   var newest = new Teacher(name, course)
//   var map = stores.slice(-1)[0].teachers.map(element => {
//   return `${element.name} teaches ${element.subject} ` })
//   $( "#help" ).append(`${map}`);
//   $( "#help").append('<br></br>')
// });

// t = 2
// store = {teachers: [{name: 'avi', subject: 'ruby'},
  // {name: 'steven', subject: 'elixir'}]}

// redux

// const Course = (function createCourse(){
//   return class {
//     constructor(name, teacher_id){
//       this.name = name;
//       this.teacher_id = teacher_id;
//     }
//     teacher(){
//       return store().teachers.filter((teacher) => {
//         return teacher.id === this.teacher_id;
//       })
//     }
//   }
// }())


const Teacher = (function createTeacher(){
  var id = 0;

  return class {
    constructor(name, hometown){
      this.id = ++id
      this.name = name;
      this.hometown = hometown;
      stores.push(Object.assign({}, {teachers: [...store().teachers, this]}))
    }
    // courses(){
    //   return store().courses.filter((course) => {
    //     return course.teacher_id === this.id;
    //   })
    // }
  }
}())


function runQuery(){
  $("#help").empty()
  var texts = $('input:text') 
  var name = texts[0].value
  var hometown = texts[1].value
  var newest = new Teacher(name, hometown)
  var map = stores.slice(-1)[0].teachers.map(element => {
  return `${element.name} from ${element.hometown}` })
  map.forEach(element=> {
  $( "#help" ).append(`${element}`);
  $( "#help").append('<br></br>')
})

}

// function clearDiv(){

// }
