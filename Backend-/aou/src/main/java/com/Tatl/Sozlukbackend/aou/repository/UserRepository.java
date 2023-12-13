package com.Tatl.Sozlukbackend.aou.repository;

import com.Tatl.Sozlukbackend.aou.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Long> {
}
