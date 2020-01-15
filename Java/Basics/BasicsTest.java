import java.util.Arrays;
import java.util.ArrayList;
public class BasicsTest{
    public static void main(String[] args){
        Basics basic = new Basics();
        // basic.oddto255();
        // basic.oneto255();
        // basic.sum();
        int[] array = {-1,-31,2,3,4,5,20};
        // basic.iterate(array);
        // basic.findmax(array);
        // basic.oddarrayto255();
        // basic.greaterthany(array, 7);
        // basic.squarevalues(array);
        // basic.removeneg(array);
        // System.out.println( Arrays.toString(basic.maxminavg(array)));
        basic.shiftleft(array);
        System.out.println(Arrays.toString(array));
    }

}