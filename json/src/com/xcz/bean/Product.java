package com.xcz.bean;

public class Product
{
    private String id;
    private String productname;

    public String getId()
    {
        return id;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getProductname()
    {
        return productname;
    }

    public void setProductname(String productname)
    {
        this.productname = productname;
    }

    public Product(String id, String productname)
    {
        super();
        this.id = id;
        this.productname = productname;
    }

    public Product()
    {
        super();
    }

    @Override
    public String toString()
    {
        return "Product [id=" + id + ", productname=" + productname + "]";
    }

}
