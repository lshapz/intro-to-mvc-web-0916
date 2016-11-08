let stores = [{teachers: []}]
function store(){
  return stores[stores.length-1]
}

const Teacher = (function createTeacher(){
  var id = 0;

  return class {
    constructor(name, hometown){
      this.id = ++id
      this.name = name;
      this.hometown = hometown;
      stores.push(Object.assign({}, {teachers: [...store().teachers, this]}))
    }
  }
}())

function runQuery(){
  $("#help").empty()
  var texts = $('input:text') 
  var newTeacher = new Teacher(texts[0].value, texts[1].value)
  var map = stores.slice(-1)[0].teachers.map(element => {
  return `${element.name} from ${element.hometown}` })
  map.forEach(element=> {
  $( "#help" ).append(`${element}`);
  $( "#help").append('<br></br>')})
}

