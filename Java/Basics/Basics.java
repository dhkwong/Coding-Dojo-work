import java.util.ArrayList;
import java.util.Arrays;

public class Basics {
    void oneto255() {
        for (int i = 1; i < 256; i++) {
            System.out.println(i);
        }
    }

    void oddto255() {
        for (int i = 1; i < 256; i += 2) {
            System.out.println(i);
        }
    }

    void sum() {
        int sum = 0;
        for (int i = 0; i < 256; i++) {
            sum += i;
            System.out.println("New Number " + 0 + " sum: " + sum);
        }
    }

    void iterate(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

    }

    void findmax(int[] arr) {
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        System.out.println(max);
    }

    void oddarrayto255() {
        ArrayList<Integer> y = new ArrayList();
        for (int i = 1; i < 256; i += 2) {
            y.add(i);
        }
        System.out.println(y);
    }

    void greaterthany(int[] arr, int y) {
        int total = 0;
        for (int i : arr) { // makes a copy. passes by value, not reference
            if (y < i) {
                total++;
            }
        }
        System.out.println(total);

    }

    void squarevalues(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * arr[i];
        }
        System.out.println(Arrays.toString(arr));
    }

    void removeneg(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                arr[i] = 0;
            }
        }
        System.out.println(Arrays.toString(arr));
    }

    int[] maxminavg(int[] arr) {
        int max = arr[0];
        int min = arr[0];
        int sum = 0;
        int avg = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (max < arr[i]) {
                max = arr[i];
            }
            if (min > arr[i]) {
                min = arr[i];
            }

        }
        avg = sum / arr.length;
        int[] array = { max, min, avg };
        return array;
    }

    void shiftleft(int[] arr){
        for (int i = 1 ; i < arr.length; i++){
            if(i == arr.length -1){
                arr[i] = 0;
            }
            else{
                arr[i-1] = arr[i];
            }
        }
        
    }
}