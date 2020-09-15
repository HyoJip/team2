package member;

import java.sql.*;
import javax.naming.*;
import javax.sql.DataSource;

import member.memberBean;

public class memberDBBean {
	private static memberDBBean instance = new memberDBBean();
	
	public static memberDBBean getInstance() {
		return instance;
		
	}
	public Connection getConnection() throws Exception{
		Context ctx = new InitialContext();
		DataSource ds = (DataSource)ctx.lookup("java:comp/env/jdbc/oracle");
		return ds.getConnection();
	}
	
	public int insertMember(memberBean member) throws Exception{
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs=null;
		String sql = "";
		int number;
	
		try {
			con=getConnection();
			sql="select max(id) from users_user";
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				number = rs.getInt(1)+1;
			}else {
				number = 1;
			}
		
			sql = "insert into users_user values(?,?,?,?,?)";
			pstmt = con.prepareStatement(sql);
			
			pstmt.setInt(1, number);
			pstmt.setString(2, member.getEmail());
			pstmt.setString(3, member.getPassword());
			pstmt.setString(4, member.getUsername());
			pstmt.setDate(5, member.getBirthday());
			
			pstmt.executeUpdate();
			
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs!=null)rs.close();
				if(pstmt != null)pstmt.close();
				if(con != null)con.close();
			}catch(Exception e2) {
				e2.printStackTrace();
			}
		}
		
		return 1;
	}
	
	public int confirmID(String id) throws Exception{
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		String sql = "select email from users_user where email=?";
		int re =-1;
		
		try {
			con = getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				re = 1;
			}else {
				re = -1;
			}
			rs.close();
			pstmt.close();
			con.close();
		}catch(Exception e) {
			System.out.println();
			e.printStackTrace();
		}
		return re;
	}
	
	public int userCheck(String id, String password) throws Exception{
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		String sql = "select password from users_user where password=?";
		String db_password;
		int re= -1;
		
		try {
			con = getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				db_password=rs.getString("password");
					if(db_password.equals(password)) {
						re=1;							
					}else{
						re=0;							
					}
			}else {
				re=-1;
			}
				rs.close();
				pstmt.close();
				con.close();
				
			}catch(Exception e) {
			e.printStackTrace();
		}
		return re;
	}
	
	public memberBean getMember(String id) throws Exception {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select * from users_user where email=?";
		memberBean member = null;
		
		try {
				con = getConnection();
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, id);
				rs = pstmt.executeQuery();
			
			if(rs.next()) {
				member=new memberBean();
				member.setId(rs.getInt("id"));
				member.setEmail(rs.getString("email"));
				member.setPassword(rs.getString("password"));
				member.setUsername(rs.getString("username"));
				member.setBirthday(rs.getDate("birthday"));
				
			}
			rs.close();
			pstmt.close();
			con.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return member;
	}
}














