public class FizzBuzz{
    //print Fizz if the number is divisible by 3, Buzz if the number is divisible by 5, FizzBuzz if the number is divisible by 3 and 5, and the number itself for all other cases.
    public String fizzBuzz(int number){
        if (number%3==0 && number %5==0){
            String fizzbuzz = "Fizzbuzz";
            return fizzbuzz;
        }
        else if (number%5 ==0){
            String Buzz = "Buzz";
            return Buzz;
        }
        else if (number%3 == 0){
            String Fizz = "Fizz";
            return Fizz;
        }
        else{
            String num = String.valueOf(number);
            return num;
        }
    }
}