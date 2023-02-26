 function display(){
    alert("hi");

    display1();

    var x=10;
    x = "Hello";
    x = true;

    x = 10;
    y = 20;
    console.log(x / y);
    document.write(x); 

    x= x + 10;
    //or
    x += 10;//assignment operator
    x -= 10;

    x *= 10;

    x = 10;
    y = 20;

    //comparision operators
    // 1. == equal to
    x == y;
     //2. not equal 

     x != y; //true 

     //3. greater than 

     x > y; //false
     x >= y;

     //4. less than

     x < y; //true
     x <= y;

     //logical operator
     //&& || !

     //&& -  logical and 
     //iff both condition are true it will true else false

     // || - logical or 
     //if atleast one condition is true it will true else false 

     // ! -  negate 
     //convert false into true  and true innto false 

     //how to compare 

     if (x != y && x >10){
      //this block is executed when the condition is true
           console.log("x is not equal to y");
     }

     else{
      //this block is executed when the condition is false
      console.log("x is equal to y");
     }

 }


 function display1(){
    alert("faq");
 }