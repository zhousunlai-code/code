package com.xcz.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import com.xcz.bean.Product;

public class AjaxJsonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private static List<Product> list;
    static{
        list = new ArrayList<Product>();
        
        list.add(new Product("12", "Iphone5"));
        list.add(new Product("13", "huawei"));
        list.add(new Product("14", "HTC"));
        
    }
    
    public AjaxJsonServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    List<Product> list = AjaxJsonServlet.list;
        JSONArray jsa = JSONArray.fromObject(list);
        response.getWriter().print(jsa.toString());
        System.out.println(jsa.toString());
	}

}
