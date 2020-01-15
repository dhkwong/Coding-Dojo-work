import java.util.Set;
import java.util.HashMap;
public class mapofthehash{
    public static void main(String args[]){
        HashMap<String, String> songMap = new HashMap<String, String>();
        songMap.put("title1", "song1");
        songMap.put("title2", "song2");
        songMap.put("title3", "song3");
        songMap.put("title4", "song4");
        String song = songMap.get("title4");
        System.out.println(song);
        Set<String> keys = songMap.keySet();
        for(String key : keys) {
            // System.out.println(key);
            System.out.println("Key: "+key+ "Song: "+songMap.get(key));    
        }
    }
}