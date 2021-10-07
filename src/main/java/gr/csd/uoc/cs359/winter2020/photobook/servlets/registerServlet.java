/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gr.csd.uoc.cs359.winter2020.photobook.servlets;

import com.google.gson.Gson;
import gr.csd.uoc.cs359.winter2020.photobook.db.UserDB;
import static gr.csd.uoc.cs359.winter2020.photobook.db.UserDB.getUser;
import gr.csd.uoc.cs359.winter2020.photobook.model.User;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author manos
 */
public class registerServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String usermail = request.getParameter("usermail");
        String username = request.getParameter("username");
        String userpassword = request.getParameter("password");
        String firstname = request.getParameter("firstname");
        String surname = request.getParameter("surname");
        String birthdate = request.getParameter("birthdate");
        String country = request.getParameter("country");
        String town = request.getParameter("town");
        String address = request.getParameter("address");
        String work = request.getParameter("work");
        String interests = request.getParameter("interests");
        String general_info = request.getParameter("general_info");

        try {
            User user = new User();
            user.setUserName(username);
            user.setEmail(usermail);
            user.setPassword(userpassword);
            user.setFirstName(firstname);
            user.setLastName(surname);
            user.setBirthDate(birthdate);
            user.setCountry(country);
            user.setTown(town);
            user.setAddress(address);
            user.setOccupation(work);
            user.setGender("Male");
            user.setInterests(interests);
            user.setInfo(general_info);

            if (UserDB.checkValidUserName(username)) {
                // Add user to database
                System.out.println("==>Adding users");
                UserDB.addUser(user);
                System.out.println(user.toString());
                System.out.println("==>Added user");
                //session starts here
                HttpSession session = request.getSession(true);
            } else {
                System.out.println("User already exists.... No more Turings please!");
            }

            // Servlet Response
            User testUser = getUser(request.getParameter("username"));
            Gson gson = new Gson();
            String json = gson.toJson(testUser);
            response.getWriter().write(json);

//            RequestDispatcher rd = request.getRequestDispatcher("createUserSessionServlet");
//            rd.forward(request, response);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(loginServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
