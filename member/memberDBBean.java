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
	
	public int insertMember(memberBean member) throws Exception{		//ȸ�������� ���� �޼ҵ�
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
	
	public int confirmID(String email) throws Exception{		//���̵� �ߺ� Ȯ��
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
	
	public int userCheck(String email, String password) throws Exception{		//�α���(��й�ȣ Ȯ��)
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
	
	public memberBean getMember(String email) throws Exception {	//ȸ�� ���� 
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
	
	public int updateMember(memberBean member) throws Exception {	//ȸ�� ��й�ȣ ����
		Connection con = null;
		PreparedStatement pstmt = null;
		String sql = "update users_user set password = ? where email = ?";
		int re = -1;	//�⺻ ���� �� -1
			
		try {
			con=getConnection();
			pstmt=con.prepareStatement(sql);
			
			pstmt.setString(1, member.getPassword());
			pstmt.setString(2, member.getEmail());
			
			re = pstmt.executeUpdate();
			
			
			pstmt.close();
			con.close();
		}catch(Exception e) {
			con.rollback();	//DB������ �ѹ�
			e.printStackTrace();
		}
		return re;	//re���� return	
	}
	
	public int login(String email, String password){		//�α���Ȯ��
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
			
			if(rs.next()) {	//�Էµ� ���̵� �ش� ��й�ȣ�� �ִ� ���
				dbPW = rs.getString("password");
				
				if(dbPW.equals(password)) {
					x = 1;	//��й�ȣ�� ��ġ �� ��� ���� ����
				}else {
					x = 0;	//DB�� ��й�ȣ�� �Է��� ��й�ȣ�� �ٸ����
				}
			}else {
				x = -1;	//�ش� ���̵� ���� ���
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
