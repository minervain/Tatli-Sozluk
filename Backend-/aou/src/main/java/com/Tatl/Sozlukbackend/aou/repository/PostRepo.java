package com.Tatl.Sozlukbackend.aou.repository;

import com.Tatl.Sozlukbackend.aou.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepo extends JpaRepository<Post,Long> {
}
