package room;

import java.util.Date;

public class RoomPhotoBean {

	private int 	r_id;
	private int 	r_room_id;
	private Date 	r_created;
	private Date 	r_updated;
	private String 	r_caption;	//사진삽화 등에 붙인 설명
	
	private String[] r_file;
			
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
	
	public String getR_caption() {
		return r_caption;
	}
	
	public void setR_caption(String r_caption) {
		this.r_caption = r_caption;
	}

	public String[] getR_file() {
		return r_file;
	}

	public void setR_file(String[] r_file) {
		this.r_file = r_file;
	}
	
	
}
