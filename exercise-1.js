// ***For all the exercises, be sure to log the output of the function to the console.***

        /************************************************************************************/
        // 1. Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."
        /***************************************COMPLETE************************************/ 

        //your code...
        function tekCamp() {
            for(let i = 1; i <= 100; i++) {
                if(i%15 == 0) {
                    console.log("TEKcamp");
                }
                else if(i%3 == 0) {
                    console.log("TEK");
                }
                else if(i%5 == 0) {
                    console.log("camp");
                }
                else {
                    console.log(i);
                }
            }
        }
        tekCamp();



        /************************************************************************************/
        //2. Write a function that converts the current temperature from Fahrenheit to Celsius. 
        /***************************************COMPLETE************************************/ 

        // your code...
        function farenheitToCelsius(fTemp) {
            return cTemp = ((fTemp - 32) * 5/9)
        }
        console.log(farenheitToCelsius(64))




        /************************************************************************************/
        //3. Write a function that converts the Celsius temperature back to Fahrenheit. 
        /***************************************COMPLETE************************************/ 


        //your code...
        function celsiusToFarenheit(cTemp) {
            return fTemp = ((cTemp * 9/5) + 32)
        }
        console.log(celsiusToFarenheit(-10))





        /************************************************************************************/
        //4. Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.
        /***************************************COMPLETE************************************/ 

        //your code...
        function canVote(age) {
            if(age >= 18) {
                return true;
            }
            else return false;
        }
        console.log(canVote(4));







        /************************************************************************************/
        //5. Write a function that converts a string to an array. It should return an array.  
        /***************************************COMPLETE************************************/ 

        // your code...
        function strToArr(str) {
            return newArr = Array.from(str);
        }
        console.log(strToArr("Christopher"));







        /************************************************************************************/
        //6. Write a function that reverses your telephone number.  It should return the reversed telephone number.
        /***************************************COMPLETE************************************/ 

        // your code...
        function reversePhone(number) {
            const reversedNumber = number + "";
            return reversedNumber.split("").reverse().join("");
        }
        console.log(reversePhone(4693456789))





        /************************************************************************************/
        //7. Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.
        /***************************************COMPLETE************************************/ 

        //your code...
        function createCar() {
            var car = {
                make: "a",
                model: "b",
                year: "c",
                color: "d"
            }
        }
        var newCar = new createCar;
        newCar.make = "Dodge";
        newCar.model = "Ram";
        newCar.year = "2016";
        newCar.color = "Graphite";
        console.log(newCar);



        /************************************************************************************/
        //8. Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".
        /***************************************COMPLETE************************************/ 

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

        //your code...
        function listNumber(arr) {
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] % 2 === 0) {
                    console.log(arr[i] + " ,  even");
                }
                else {
                    console.log(arr[i] + " , odd");
                }
            }
        }
        listNumber([10,23,3,4]);






        /************************************************************************************/
        // const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        //9. Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.
        /***************************************COMPLETE************************************/ 

        //your code...
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        for(let i = 0; i < numbers.length; i++) {
            if(i % 3 === 0) {
                console.log(i);
            }
        }



        /************************************************************************************/
        // const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        //10.(a) Access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
        /***************************************COMPLETE************************************/ 
        
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        let lastElement = foodArray[foodArray.length -1];
        var school = lastElement;
        console.log(school);

        // const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        //10.(b) Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        function iterateArrs(x, y) {
            for(let i = 0; i < foodArray.length; i++) {
                if(i == 6) {
                    console.log(foodArray[i].program + " is " + adjectiveArray[i] + ".");
                }
                else if(foodArray[i].endsWith('s')) {
                    console.log(foodArray[i] + " are " + adjectiveArray[i] + ".");
                }
                else {
                    console.log(foodArray[i] + " is " + adjectiveArray[i] + ".");
                }
            }
        }
        iterateArrs(foodArray, adjectiveArray);


        /***********************************************************************************/
        //11. Refactor the for() loop to be a while loop.
        /***************************************COMPLETE************************************/ 

        // for(let i=0; i<10; i++) {
            // console.log(" the value of i in the loop is : " + i);
        // }

        //your code...
        let i = 0;
        while(i < 10) {
            i++;
            console.log(" the value of i in the loop is: " + i);
        }




        /********************************************************************************** */
        //12. Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.
        /***************************************COMPLETE************************************/ 
        
        // PEMDAS
        //your code...
        
        function add(int, num) {
            return sum = int + num;
        }
        function exp(int) {
            return exponent = int ** 2;
        }
        function multiply(sum, int) {
            return product = sum * int;
        }
        function divide(num, int) {
            return cloven = (product / exponent);
        }


        console.log(add(30, 2));
        console.log(exp(10));
        console.log(multiply(sum, 20));
        console.log(divide(product, exponent));


        /************************************************************************************/
        //13. Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 
        /***************************************COMPLETE************************************/ 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

        console.log(`${!!20 ? "truthy" : "falsey"} , because it is a positive non-zero number`);
        console.log(`${!!0 ? "truthy" : "falsey"} , because it is a zero number`);
        console.log(`${!!"zero" ? "truthy" : "falsey"} , because it is a defined and non-empty string`);
        console.log(`${!!zero ? "truthy" : "falsey"} , because it is a positive non-zero number, and a pre-defined variable`);
        // this one was so intense : it has two outcomes/
        console.log((!!`() => {console.log("hello TEKcamp!")` ? "truthy" : "falsy") + " functions are truthy.");
        console.log(`() => {console.log("hello TEKcamp!"); is ${!!(() => {console.log("hello TEKcamp!");})}. Functions are always truthy.`);
        // this one was so intense : it has two outcomes/
        console.log(`${!!null ? "truthy" : "falsey"} , because it is a single null value`);
        console.log(`${!!"0" ? "truthy" : "falsey"} , because it is a string containing a single zero`)
        console.log(`${!!!"" ? "truthy" : "falsey"} , because it is`);
        console.log(`${!!{} ? "truthy" : "falsey"} , because it is an empty object`);
        console.log(`${!!125 ? "truthy" : "falsey"} , because it is`);
        console.log(`${!!undefined ? "truthy" : "falsey"} , because undefined is always falsey`);
        console.log(`${!!"" ? "truthy" : "falsey"} , because it is an empty string`);






        /***********************************************************************************/
        //14. Refactor the following code using a switch statement:
        /***************************************COMPLETE************************************/ 

        const day = "Saturday";

        switch(day) {
            case "Monday":
                console.log("we got a long week ahead of us...");
                break;
            case "Tuesday":
                console.log("tuesday's are still beterr than mondays, but LONG way to go still");
                break;
            case "Wednesday":
                console.log("We are smack dab in the middle of the week");
                break;
            case "Thursday":
                console.log("Thursday night... the mood is right");
                break;
            case "Friday":
                console.log("TGIF.  Friday truly is the best day of the week!");
                break;
            default:
                console.log("It's a weekend!");
                break;
        }



        /***************************************************************/
        //15. Refactor the following statements to use ternary expressions:

        // const age = 10;
        // if (age > 21) console.log("adult"); else {
        //     console.log("minor");
        // }

        // if (age > 13 && age < 19) console.log('teen'); else {
        //     console.log("not a teenager");
        // };

        // if (age > 65) console.log("retired"); else {
        //     console.log("still working...");
        // }


        /***************************************************************/
        //16. Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -16. (a) Add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -16.(b) Add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your object using the 'this' keyword.
        */

        //your code...



        
        
        /************************************************************* */
        //17. Refactor the following statements into expressions
        
        // {
        //     const year = 2021;
        //     const nums = [1,2,3,4,5];
        //     let sum = 0;
        //     let i = 0;
        //     const doubled = [];

            // 1.
            // if(year > 2000 && year < 2100) {
            //     console.log("welcome to the 21st century");
            // }
            
            // 2.
            // for(let i=0; i<nums.length; i++) {
            //     sum += nums[i];
            // }
            // console.log(sum);
            
            
            // 3.
        //     while(i < nums.length) {
        //         doubled.push(nums[i]*2);
        //         i++;
        //     }
            
        //     console.log(doubled);
        // }


        /***********************************************************************************/
        //18. Use array methods to solve the following problems.
        /***************************************COMPLETE************************************/ 

        // const nums = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.

        //your code...
        const nums = [1,2,3,4,5];
        function square(arr) {
            return arr.map(function (x) {
                return x ** 2;
                // return Math.pow(x, 2);
            });
        }
        console.log(square(nums));


        /***********************************************************************************/
        // const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //19. Remove all numbers that are less than 5.  Store the results in a new array.
        /***************************************COMPLETE************************************/ 

        //your code...
        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        function lessThanFive(arr) {
            let newArr = [];
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] > 5) {
                    newArr.push(arr[i]);
                    continue;
                }
            }
            return newArr;
        }
        console.log(lessThanFive(fivePlus));




        /***********************************************************************************/
        //20. Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.
        /***************************************COMPLETE************************************/ 

        //your code...
        const rArr = Array.from({length: 20}, () => Math.floor(Math.random() * 20))
        console.log(rArr);
        const calculator = (accumulator, currentValue) => accumulator + currentValue;
        console.log(rArr.reduce(calculator));


        /***********************************************************************************/
        // const showNums = [12,22,33,44,55,66,77,88,99,101];
        //21. Print out the value of each number divided by 2.  There is no need to store the output in an array.



        /***************************************************************/
        /*22. Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */

        //your code here
        // var chessPieces = {
        //     pawn: 1,
        //     rook: 5,
        //     bishop: 3,
        //     knight: 3,
        //     queen: 9,
        //     king: null,
        // }
        // function chessCalc(pieces) {
            
        // }
        // chessCalc(pawn);


        
        /***************************************************************/
        // const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        //23. reverse the array, without modifying / `mutating` the ones array.



        /************************************************************* */
        //24. create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

        // function performer(cb) {
            //code goes here
        // }


        /************************************************************* */
        //25. For the given list of developers : 
        // const devs = [
        //     {
        //         name: 'Cameron',
        //         age: 23,
        //         gender: 'm',
        //         "tech_stack" : ['html','css','js','React']
        //     },
        //     {
        //         name: 'Liz',
        //         age: 20,
        //         gender: 'f',
        //         "tech_stack" : ['java','spring-boot','MySql']
        //     },
        //     {
        //         name: 'Chris',
        //         age: 102,
        //         gender: 'm',
        //         "tech_stack" : ['react','express','python']
        //     },
        //     {
        //         name: 'Rashid',
        //         age: 27,
        //         gender: 'm',
        //         "tech_stack" : ['thymeleaf','postgres','js','Angular']
        //     },
        //     {
        //         name: 'Annie',
        //         age: 30,
        //         gender: 'F',
        //         "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
        //     },
        //     {
        //         name: 'Dr. Patel',
        //         age: 52,
        //         gender: 'M',
        //         "tech_stack" : null
        //     },
        //     {
        //         name: 'Isaiah',
        //         age: 48,
        //         gender: 'M',
        //         "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
        //     },
        //     {
        //         name: 'Saima',
        //         age: 33,
        //         gender: 'F',
        //         "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
        //     },
        //     {
        //         name: 'Omar',
        //         age: 33,
        //         gender: 'm',
        //         "tech_stack" : ['c++']
        //     },
        //     {
        //         name: 'Mariam',
        //         age: 32,
        //         gender: 'f',
        //         "tech_stack" : null
        //     },
        // ];

        /************************** */  
        //25.(a) Find all devs older than 24

        //your code here...



        /************************** */  
        //25.(b) Remove all people who are not developers (i.e. no tech stack)

        //your code here...



        /************************** */  
        //25.(c) Calculate the total age of all the devs

        //your code here...



        /************************** */  
        //25.(d) Find all female devs

        //your code here...


        /************************** */  
        //25.(e) lowercase the genders of every dev

        //your code here...



        /************************** */  
        //25.(d) Sort the developers by name

        //your code here


        /************************** */  
        //25.(e) Sort the devs by age in descending order

        //your code here



        /************************** */  
        //25.(f) Sort the male coders by age

        //your code here


        /************************** */  
        //25.(g) For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

        //your code here


        /************************************************************* */
        //26. Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
        // const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

        // function maxNumber(numbers) {
            //your code...
        // }

        //26.(b) After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

        // function sortNums(numbers,desc=false) {
            //your code...
        // };



        /************************************************************* */
        //27. Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.


            //your code...



        /************************************************************* */
        //28. Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

        // const mapObj = new Map();
        // mapObj.set({company : "TEKsystems"},"object");

        // console.log(mapObj.has({company : "TEKsystems"}));

        //28.(a) The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

        //your code...


        //28.(b) loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


        /************************************************************* */
        //29. Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5
        // const operations = [];
        // function doMath(x,y) {};

        //your code...



        /************************************************************* */
        //30- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

        //your code...


        //30.(a)- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

        //your code


        //30.(b) Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

        //your code...



// DO NOT DELETE THIS EXPORT
// module.exports = {
//     tekCamp,
//     canVote
// }


//*************************************** */