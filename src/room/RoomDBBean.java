package room;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class RoomDBBean {
	private static RoomDBBean instance = new RoomDBBean();
	
	public static RoomDBBean getInstance() {
		return instance;
	}
	
	public Connection getConnection() throws Exception{
		Context ctx = new InitialContext();
		DataSource ds = (DataSource)ctx
				.lookup("java:comp/env/jdbc/oracle");
		return ds.getConnection();
	}
		
	public ArrayList<RoomRoomBean> listRoom(){
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		ArrayList<RoomRoomBean> roomList = new ArrayList<RoomRoomBean>();
		try {
			con = getConnection();
			stmt = con.createStatement();
			String sql="select * from rooms_room order by id";
			rs = stmt.executeQuery(sql);
			
			while(rs.next()) {
				RoomRoomBean room = new RoomRoomBean();

				room.setR_id(rs.getInt(1));
				room.setR_host_id(rs.getInt(2));
				room.setR_name(rs.getString(3));
				room.setR_updated(rs.getDate(4));
				room.setR_created(rs.getDate(5));
				room.setR_description(rs.getString(6));
				room.setR_city(rs.getString(7));
				room.setR_price(rs.getInt(8));
				room.setR_address(rs.getString(9));
				room.setR_beds(rs.getInt(10));
				room.setR_bedrooms(rs.getInt(11));
				room.setR_baths(rs.getInt(12));
				room.setR_check_in(rs.getString(13));
				room.setR_check_out(rs.getString(14));
				room.setR_instant_book(rs.getInt(15));
				room.setR_guests(rs.getInt(16));
				
				roomList.add(room);
			}
		} catch (Exception e) {
			e.printStackTrace();
			
		}finally {
			try {
				if(rs != null) rs.close();
				if(stmt != null) stmt.close();
				if(con != null) con.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		
		return roomList;
	}
		
	public RoomRoomBean getRoom(int bid) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "";
		RoomRoomBean room = null;
		
		try {
			con = getConnection();
			sql = "select * from rooms_room where id=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, bid);
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				room = new RoomRoomBean();
				room.setR_id(rs.getInt(1));
				room.setR_host_id(rs.getInt(2));
				room.setR_name(rs.getString(3));
				room.setR_updated(rs.getDate(4));
				room.setR_created(rs.getDate(5));
				room.setR_description(rs.getString(6));
				room.setR_city(rs.getString(7));
				room.setR_price(rs.getInt(8));
				room.setR_address(rs.getString(9));
				room.setR_beds(rs.getInt(10));
				room.setR_bedrooms(rs.getInt(11));
				room.setR_baths(rs.getInt(12));
				room.setR_check_in(rs.getString(13));
				room.setR_check_out(rs.getString(14));
				room.setR_instant_book(rs.getInt(15));
				room.setR_guests(rs.getInt(16));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs != null) rs.close();
				if(pstmt != null) pstmt.close();
				if(con != null) con.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		
		return room;
	}
	
	/////////// 룸 정보 등록 /////////
	public int insertRoom(RoomRoomBean room) throws Exception{		//
		Connection con = null;
		PreparedStatement pstmt = null;
		
		String sql = "insert into rooms_room(name, updated, created, description, city, price, address, beds,"
				+ " bedrooms, baths, check_in, check_out, guests)"
				+ " values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
		
		int isV = 0;
		
		try {
			con = getConnection();		
			pstmt = con.prepareStatement(sql);
						
			pstmt.setString(1, room.getR_name());
			pstmt.setDate(2, (java.sql.Date)room.getR_updated());
			pstmt.setDate(3, (java.sql.Date)room.getR_created());
			pstmt.setString(4, room.getR_description());
			pstmt.setString(5, room.getR_city());
			pstmt.setInt(6, room.getR_price());
			pstmt.setString(7, room.getR_address());
			pstmt.setInt(8, room.getR_beds());
			pstmt.setInt(9, room.getR_bedrooms());
			pstmt.setInt(10, room.getR_baths());
			pstmt.setString(11, room.getR_check_in());
			pstmt.setString(12, room.getR_check_out());
			pstmt.setInt(13, room.getR_guests());
			
			isV = pstmt.executeUpdate();
						
			pstmt.close();
			con.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return isV;
	}
	
	/////////// 룸 포토정보 등록 /////////
	public int insertRoom_Photo(RoomPhotoBean roomPhoto) throws Exception{		//
		Connection con = null;
		PreparedStatement pstmt = null;	
	
		String sql = "insert into rooms_photo(rooms_id, created, updated, caption,"
				   + "\"file\","
				   + "\"file2\","
				   + "\"file3\","
				   + "\"file4\","
				   + "\"file5\","
				   + "\"file6\")"
				   + "values(?,?,?,?,?,?,?,?,?,?)";
		
		int isV = 0;
		
		try {
			con = getConnection();		
			pstmt = con.prepareStatement(sql);
	
			pstmt.setInt(1, roomPhoto.getR_room_id());
			pstmt.setDate(2, (java.sql.Date)roomPhoto.getR_created());
			pstmt.setDate(3, (java.sql.Date)roomPhoto.getR_updated());
			pstmt.setString(4, roomPhoto.getR_caption());
					
			String[] images = roomPhoto.getR_file();
			
			for(int i = 0; i < images.length; i++) {
				pstmt.setString(i + 5, images[i]);
			}
			
			isV = pstmt.executeUpdate();
						
			pstmt.close();
			con.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return isV;
	}
	
	
	/////////// 룸 정보 수정 /////////
	public int updateRoom(RoomRoomBean room) throws Exception {		//
		Connection con = null;
		PreparedStatement pstmt = null;
				
		String sql = "update rooms_room set name=?, updated=?, created=?, description=?, "
				   + "city=?, price=?, address=?, beds=?, bedrooms=?, baths=?, check_in=?, "
				   + "check_out=?, guests=? where id=?";
						
		int isV = 0;
		
		try {
			con = getConnection();		
			pstmt = con.prepareStatement(sql);
						
			pstmt.setString(1, room.getR_name());
			pstmt.setDate(2, (java.sql.Date)room.getR_updated());
			pstmt.setDate(3, (java.sql.Date)room.getR_created());
			pstmt.setString(4, room.getR_description());
			pstmt.setString(5, room.getR_city());
			pstmt.setInt(6, room.getR_price());
			pstmt.setString(7, room.getR_address());
			pstmt.setInt(8, room.getR_beds());
			pstmt.setInt(9, room.getR_bedrooms());
			pstmt.setInt(10, room.getR_baths());
			pstmt.setString(11, room.getR_check_in());
			pstmt.setString(12, room.getR_check_out());
			pstmt.setInt(13, room.getR_guests());
			pstmt.setInt(14, room.getR_id());
			
			isV = pstmt.executeUpdate();
									
			pstmt.close();
			con.close();
		}catch(Exception e) {
			con.rollback();
			e.printStackTrace();
		}
		return isV;
	}
	
	/////////// 룸 정보 삭제 /////////
	public int deleteRoom(RoomRoomBean room) throws Exception {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		int re=-1;
		
		String sql = "delete rooms_room where id=?";
				
		try {
			con = getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, room.getR_id());
			pstmt.executeUpdate();
			re = 1;
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs != null) rs.close();
				if(pstmt != null) pstmt.close();
				if(con != null) con.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		return re;
	}
}