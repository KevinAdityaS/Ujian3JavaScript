package com.Biodata.Main.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Biodata.Main.Entity.Userdata;
import com.Biodata.Main.Repository.UserdataRepository;

@Controller@RestController
@RequestMapping("/userdata")
public class UserdataController {

	@Autowired
	UserdataRepository userdataRepository;
	
	@GetMapping("/")
	public List<Userdata> getAll(){
		
		return (List<Userdata>) userdataRepository.findAll();
		
	}
	
	@GetMapping("/{uname}")
	public List<Userdata> getAllByUsername(@PathVariable String uname){
		
		return userdataRepository.findByUsername(uname);
		
	}
	
	@GetMapping("/{mail}")
	public List<Userdata> getAllByEmail(@PathVariable String mail){
		
		return userdataRepository.findByEmail(mail);
		
	}
	
	@GetMapping("/{phonenum}")
	public List<Userdata> getAllByPhone(@PathVariable String phonenum){
		
		return userdataRepository.findByPhone(phonenum);
		
	}
	
	@GetMapping("/{addrs}")
	public List<Userdata> getAllByAddress(@PathVariable String addrs){
		
		return userdataRepository.findByAddress(addrs);
		
	}
	
	@PostMapping("/addUserdata")
	public String addUserdata(@RequestBody Userdata userdata) {
		
		userdataRepository.save(userdata);
		return "Insert Successfully!";
		
	}
	
	@DeleteMapping("/deleteUserdata/{id}")
	public String deleteUserdata(@PathVariable String id) {
		
		userdataRepository.deleteById(Long.parseLong(id));
		return "Delete Successfully!";
		
	}
	
	@PutMapping("/updateUserdata/{id}")
	public String updateUserdata(@PathVariable String id, @RequestBody Userdata userdata) {
		
		userdata.setId(Long.parseLong(id));
		userdataRepository.save(userdata);
		return "Update Successfully!";
		
	}
	
}
