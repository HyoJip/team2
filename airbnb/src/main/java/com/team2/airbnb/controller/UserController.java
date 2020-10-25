package com.team2.airbnb.controller;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.team2.airbnb.model.User;
import com.team2.airbnb.service.UserService;

@Controller
public class UserController {

	private final UserService userService;
	
	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(Model model) {
		return "main";
	}
	
	@RequestMapping(value = "/login", method= RequestMethod.GET)
	public String userLogin() {
		return "user/login";
	}
	
	@RequestMapping(value = "/login", method= RequestMethod.POST)
	public String userLogin(@RequestParam(value = "email") String email, @RequestParam(value = "password") String password, Model model) {
		Map<String, Object> map = userService.login(email, password);
		int isValid = (int) map.get("isValid");
		if (isValid == 1) {			
			User user = (User) map.get("user");
			model.addAttribute("user", user);
//			servlet-context: LoginInterceptor가 리다이렉트 처리";
		}
		return "user/login";
	}
	
	@RequestMapping(value = "/logout", method= RequestMethod.POST)
	public String userLogout(HttpSession session) {
		session.invalidate();
		return "redirect:/login";
	}
	
	@RequestMapping(value = "/join", method= RequestMethod.GET)
	public String userJoin() {
		return "user/memberJoin";
	}
	
	@RequestMapping(value = "/join", method= RequestMethod.POST)
	public String userJoin(User user, Model model, MultipartFile file) throws IOException {
		int isDuplicated = userService.EmailIsDuplicated(user.getEmail());
		if (isDuplicated == 0) {
			int isSucessed = userService.joinUser(user, file);
			model.addAttribute("isSucessed", isSucessed);
		}
		model.addAttribute("isDuplicated", isDuplicated);
		return "user/memberJoin";
	}
	
	@RequestMapping(value = "/user/update", method= RequestMethod.GET)
	public String userJoinUpdate(HttpSession session, Model model) {
		User user = (User) session.getAttribute("login");
		model.addAttribute("user", user);
		return "user/memberInfo";
	}
	
	@RequestMapping(value = "/user/update", method= RequestMethod.POST)
	public String userJoinUpdate(User user, Model model, MultipartFile file) {
		int isValid = 0;
		try {
			isValid = userService.changeUserInfo(user, file);
		} catch (IOException e) {
			e.printStackTrace();
		}
		model.addAttribute("isValid", isValid);
		return "user/memberInfo";
	}
}