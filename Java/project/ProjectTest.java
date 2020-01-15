public class ProjectTest{
    public static void main(String args[]){
        Project project = new Project();
        Project project1 = new Project("I am project1");
        Project project2 = new Project("I am project2", "project 2 description");

        System.out.println(project1.getName());
        System.out.println(project2.getName());
        project1.setName("new project 1 name");
        System.out.println(project1.getName());
        
        
    }

}