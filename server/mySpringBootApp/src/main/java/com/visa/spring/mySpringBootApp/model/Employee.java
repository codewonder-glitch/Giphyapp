package com.visa.spring.mySpringBootApp.model;


import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "employees") 
public class Employee {




@Id
@GeneratedValue
@Column(name = "emp_id")
private long id;


@Column(name = "first_name")
private String firstName;

@Column(name = "last_name")
private String lastName;


@Column(name = "email")
private String email;

public Employee() {
super();
}

public Employee(String firstName, String lastName, String email) {
super();
this.firstName = firstName;
this.lastName = lastName;
this.email = email;
}

public long getId() {
return id;
}

public void setId(long id) {
this.id = id;
}


public String getfirstName() {
return firstName;
}

public void setfirstName(String firstName) {
this.firstName = firstName;
}

public String getlastName() {
return lastName;
}

public void setlastName(String lastName) {
this.lastName = lastName;
}


public String getEmail() {
return email;
}

public void setEmail(String email) {
this.email = email;
}

}


	
