package com.Biodata.Main.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Biodata.Main.Entity.Userdata;

public interface UserdataRepository extends JpaRepository<Userdata, Long>{

	@Query(value = "select * from biodata where username LIKE %?1%", nativeQuery = true)
	List<Userdata> findByUsername(String username);
	
	@Query(value = "select * from biodata where email LIKE %?1%", nativeQuery = true)
	List<Userdata> findByEmail(String email);
	
	@Query(value = "select * from biodata where phone LIKE %?1%", nativeQuery = true)
	List<Userdata> findByPhone(String phone);
	
	@Query(value = "select * from biodata where address LIKE %?1%", nativeQuery = true)
	List<Userdata> findByAddress(String address);
	
}
