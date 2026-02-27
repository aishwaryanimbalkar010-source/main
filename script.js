import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String username = request.getParameter("username");

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<html><head>");
        out.println("<link rel='stylesheet' type='text/css' href='style.css'>");
        out.println("</head><body>");
        out.println("<div class='container'>");
        out.println("<h1>Hello, " + username + "!</h1>");
        out.println("<a href='index.html'>Go Back</a>");
        out.println("</div>");
        out.println("</body></html>");
    }
}