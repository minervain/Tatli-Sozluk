package com.Tatl.Sozlukbackend.aou.repository;

import com.Tatl.Sozlukbackend.aou.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepo extends JpaRepository <Comment,Long> {
}
