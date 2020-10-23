package room;

import java.util.Date;

public class RoomPhotoBean {

	private int 	r_id;
	private int 	r_room_id;
	private Date 	r_created;
	private Date 	r_updated;
	private String[] r_files;
	
	public static final int MAX = 6;
			
	public int getR_id() {
		return r_id;
	}
	
	public void setR_id(int r_id) {
		this.r_id = r_id;
	}
	
	public int getR_room_id() {
		return r_room_id;
	}
	
	public void setR_room_id(int r_room_id) {
		this.r_room_id = r_room_id;
	}
	
	public Date getR_created() {
		return r_created;
	}
	
	public void setR_created(Date r_created) {
		this.r_created = r_created;
	}
	
	public Date getR_updated() {
		return r_updated;
	}
	
	public void setR_updated(Date r_updated) {
		this.r_updated = r_updated;
	}

	public String[] getR_files() {
		return r_files;
	}

	public void setR_files(String[] r_files) {
		this.r_files = r_files;
	}
	
}
