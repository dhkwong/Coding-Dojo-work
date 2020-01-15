public class StringManipulator{
    String trimAndConcat(String A, String B){
        String x =A.trim();
        String y = B.trim();
        String C = x.concat(y);
        return C;
    }

    Integer getIndexOrNull(String input, char index){
        Integer location;
        location = input.indexOf(index);
        if(location == -1){
            location = null;
        }
        return location;
    }
    Integer getIndexOrNull(String word, String find){
        Integer location;
        location = word.indexOf(find);
        if(location == -1){
            location = null;
        }
        return location;
    }
    String concatSubstring(String w1, int index1, int index2, String w2){
        String sub = w1.substring(index1, index2);
        w2 = w2.concat(sub);
        return w2;
    }
}