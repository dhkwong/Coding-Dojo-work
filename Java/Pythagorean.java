
public class Pythagorean{
    public double calculateHypotenuse(int legA, int legB){

        double A = Math.pow(legA,2);
        double B = Math.pow(legB,2);
        double squareRoot = Math.sqrt(A+B);
        return squareRoot;
    }

}