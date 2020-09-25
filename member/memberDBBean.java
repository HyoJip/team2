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
	
	public int insertMember(memberBean member) throws Exception{		//회원가입을 위한 메소드
		Connection con = null;
		PreparedStatement pstmt = null;
		String sql = "insert into users_user(email, password, username, birthday)"
				+ " values(?,?,?,?)";
		int isValid = 0;
		
		try {
			con=getConnection();		
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, member.getEmail());
			pstmt.setString(2, member.getPassword());
			pstmt.setString(3, member.getUsername());
			System.out.println(member.getBirthday());
			pstmt.setDate(4, Date.valueOf(member.getBirthday()));
			
			isValid = pstmt.executeUpdate();
			
			pstmt.close();
			con.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return isValid;
	}
	
	public int confirmID(String email) throws Exception{		//아이디 중복 확인
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		String sql = "select email from users_user where email=?";
		int isSame = 0;
		
		try {
			con = getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, email);
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				isSame = 1;
			}
			rs.close();
			pstmt.close();
			con.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return isSame;
	}
	
	public int userCheck(String email, String password) throws Exception{		//로그인(비밀번호 확인)
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		String sql = "select password from users_user where email=?";
		String db_password;
		int re= -1;
		
		try {
			con = getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, email);
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
	
	public memberBean getMember(String email) throws Exception {	//회원 정보 
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select * from users_user where email=?";
		memberBean member = null;
		
		try {
				con = getConnection();
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, email);
				rs = pstmt.executeQuery();
			
			if(rs.next()) {
				member=new memberBean();
				member.setEmail(rs.getString("email"));
				member.setPassword(rs.getString("password"));
				member.setUsername(rs.getString("username"));
				member.setBirthday(rs.getDate("birthday").toString());
				
			}
			rs.close();
			pstmt.close();
			con.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return member;
	}
	
	public int updateMember(memberBean member) throws Exception {	//회원 비밀번호 수정
		Connection con = null;
		PreparedStatement pstmt = null;
		String sql = "update users_user set password = ? where email = ?";
		int re = -1;	//기본 설정 값 -1
			
		try {
			con=getConnection();
			pstmt=con.prepareStatement(sql);
			
			pstmt.setString(1, member.getPassword());
			pstmt.setString(2, member.getEmail());
			
			re = pstmt.executeUpdate();
			
			
			pstmt.close();
			con.close();
		}catch(Exception e) {
			con.rollback();	//DB오류시 롤백
			e.printStackTrace();
		}
		return re;	//re값을 return	
	}
	
	public int login(String email, String password){		//로그인확인
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		String dbPW="";
		int x = -1;
		
		try {
			StringBuffer query = new StringBuffer();
			query.append("select password from users_user where email=?");
			
			con = getConnection();
			pstmt = con.prepareStatement(query.toString());
			pstmt.setString(1, email);
			rs = pstmt.executeQuery();
			
			if(rs.next()) {	//입력된 아이디에 해당 비밀번호가 있는 경우
				dbPW = rs.getString("password");
				
				if(dbPW.equals(password)) {
					x = 1;	//비밀번호가 일치 할 경우 인증 성공
				}else {
					x = 0;	//DB의 비밀번호롸 입력한 비밀번호가 다를경우
				}
			}else {
				x = -1;	//해당 아이디가 없는 경우
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if(pstmt != null) {pstmt.close();}
				if(con != null) {con.close();}
			}catch(Exception e2) {
				e2.printStackTrace();
			}
		}
		return x;
	}
}
