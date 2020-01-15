public class StringManipulatorTest {
    public static void main(String[] args) {
        StringManipulator SM = new StringManipulator();
        System.out.println(SM.trimAndConcat("   hello  ", "   world   "));
        char o = 'a';
        System.out.println(SM.getIndexOrNull("hello", o));
        System.out.println(SM.getIndexOrNull("hello", 'w'));
        String word = SM.concatSubstring("Hello", 1, 2, "world");
        System.out.println(word);
    }
}