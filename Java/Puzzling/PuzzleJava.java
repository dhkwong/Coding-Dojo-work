import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;

class PuzzleJava {
    public static void main(String args[]) {
        // System.out.println(gt10());
        // System.out.println(largerthan5());
        // alpha();
        // System.out.println(sorttenRandomNums());
        // System.out.println(random5());
        System.out.println(tenrandom5());

    }

    static ArrayList<Integer> gt10() {
        int[] array = { 3, 5, 1, 2, 7, 9, 8, 13, 25, 32 };
        ArrayList<Integer> newarray = new ArrayList();

        int sum = 0;
        System.out.println(Arrays.toString(array));
        for (int i = 0; i < array.length; i++) {

            if (array[i] > 10) {
                newarray.add(array[i]);

            }
            sum += array[i];
        }
        System.out.println(sum);
        return newarray;

    }

    static ArrayList<String> largerthan5() {
        // String[] array = {Nancy, Jinichi, Fujibayashi, Momochi, Ishikawa};
        ArrayList<String> arr = new ArrayList();
        ArrayList<String> newarr = new ArrayList();
        arr.add("Nancy");
        arr.add("Jinichi");
        arr.add("Fujibayashi");
        arr.add("momochi");
        arr.add("Ishikawa");
        System.out.println(arr);
        Collections.shuffle(arr);
        System.out.println(arr);
        for (int i = 0; i < arr.size(); i++) {
            if (arr.get(i).length() > 5) {
                newarr.add(arr.get(i));
            }
        }
        return newarr;
    }

    static void alpha() {
        ArrayList<Character> array = new ArrayList();
        for (int i = 0; i < 26; i++) {
            array.add((char) ('a' + i));
        }
        Collections.shuffle(array);
        System.out.println(array.get(25));
        if (array.get(0) == 'a' || array.get(0) == 'e' || array.get(0) == 'i' || array.get(0) == 'o'
                || array.get(0) == 'u') {
            System.out.println("this is a vowel");
        } else {
            System.out.println(array.get(0));
        }
    }

    static ArrayList<Integer> tenRandomNums() {
        ArrayList<Integer> arr = new ArrayList<>();
        ArrayList<Integer> newarr = new ArrayList<>();
        for (Integer i = 55; i < 101; i++) {
            arr.add(i);
        }
        Collections.shuffle(arr);
        for (int i = 0; i < 10; i++) {
            newarr.add(arr.get(i));

        }
        return newarr;
    }

    static ArrayList<Integer> sorttenRandomNums() {
        ArrayList<Integer> arr = new ArrayList<>();
        ArrayList<Integer> newarr = new ArrayList<>();
        for (Integer i = 55; i < 101; i++) {
            arr.add(i);
        }
        Collections.shuffle(arr);
        for (int i = 0; i < 10; i++) {
            newarr.add(arr.get(i));

        }
        Collections.sort(newarr);
        return newarr;
    }

    static StringBuilder random5() {
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" + "abcdefghijklmnopqrstuvxyz";
        // String str = "";
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 5; i++) {
            int index = (int) (AlphaNumericString.length() * Math.random());

            // add Character one by one in end of sb
            sb.append(AlphaNumericString.charAt(index));
        }
        return sb;
    }

    static ArrayList<StringBuilder> tenrandom5(){
        ArrayList<StringBuilder> arr = new ArrayList();
        for(int i = 0 ; i <10; i++){
            arr.add(random5());
        }
        return arr;
    }

}