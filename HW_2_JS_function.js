//1. Сделать функцию, которая при вызове напишет в консоль сумму 2-х переданных в неё чисел

function f1(a, b) {
    console.log(a+b)
    return a+b;
}

f1(1, 2);

//2. Сделать функцию, которая вернёт в консоль квадрат переданного числа
function f2(a) {
    console.log(a*a)
    return a*a;
}

f2(25);

//3.Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON {"name":И, "surname":Ф, "middlename":О}
function f3(name,surname,middlename) {
    a = JSON.stringify({name:"I", surname:"F", middlename:"O"});
    console.log(a);
    return a;
    }
f3("I","F","O")


//вывести в консоль переменную-массив в которой будут все чётные числа. 
//Переменную возвращяет функция которая на вход принимает массив чисел.
//Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"

function f4(arr){
    let res = [];
    for(let i=0; i<arr.length; i++){
        if (arr[i] % 2 == 0) {
        res.push(arr[i]);
        }
    }
    
    if (res.length > 0) {
        console.log(res);
        }
    else {
        return "No even numbers";
    }
}    

f4([18,16,134,31]);

// 5.Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове.
// Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".

 
function f5 (str, sim){
    let counter = 0;
    for (let i=0; i<str.length; i++){
        if (str[i]==sim) {
        counter++
        }
    }
    if (i=str.length) {
        console.log(counter)
    }
    if(counter==0){
        console.log("No a characters");
    }
}
  
f5("abrakadabra", "a");

// 6. Написать функцию, которая на вход получает JSON а возвращяет XML

function json_to_xml(json_obj) {
    var xml = "<root>";
    for (var key in json_obj) {
        if (json_obj.hasOwnProperty(key)) {
            xml += "<" + key + ">" + json_obj[key] + "</" + key + ">";
        }
    }
    xml += "</root>";
    return xml;
  }
  
  var json_obj = {name: "Alex", age: 33, city: "Minsk"};
  console.log(json_to_xml(json_obj));
