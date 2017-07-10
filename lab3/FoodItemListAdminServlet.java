import java.io.*;
import java.util.List;
import java.util.ArrayList;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet(loadOnStartup=1, urlPatterns={"/admin/foods/"})
public class FoodItemListAdminServlet extends HttpServlet {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void init() {
		
		
		
		List<FoodItem> entries = new ArrayList<>();
		entries.add(new FoodItem("AAAA", "Japanese style", entries.size()));
		entries.add(new FoodItem("BBBB", "Japanese style",entries.size()));
        entries.add(new FoodItem( "CCCC", "Japanese style",entries.size()));
		getServletContext().setAttribute("entries", entries);
	}

	@SuppressWarnings("unchecked")
	public void doGet( HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		List<FoodItem> entries = (List<FoodItem>) getServletContext().getAttribute("entries");
		
		response.setContentType("text/html");

		out.println("<head>");
		out.println("<style>body { " + "}</style>");
		out.println("</head>");

		out.println("<h1> Restaurant! </h1><table>");
		
		// food item 
		for (FoodItem entry: entries) {
			out.println(
			"<tr><td>" + entry.getName() + " </td><td>" + entry.getDescription() + "</td><td><a href='edit/?id" + 
			entry.getId() + "'>Edit</a><a href='delete'>Delete</a></td></tr></table>");}
		
		// 
		out.println("<a href='create'>Add Description</a>");
	}
}
