import java.util.List;

public class Restaurant{
	public final List<Integer> designRatings;
    public final List<Integer> tasteRatings;
	public final int id;
    public final String name;
    public final String url;
    

  
//int string sintrg
    public Restaurant(int id, String name, String url, List<Integer> designRatings, List<Integer> tasteRatings
    		) {
		// TODO Auto-generated constructor stub
    	this.id = id;
        this.name = name;
        this.url = url;
        this.designRatings = designRatings;
        this.tasteRatings = tasteRatings;
	}



   

    public List<Integer> getDesignRatings(){
    	// TODO
        return designRatings;
    }

    public List<Integer> getTasteRatings(){
    	// TODO
        return tasteRatings;
    }
    
	public int getId(){
		// TODO
        return id;
    }
    public String getName(){
    	// TODO
        return name;
    }

    public String getURL(){
    	// TODO
        return url;
    }
    
}