import java.util.List;
import java.io.*;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("edit/?id")
public class EditFoodAdminServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@SuppressWarnings("unchecked")
	public void doGet( HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException {
		
		int id = Integer.parseInt(request.getParameter("id"));
		List<FoodItem> entries = (List<FoodItem>) getServletContext().getAttribute("entries");
		
		FoodItem foodEntry = null;
		
		for (FoodItem entry: entries) {
			if (entry.getId() == id) {
				foodEntry = entry;
			}
		}

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.println("<h1>Description</h1>");
		out.println("<form method=\"post\">");
		
		out.println("Food name: <input name='name' type='text' value='" + foodEntry.getName() + "'/></br>");
		out.println("<textarea name='description'>" + foodEntry.getDescription() + "</textarea></br>");
		out.println("<button>EDIT</button></form>");
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int id = Integer.parseInt(request.getParameter("id"));
		List<FoodItem> entries = (List<FoodItem>) getServletContext().getAttribute("entries");
		FoodItem foodEntry = null;
		
		int index = -1;
		
		for (int i = 0; i < entries.size(); i ++) {
			if (entries.get(i).getId() == id) {
				foodEntry = entries.get(i);
				index = i;
			}
		}
		entries.set(index, new FoodItem(request.getParameter("name"),request.getParameter("description"),foodEntry.getId()));
		getServletContext().setAttribute("entries", entries);
        response.sendRedirect("../foods");

		PrintWriter out = response.getWriter();
		out.println("<a href='/app/foods'>go back to foods</a>");
	}
}