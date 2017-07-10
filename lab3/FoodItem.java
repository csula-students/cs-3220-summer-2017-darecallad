


public class FoodItem{
	
	
	public final String name;
	public final String description;
	public final int id;
	

	public FoodItem (String name, String description, int id) {
		
		this.name = name;
		this.description = description;
		this.id = id;
	}



	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}
	
	public int getId() {
		return id;
	}
	
	
	
}