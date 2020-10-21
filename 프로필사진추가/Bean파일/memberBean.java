package member;

import java.sql.*;
import java.time.LocalDate;

public class memberBean {
	private int id;
	private String email;
	private String password;
	private String username;
	private LocalDate birthday;
	private int is_host;
	private int is_superuser;
	private String userphoto;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public LocalDate getBirthday() {		
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = LocalDate.parse(birthday);
	}
	public int getIs_host() {
		return is_host;
	}
	public void setIs_host(int is_host) {
		this.is_host = is_host;
	}
	public int getIs_superuser() {
		return is_superuser;
	}
	public void setIs_superuser(int is_superuser) {
		this.is_superuser = is_superuser;
	}
	public String getUserphoto() {
		return userphoto;
	}
	public void setUserphoto(String userphoto) {
		this.userphoto = userphoto;
	}
	
	
	
	
	
	
}
